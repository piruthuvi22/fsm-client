import api from "../apis/api";
import { TASK_ENDPOINTS } from "../apis/endpoints";
import { RESOURCE_ENDPOINTS } from "../apis/endpoints";
import { AGENT_ENDPOINTS } from "../apis/endpoints";

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

export const fetchAllResources = async () => {
  let resources = await api.get(RESOURCE_ENDPOINTS.GET_RESOURCE);
  return resources;
};

export const fetchResourceById = async (id) => {
  let resource = await api.get(RESOURCE_ENDPOINTS.GET_RESOURCE_BY_ID(id));
  return resource;
};

export const fetchResourceByName = async (name) => {
  let resource = await api.get(RESOURCE_ENDPOINTS.GET_RESOURCE_BY_NAME(name));
  return resource;
};

export const addResource = async (newResource) => {
  let resource = await api.post(RESOURCE_ENDPOINTS.ADD_RESOURCE, newResource);
  return resource;
};

export const updateResource = async (newResource) => {
  let resource = await api.put(RESOURCE_ENDPOINTS.UPDATE_RESOURCE, newResource);
  return resource;
};

export const deleteResource = async (id) => {
  let resource = await api.delete(RESOURCE_ENDPOINTS.DELETE_RESOURCE(id));
  return resource;
};

export const fetchAllAgents = async () => {
  let agents = await api.get(AGENT_ENDPOINTS.GET_AGENT);
  return agents;
};

export const fetchAgentById = async (id) => {
  let agent = await api.get(AGENT_ENDPOINTS.GET_AGENT_BY_ID(id));
  return agent;
};

export const fetchAgentByFirstName = async (fname) => {
  let agent = await api.get(AGENT_ENDPOINTS.GET_AGENT_BY_FIRST_NAME(fname));
  return agent;
};

export const fetchAgentByLastName = async (lname) => {
  let agent = await api.get(AGENT_ENDPOINTS.GET_AGENT_BY_LAST_NAME(lname));
  return agent;
};

export const fetchAgentByEmail = async (email) => {
  let agent = await api.get(AGENT_ENDPOINTS.GET_AGENT_BY_EMAIL(email));
  return agent;
  ;
};

export const fetchAgentByPhoneNumber = async (pnumber) => {
  let agent = await api.get(AGENT_ENDPOINTS.GET_AGENT_BY_PHONE_NUMBER(pnumber));
  return agent;
};

export const addAgent = async (newAgent) => {
  let agent = await api.post(AGENT_ENDPOINTS.ADD_AGENT, newAgent);
  return agent;
};

export const updateAgent = async (newAgent) => {
  let agent = await api.put(AGENT_ENDPOINTS.UPDATE_AGENT, newAgent);
  return agent;
};

export const deleteAgent = async (id) => {
  let agent = await api.delete(AGENT_ENDPOINTS.DELETE_AGENT(id));
  return agent;
};