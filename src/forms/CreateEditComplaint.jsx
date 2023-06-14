import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  addComplaint,
  fetchTaskByPhone,
  updateComplaint,
} from "../apis/apiHandlers";

import "./users.css";

const CreateEditComplaint = ({ refetchRecords, oldRecord = null }) => {
  const [taskid, setTaskid] = useState("");
  const [description, setDescription] = useState("");
  const [agentid, setAgentid] = useState("");
  const [customerPhoneNumber, setCustomerPhoneNumber] = useState("");
  const [handled, setHandled] = useState(false);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("oldRecord", oldRecord);
    setTaskid(oldRecord?.taskid);
    setDescription(oldRecord?.description);
    setAgentid(oldRecord?.agentid);
    setCustomerPhoneNumber(oldRecord?.customerPhoneNumber);
  }, []);

  const handleSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();
    if (oldRecord !== null) {
      let complaint = await updateComplaint({
        id: oldRecord.id,
        taskid,
        description,
        agentid,
        customerPhoneNumber,
        handled,
      });
      setLoading(false);
      complaint.data.id && toast.success("Complaint updated successfully");
      resetForm();
      await refetchRecords();
    } else {
      let response = await addComplaint({
        taskid,
        description,
        agentid,
        customerPhoneNumber,
        handled,
      });
      response.data.id && toast.success("Complaint created successfully");
      setLoading(false);
      resetForm();
      await refetchRecords();
    }
  };

  const resetForm = () => {
    setTaskid("");
    setDescription("");
    setAgentid("");
    setCustomerPhoneNumber("");
  };

  const handleSearch = async () => {
    let phone = customerPhoneNumber;
    let task = await fetchTaskByPhone(customerPhoneNumber);
    console.log(task);
    setTaskid(task.data.id);
    setAgentid(task.data.agentId);
  };

  return (
    <div className="add-user">
      <div className="card fat">
        <div className="card-body">
          <form className="add-new-user" onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="row m-0">
                <div className="col col-12 col-md-4 ps-0">
                  <label htmlFor="taskid" className="form-label">
                    Task ID
                  </label>

                  <input
                    type="text"
                    className="form-control  mb-2"
                    name="taskid"
                    id="taskid"
                    required
                    disabled={loading}
                    value={taskid}
                    onChange={(event) => setTaskid(event.target.value)}
                  />
                </div>
              </div>

              <label htmlFor="title" className="form-label">
                Agentid
              </label>
              <input
                type="text"
                className="form-control mb-2"
                name="agentid"
                id="agentid"
                required
                disabled={loading}
                value={agentid}
                onChange={(event) => setAgentid(event.target.value)}
              />

              {/* <label htmlFor="customerPhoneNumber" className="form-label">
                customer PhoneNumber
              </label>
              <input
                type="text"
                className="form-control mb-2"
                name="customerPhoneNumber"
                id="agentid"
                required
                disabled={loading}
                value={customerPhoneNumber}
                onChange={(event) => setCustomerPhoneNumber(event.target.value)}
              /> */}
              <div className="row align-items-center">
                <div className="col-md-8">
                  <label htmlFor="customerPhoneNumber" className="form-label">
                    Customer Phone Number
                  </label>
                  <input
                    type="text"
                    className="form-control mb-2"
                    name="customerPhoneNumber"
                    id="agentid"
                    required
                    disabled={loading}
                    value={customerPhoneNumber}
                    onChange={(event) =>
                      setCustomerPhoneNumber(event.target.value)
                    }
                  />
                </div>
                <div className="col-md-4">
                  <button className="btn btn-primary" onClick={handleSearch}>
                    Search
                  </button>
                </div>
              </div>

              <label htmlFor="description" className="form-label">
                Complaint description
              </label>
              <textarea
                className="form-control  mb-2"
                name="description"
                id="description"
                rows="5"
                required
                disabled={loading}
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              ></textarea>

              <button
                type="submit"
                className={`btn btn-${
                  oldRecord !== null ? "success" : "primary"
                }`}
                disabled={loading}
              >
                {oldRecord !== null ? " Edit" : "Create"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateEditComplaint;
