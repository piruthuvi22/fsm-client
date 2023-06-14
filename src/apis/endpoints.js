export const TASK_ENDPOINTS = {
  // QUERIES(GET)
  GET_TASKS: "/get-tasks",
  GET_TASK_BY_ID: (taskId) => `/get-task-by-id/${taskId}`,
  GET_TASK_BY_PHONENUMBER:(phonenumber)=>`/phonetask/${phonenumber}`,

  // MUTATIONS(POST/PUT/UPDATE)
  ADD_TASK: "/add-task",
  UPDATE_TASK: "/update-task",
  DELETE_TASK: (taskId) => `/delete-task/${taskId}`,

};

export const CUSTOMER_ENDPOINTS = {
  GET_CUSTOMERS: "/get-customers",
  GET_CUSTOMER_BY_ID: (customerId) => `/get-customer-by-id/${customerId}`,

  // MUTATIONS(POST/PUT/UPDATE)
  ADD_CUSTOMER: "/add-customer",
  UPDATE_CUSTOMER: "/update-customer",
  DELETE_CUSTOMER: (customerId) => `/delete-customer/${customerId}`,
};

export const SUPERVISOR_ENDPOINTS = {
  GET_SUPERVISORS: "/get-supervisors",
  GET_SUPERVISOR_BY_ID: (supervisorId) =>
    `/get-supervisor-by-id/${supervisorId}`,

  // MUTATIONS(POST/PUT/UPDATE)
  ADD_SUPERVISOR: "/add-supervisor",
  UPDATE_SUPERVISOR: "/update-supervisor",
  DELETE_SUPERVISOR: (supervisorId) => `/delete-supervisor/${supervisorId}`,
};
export const COMPLAINT_ENDPOINTS = {
  // QUERIES(GET)
  GET_COMPLAINTS: "/get-complaints",
  GET_COMPLAINT_BY_ID: (complaintId) => `/get-complaint-by-id/${complaintId}`,

  // MUTATIONS(POST/PUT/UPDATE)
  ADD_COMPLAINT: "/add-complaint",
  UPDATE_COMPLAINT: "/update-complaint",
  DELETE_COMPLAINT: (complaintId) => `/delete-complaint/${complaintId}`,
  UPDATE_HANDLED: (complaintId) =>  `/${complaintId}/update-handled`,
  ACTIVATE_AGENT: (complaintId) =>  `/${complaintId}/update-handled2`
};