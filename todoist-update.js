const axios = require("axios");
const Humanize = require("humanize-plus");

const TODOIST_API_KEY = "c1d1363fde9478b301eb037c4541abafb00ee07c";

async function main() {
    const stats = await axios(`https://api.todoist.com/sync/v8.3/completed/get_stats?token=${TODOIST_API_KEY}`);
    await updateReadme(stats.data);
}

async function updateReadme(data) {

    const lines = [];
    const { karma, completed_count, days_items, goals } = data;
  
    const karmaPoint = [`🏅 ${Humanize.intComma(karma)} Karma Points`];
    lines.push(karmaPoint.join(" "));
  
    const dailyGoal = [
      `🌸 Completed ${days_items[0].total_completed.toString()} tasks today`,
    ];
    lines.push(dailyGoal.join(" "));
  
    const totalTasks = [`✅ Completed ${Humanize.intComma(completed_count)} tasks so far`];
    lines.push(totalTasks.join(" "));
  
    const longestStreak = [
      `⌛ Longest streak is ${goals.max_daily_streak.count} days`,
    ];
    lines.push(longestStreak.join(" "));
  
    if (lines.length == 0) return;
    console.log(lines.join("\n"));
  }
  
  (async () => {
    await main();
  })();