const core = require("@actions/core");
const axios = require("axios");
const Humanize = require("humanize-plus");
const fs = require("fs");
const exec = require("./exec");

const TODOIST_API_KEY = core.getInput("TODOIST_API_KEY");

async function main() {
    const stats = await axios(`https://api.todoist.com/sync/v8.3/completed/get_stats?token=${TODOIST_API_KEY}`);
    await updateReadme(stats.data);
}

let todoist = [];
let jobFailFlag = false;
const README_FILE_PATH = './README.md';

async function updateReadme(data) {

    
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
  }

  if (todoist.length > 0) {
      const readmeData = fs.readFileSync(README_FILE_PATH, "utf8");


      const newReadme = buildReadme(readmeData, todoist);
      if (newReadme !== readmeData) {
        core.info('Writing to ' + README_FILE_PATH);
        fs.writeFileSync(README_FILE_PATH, newReadme);
        if (!process.env.TEST_MODE) {
          // noinspection JSIgnoredPromiseFromCall
          commitReadme();
        }
      } else {
        core.info('No change detected, skipping');
        process.exit(0);
      }
    } 
   else {
    core.info("0 blog posts fetched");
    process.exit(jobFailFlag ? 1 : 0);
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
      '\n',
      newReadmeContent,
      '\n',
      prevReadmeContent.slice(startOfClosingTagIndex),
    ].join('');
  };

  const commitReadme = async () => {
    // Getting config
    const committerUsername = 'Abhishek Naidu';
    const committerEmail = 'example@gmail.com';
    const commitMessage = 'Todoist updated.';
    // Doing commit and push
    await exec('git', [
      'config',
      '--global',
      'user.email',
      committerEmail,
    ]);
    await exec('git', ['config', '--global', 'user.name', committerUsername]);
    await exec('git', ['add', README_FILE_PATH]);
    await exec('git', ['commit', '-m', commitMessage]);
    await exec('git', ['push']);
    core.info("Readme updated successfully.");
    // Making job fail if one of the source fails
    process.exit(jobFailFlag ? 1 : 0);
  };

  (async () => {
    await main();
  })();