export const TASK_ENDPOINTS = {
  // QUERIES(GET)
  GET_TASKS: "/get-tasks",
  GET_TASK_BY_ID: (taskId) => `/get-task-by-id/${taskId}`,

  // MUTATIONS(POST/PUT/UPDATE)
  ADD_TASK: "/add-task",
  UPDATE_TASK: "/update-task",
  DELETE_TASK: (taskId) => `/delete-task/${taskId}`,
};


export const Custmoer = () => {
  
}