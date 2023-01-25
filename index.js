const core = require("@actions/core");
const axios = require("axios");
const Humanize = require("humanize-plus");
const fs = require("fs");
const exec = require("child_process").exec;

async function main() {
  try {
    const TODOIST_API_KEY = core.getInput("TODOIST_API_KEY");
    const PREMIUM = core.getInput("PREMIUM");

    if (!TODOIST_API_KEY) {
      throw new Error("Todoist API key is required");
    }

    const stats = await axios(`https://api.todoist.com/sync/v9/completed/get_stats?token=${TODOIST_API_KEY}`);

    await updateReadme(stats.data);

    if (!process.env.TEST_MODE) {
      await commitReadme();
    }
  } catch (error) {
    core.setFailed(error.message);
  }
}

let todoist = [];
const README_FILE_PATH = "./README.md";

async function updateReadme(data) {
  try {
    if (!fs.existsSync(README_FILE_PATH)) {
      throw new Error("README file not found");
    }

    const { karma, completed_count, days_items, goals, week_items } = data;

    const karmaPoint = [`🏆  **${Humanize.intComma(karma)}** Karma Points`];
    todoist.push(karmaPoint);

    const dailyGoal = [`🌸  Completed **${days_items[0].total_completed.toString()}** tasks today`];
    todoist.push(dailyGoal);

    if (PREMIUM === "true") {
      const weekItems = [`🗓  Completed **${week_items[0].total_completed.toString()}** tasks this week`];
      todoist.push(weekItems);
    }

    const totalTasks = [`✅  Completed **${Humanize.intComma(completed_count)}** tasks so far`];
    todoist.push(totalTasks);

    const longestStreak = [`⏳  Longest streak is **${goals.max_daily_streak.count}** days`];
    todoist.push(longestStreak);

    if (todoist.length === 0) {
      throw new Error("Nothing fetched");
    }

    const readmeData = fs.readFileSync(README_FILE_PATH, "utf8");
    const newReadme = buildReadme(readmeData, todoist.join("           \n"));

    if (newReadme !== readmeData) {
      core.info("Writing to " + README_FILE_PATH);
      fs.writeFileSync(README_FILE_PATH, newReadme);
    } else {
      core.info("No change detected, skipping");
      process.exit(0);
    }
  } catch (error) {
    core.setFailed(error.message);
  }
}

const buildReadme = (prevReadmeContent, newReadmeContent) => {
  const tagToLookFor = "<!-- TODO-IST:";
  const closingTag = "-->";
  const startOfOpeningTagIndex = prevReadmeContent.indexOf(`${tagToLookFor}START`);
  const endOfOpeningTagIndex = prevReadmeContent.indexOf(closingTag, startOfOpeningTagIndex);
  const startOfClosingTagIndex = prevReadmeContent.indexOf(`${tagToLookFor}END`, endOfOpeningTagIndex);
  if (startOfOpeningTagIndex === -1 || endOfOpeningTagIndex === -1 || startOfClosingTagIndex === -1) {
    core.error(`Cannot find the comment tags in the README file. Please add the following comment to the README file:
            ${tagToLookFor}START${closingTag}
            ${tagToLookFor}END${closingTag}`);
    throw new Error("Cannot find the comment tags in the README file");
  }
  return (
    prevReadmeContent.substring(0, endOfOpeningTagIndex + closingTag.length) +
    "\n" +
    newReadmeContent +
    "\n" +
    prevReadmeContent.substring(startOfClosingTagIndex)
  );
};

async function commitReadme() {
  try {
    const commitMessage = core.getInput("commit_message") || "Update README with Todoist statistics";
    const push = await exec(`git add README.md && git commit -m "${commitMessage}" && git push`);

    if (push.stderr) {
      throw new Error(`Failed to commit and push changes: ${push.stderr}`);
    }

    notifyUserOnSuccess();
    
  } catch (error) {
    core.setFailed(error.message);
  }

  // Method to notify the user if the action succeeded
  function notifyUserOnSuccess() {
    core.info("Successfully updated README with Todoist statistics");

    if (process.env.TEST_MODE) {
      process.exit(0);
    }

    process.exit(0);

  }
}

// Method to notify the user if the action failed
function notifyUserOnFailure(error) {
  core.setFailed(error.message);
}

// Notify Slack on failure
process.on("uncaughtException", notifyUserOnFailure);
process.on("unhandledRejection", notifyUserOnFailure);



main();
