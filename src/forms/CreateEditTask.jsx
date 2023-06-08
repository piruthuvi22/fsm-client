import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { addTask, updateTask } from "../apis/apiHandlers";

import "./users.css";

const CreateEditTask = ({ refetchRecords, oldRecord = null }) => {
  const [title, setTitle] = useState("");
  const [customerid, setCustomerId] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("oldRecord", oldRecord);
    setTitle(oldRecord?.title);
    setDescription(oldRecord?.description);
    setAddress(oldRecord?.address);
    setPhoneNumber(oldRecord?.phoneNumber);
  }, []);

  const handleSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();
    if (oldRecord !== null) {
      let task = await updateTask({
        id: oldRecord.id,
        customer_id: customerid,
        title,
        description,
        address,
        phoneNumber,
      });
      setLoading(false);
      task.data.id && toast.success("Task updated successfully");
      resetForm();
      await refetchRecords();
    } else {
      let response = await addTask({
        customer_id: customerid,
        title,
        description,
        address,
        phoneNumber,
      });

      response.data.id && toast.success("Task created successfully");
      setLoading(false);
      resetForm();
      await refetchRecords();
    }
  };

  const resetForm = () => {
    setAddress("");
    setCustomerId("");
    setDescription("");
    setPhoneNumber("");
    setTitle("");
  };

  return (
    <div className="add-user">
      <div className="card fat">
        <div className="card-body">
          {/* <h4 className="card-title"></h4> */}
          <form className="add-new-user" onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="row m-0">
                <div className="col col-12 col-md-4 ps-0">
                  <label htmlFor="customerid" className="form-label">
                    Customer ID
                  </label>

                  {/* Fetch all customer data and map into the select box */}

                  <input
                    type="text"
                    className="form-control  mb-2"
                    name="customerid"
                    id="customerid"
                    required
                    disabled={loading}
                    value={customerid}
                    onChange={(event) => setCustomerId(event.target.value)}
                  />
                </div>

                <div className="col col-12 col-md-4 ps-0">
                  <label htmlFor="phoneNumber" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="form-control  mb-2"
                    name="phoneNumber"
                    id="phoneNumber"
                    required
                    disabled={loading}
                    value={phoneNumber}
                    onChange={(event) => setPhoneNumber(event.target.value)}
                  />
                </div>
              </div>

              <label htmlFor="title" className="form-label">
                Task title
              </label>
              <input
                type="text"
                className="form-control mb-2"
                name="title"
                id="title"
                required
                disabled={loading}
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />

              <label htmlFor="description" className="form-label">
                Task description
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

              <label htmlFor="address" className="form-label">
                Address
              </label>
              <textarea
                type="text"
                className="form-control  mb-2"
                name="address"
                id="address"
                required
                disabled={loading}
                value={address}
                onChange={(event) => setAddress(event.target.value)}
              />

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

export default CreateEditTask;
