import { TodoistApi } from "@doist/todoist-api-typescript"

const api = new TodoistApi("3f9312e364c52bb69b62f81a8029d7ff34a031f6")

api.getTasks()
  .then((tasks) => {
    tasks.forEach(task => {
      console.log(JSON.stringify(task))
    });
  })
  .catch((error) => console.log(error))

