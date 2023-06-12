export const TASK_ENDPOINTS = {
  // QUERIES(GET)
  GET_TASKS: "/get-tasks",
  GET_TASK_BY_ID: (taskId) => `/get-task-by-id/${taskId}`,

  // MUTATIONS(POST/PUT/UPDATE)
  ADD_TASK: "/add-task",
  UPDATE_TASK: "/update-task",
  DELETE_TASK: (taskId) => `/delete-task/${taskId}`,
};

export const RESOURCE_ENDPOINTS = {
    // QUERIES(GET)
  GET_RESOURCE: "/get-resource",
  GET_RESOURCE_BY_ID: (resourceID) => `/get-resource-by-id/${resourceID}`,
  GET_RESOURCE_BY_NAME: (resourceName) => `/get-resource-by-name/${resourceName}`,

   // MUTATIONS(POST/PUT/UPDATE)
  ADD_RESOURCE: "/add-resource",
  UPDATE_RESOURCE: "/update-resource",
  DELETE_RESOURCE: (resourceID) => `/delete-resource/${resourceID}`,
};

export const AGENT_ENDPOINTS = {
    // QUERIES(GET)
  GET_AGENT: "/get-agents",
  GET_AGENT_BY_ID: (agentID) => `/get-agent-by-id/${agentID}`,
  GET_AGENT_BY_FIRST_NAME: (agentFname) => `/get-agent-by-firstname/${agentFname}`,
  GET_AGENT_BY_LAST_NAME: (agentLname) => `/get-agent-by-lastname/${agentLname}`,
  GET_AGENT_BY_EMAIL: (agentEmail) => `/get-agent-by-email/${agentEmail}`,
  GET_AGENT_BY_PHONE_NUMBER: (agentPnumber) => `/get-agent-by-phonenumber/${agentPnumber}`,

   // MUTATIONS(POST/PUT/UPDATE)
   ADD_AGENT: "/add-agent",
   UPDATE_AGENT: "/update-agent",
   DELETE_AGENT: (agentID) => `/delete-agent/${agentID}`,
};