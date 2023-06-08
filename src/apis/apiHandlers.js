import api from "../apis/api";
import { TASK_ENDPOINTS } from "../apis/endpoints";

export const fetchAllTasks = async () => {
  let tasks = await api.get(TASK_ENDPOINTS.GET_TASKS);
  return tasks;
};

export const fetchTaskById = async (id) => {
  let task = await api.get(TASK_ENDPOINTS.GET_TASK_BY_ID(id));
  return task;
};

export const addTask = async (newTask) => {
  let task = await api.post(TASK_ENDPOINTS.ADD_TASK, newTask);
  return task;
};

export const updateTask = async (newTask) => {
  let task = await api.put(TASK_ENDPOINTS.UPDATE_TASK, newTask);
  return task;
};

export const deleteTask = async (id) => {
  let task = await api.delete(TASK_ENDPOINTS.DELETE_TASK(id));
  return task;
};
