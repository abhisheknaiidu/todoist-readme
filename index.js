const core = require("@actions/core");
const axios = require("axios");
const Humanize = require("humanize-plus");
const fs = require("fs");

const TODOIST_API_KEY = core.getInput("TODOIST_API_KEY");

async function main() {
    const stats = await axios(`https://api.todoist.com/sync/v8.3/completed/get_stats?token=${TODOIST_API_KEY}`);
    await updateReadme(stats.data);
}

async function updateReadme(data) {

    const todoist = [];
    const { karma, completed_count, days_items, goals } = data;
  
    const karmaPoint = [`🌈 ${Humanize.intComma(karma)} Karma Points`];
    todoist.push(karmaPoint.join(" "));
  
    const dailyGoal = [
      `🌸 Completed ${days_items[0].total_completed.toString()} tasks today`,
    ];
    todoist.push(dailyGoal.join(" "));
  
    const totalTasks = [`✅ Completed ${Humanize.intComma(completed_count)} tasks so far`];
    todoist.push(totalTasks.join(" "));
  
    const longestStreak = [
      `⌛ Longest streak is ${goals.max_daily_streak.count} days`,
    ];
    todoist.push(longestStreak.join(" "));
  
    if (todoist.length == 0) return;
    // console.log(lines.join("\n"));

    try {
        console.log(todoist.join("\n"));
        const README_FILE_PATH = "./README.md";
        console.log("1");
        const readmeData = fs.readFileSync(README_FILE_PATH, "utf8");
        console.log("2");
        const newReadme = buildReadme(readmeData, todoist);

        if (newReadme !== readmeData) {
            core.info('Writing to ' + README_FILE_PATH);
            fs.writeFileSync(README_FILE_PATH, newReadme);
          }

      } catch (error) {
        console.error(`Unable to update readme\n${error}`);
      }
  }
  
  const buildReadme = (prevReadmeContent, newReadmeContent) => {
    const tagToLookFor = '<!-- TODO-IST:';
    const closingTag = '-->';
    const startOfOpeningTagIndex = prevReadmeContent.indexOf(
      `${tagToLookFor}START`,
    );
    const endOfOpeningTagIndex = prevReadmeContent.indexOf(
      closingTag,
      startOfOpeningTagIndex,
    );
    const startOfClosingTagIndex = prevReadmeContent.indexOf(
      `${tagToLookFor}END`,
      endOfOpeningTagIndex,
    );
    if (
      startOfOpeningTagIndex === -1 ||
      endOfOpeningTagIndex === -1 ||
      startOfClosingTagIndex === -1
    ) {
      core.error(
        `Cannot find the comment tag on the readme:\n<!-- ${tagToLookFor}:START -->\n<!-- ${tagToLookFor}:END -->`
      );
      process.exit(1);
    }
    return [
      prevReadmeContent.slice(0, endOfOpeningTagIndex + closingTag.length),
      '',
      newReadmeContent,
      '',
      prevReadmeContent.slice(startOfClosingTagIndex),
    ].join('');
  };

  (async () => {
    await main();
  })();