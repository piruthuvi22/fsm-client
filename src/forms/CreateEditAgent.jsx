import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { addAgent, updateAgent } from "../apis/apiHandlers";

import "./users.css";

const CreateEditAgent = ({ refetchRecords, oldRecord = null }) => {
  const [firstname, setFname] = useState("");
  const [lastname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("oldRecord", oldRecord);
    setFname(oldRecord?.firstname);
    setLname(oldRecord?.lastname);
    setEmail(oldRecord?.email);
    setPhoneNumber(oldRecord?.phonenumber);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const nameRegex = /^[a-zA-Z]+$/;

    if (!nameRegex.test(firstname)) {
      toast.error("First Name should only contain letters");
      return;
    }
  
    if (!nameRegex.test(lastname)) {
      toast.error("Last Name should only contain letters");
      return;
    }

    if (firstname.length > 25) {
      toast.error("First Name should not exceed 25 characters");
      return;
    }

    if (lastname.length > 25) {
      toast.error("Last Name should not exceed 25 characters");
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Invalid email format");
      return;
    }

    if (phonenumber.length !== 10 || !/^\d+$/.test(phonenumber)) {
      toast.error("Invalid phone number");
      return;
    }

    setLoading(true);
    if (oldRecord !== null) {
      let agent = await updateAgent({
        id: oldRecord.id,
        firstname,
        lastname,
        email,
        phonenumber,
      });
      setLoading(false);
      agent.data.id && toast.success("Agent updated successfully");
      resetForm();
      await refetchRecords();
    } else {
      let response = await addAgent({
        firstname,
        lastname,
        email,
        phonenumber,
      });

      response.data.id && toast.success("Agent created successfully");
      setLoading(false);
      resetForm();
      await refetchRecords();
    }
  };

  const resetForm = () => {
    setFname("");
    setLname("");
    setEmail("");
    setPhoneNumber("");
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  return (
    <div className="add-agent">
      <div className="card fat">
        <div className="card-body">
          {/* <h4 className="card-title"></h4> */}
          <form className="add-new-agent" onSubmit={handleSubmit}>
            <div className="form-group">

              <label htmlFor="firstname" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control mb-2"
                name="firstname"
                id="firstname"
                required
                disabled={loading}
                value={firstname}
                onChange={(event) => setFname(event.target.value)}
              />

            <label htmlFor="lastname" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control mb-2"
                name="flastname"
                id="lastname"
                required
                disabled={loading}
                value={lastname}
                onChange={(event) => setLname(event.target.value)}
              />

            <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="text"
                className="form-control mb-2"
                name="email"
                id="email"
                required
                disabled={loading}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />

            <label htmlFor="phonenumber" className="form-label">
                Phone Number
              </label>
              <input
                type="text"
                className="form-control mb-2"
                name="phonenumber"
                id="phonenumber"
                required
                disabled={loading}
                value={phonenumber}
                onChange={(event) => setPhoneNumber(event.target.value)}
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

export default CreateEditAgent;
