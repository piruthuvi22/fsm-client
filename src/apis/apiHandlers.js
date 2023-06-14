import api from "../apis/api";
import { TASK_ENDPOINTS } from "../apis/endpoints";
import { CUSTOMER_ENDPOINTS } from "../apis/endpoints";
import { SUPERVISOR_ENDPOINTS } from "../apis/endpoints";
import { COMPLAINT_ENDPOINTS } from "../apis/endpoints";

// Task APIs
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


export const fetchTaskByPhone = async (phonenumber) => {
  let task = await api.get(TASK_ENDPOINTS.GET_TASK_BY_PHONENUMBER(phonenumber));
  return task;
}


export const fetchAllCustomers = async () => {
  let customers = await api.get(CUSTOMER_ENDPOINTS.GET_CUSTOMERS);
  return customers;
};


export const fetchCustomerById = async (id) => {
  let customer = await api.get(CUSTOMER_ENDPOINTS.GET_CUSTOMER_BY_ID(id));
  return customer;
};

export const addCustomer = async (newCustomer) => {
  let customer = await api.post(CUSTOMER_ENDPOINTS.ADD_CUSTOMER, newCustomer);
  return customer;
};

export const updateCustomer = async (newCustomer) => {
  let customer = await api.put(CUSTOMER_ENDPOINTS.UPDATE_CUSTOMER, newCustomer);
  return customer;
};

export const deleteCustomer = async (id) => {
  let customer = await api.delete(CUSTOMER_ENDPOINTS.DELETE_CUSTOMER(id));
  return customer;
};



export const fetchAllSupervisors = async () => {
  let supervisors = await api.get(SUPERVISOR_ENDPOINTS.GET_SUPERVISORS);
  return supervisors;
};


export const fetchSupervisorById = async (id) => {
  let supervisor = await api.get(SUPERVISOR_ENDPOINTS.GET_SUPERVISOR_BY_ID(id));
  return supervisor;
};

export const addSupervisor = async (newSupervisor) => {
  let supervisor = await api.post(SUPERVISOR_ENDPOINTS.ADD_SUPERVISOR, newSupervisor);
  return supervisor;
};

export const updateSupervisor = async (newSupervisor) => {
  let supervisor = await api.put(SUPERVISOR_ENDPOINTS.UPDATE_SUPERVISOR, newSupervisor);
  return supervisor;
};

export const deleteSupervisor = async (id) => {
  let supervisor = await api.delete(SUPERVISOR_ENDPOINTS.DELETE_SUPERVISOR(id));
  return supervisor;
};


export const fetchAllComplaints = async () => {
  let complaints = await api.get(COMPLAINT_ENDPOINTS.GET_COMPLAINTS);
  return complaints;
};

export const fetchComplaintById = async (id) => {
  let complaint = await api.get(COMPLAINT_ENDPOINTS.GET_COMPLAINT_BY_ID(id));
  return complaint;
};

export const addComplaint = async (newComplaint) => {
  let complaint = await api.post(COMPLAINT_ENDPOINTS.ADD_COMPLAINT, newComplaint);
  return complaint;
};

export const updateComplaint = async (newComplaint) => {
  let complaint = await api.put(COMPLAINT_ENDPOINTS.UPDATE_COMPLAINT, newComplaint);
  return complaint;
};

export const deleteComplaint = async (id) => {
  let complaint = await api.delete(COMPLAINT_ENDPOINTS.DELETE_COMPLAINT(id));
  return complaint;
};

export const updateHandled = async (id) => {
  let complaint = await api.put(COMPLAINT_ENDPOINTS.UPDATE_HANDLED(id)); 
  return complaint;
};

export const activateAgent = async (id) => {
  let complaint =await api.put(COMPLAINT_ENDPOINTS.ACTIVATE_AGENT(id));
  return complaint;
}

