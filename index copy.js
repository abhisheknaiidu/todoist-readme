/**
 * @fileoverview This is the main entry point for the application.
 *
 * @author  Hasan <hd@doy.tech>
 * @version 1.0.0
 * @license MIT
 *
 */

/**
 * Sample Json response from Todoist API
 *
 * @typedef {Object} Task
 * [
    {
        "id": "6101124591",
        "assignerId": null,
        "assigneeId": null,
        "projectId": "2295991257",
        "sectionId": "104759435",
        "parentId": "6285834182",
        "order": 1,
        "content": "Play with motion.page",
        "description": "[GSAP Interactions & Page Events - PART 5](https://community.motion.page/video-tutorials/post/gsap-interactions-page-events---part-5-74xqBSsarMJshkt)",
        "isCompleted": false,
        "labels": [],
        "priority": 1,
        "commentCount": 0,
        "creatorId": "40515698",
        "createdAt": "2022-08-20T06:40:00.531934Z",
        "due": null,
        "url": "https://todoist.com/showTask?id=6101124591"
    },
    {
        "id": "6101937496",
        "assignerId": null,
        "assigneeId": null,
        "projectId": "2299721406",
        "sectionId": null,
        "parentId": null,
        "order": 5,
        "content": "Check Vendor Shop Management within App",
        "description": "",
        "isCompleted": false,
        "labels": [
            "dev"
        ],
        "priority": 2,
        "commentCount": 0,
        "creatorId": "40515698",
        "createdAt": "2022-08-20T15:43:15.658350Z",
        "due": null,
        "url": "https://todoist.com/showTask?id=6101937496"
    }
  ]
 */
import { TodoistApi } from "@doist/todoist-api-typescript"

const api = new TodoistApi("3f9312e364c52bb69b62f81a8029d7ff34a031f6")

api.getTasks()
  .then((tasks) => {
    const selectedTasks = [];
    tasks.forEach((task) => {
      if (task.projectId === "2295991257") {
        if (task.due !== null) {
          task.dueDiff = Math.abs(new Date(task.due.date).getTime() - new Date().getTime());
          task.dueDiff = Math.ceil(task.dueDiff / (1000 * 3600 * 24));
          task.dueDiff = task.dueDiff === 0 ? "Today" : task.dueDiff + " days";
        } else {
          task.dueDiff = "⌛️ Unknown";
        }
        selectedTasks.push(task);
      }
    });

    console.table(selectedTasks,
      ["id", "dueDiff"]);

  })
  .catch((error) => console.log(error))

