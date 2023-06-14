import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { addSupervisor, updateSupervisor} from "../apis/apiHandlers";

import "./users.css";

const CreateEditSupervisor = ({ refetchRecords, oldRecord = null }) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [phonenumber, setPhonenumber] = useState("");
    const [email, setEmail] = useState("");

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        console.log("oldRecord", oldRecord);
        setFirstname(oldRecord?.firstname);
        setLastname(oldRecord?.lastname);
        setEmail(oldRecord?.email);
        setPhonenumber(oldRecord?.phonenumber);
      }, []);

      const handleSubmit = async (event) => {
        setLoading(true);
        event.preventDefault();
        if (oldRecord !== null) {
          let supervisor = await updateSupervisor({
            id: oldRecord.id,
            firstname,
            lastname,
            email,
            phonenumber
          });
          setLoading(false);
      supervisor.data.id && toast.success("Supervisor updated successfully");
      resetForm();
      await refetchRecords();
    }else {
        let response = await addSupervisor({
            firstname,
            lastname,
            email,
            phonenumber
          });
          response.data.id && toast.success("Supervisor created successfully");
      setLoading(false);
      resetForm();
      await refetchRecords();
    }
  };

  const resetForm = () =>{
    setFirstname("");
    setLastname("");
    setEmail("");
    setPhonenumber("");
  };

  return (
    <div className="add-user">
        <div className="container h-200">
            <div className="row justify-content-md-center h-100">
                <div className="card-wrapper">
                    <div className="card fat">
                        <div className="card-body">

                            <form className="add-new-user" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input
                                        id="firstName"
                                        type="text"
                                        className="form-control"
                                        maxLength={50}
                                        value={firstname}
                                        onChange={(event) => setFirstname(event.target.value)}
                                        name="firstName"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input
                                        id="lastName"
                                        type="text"
                                        className="form-control"
                                        maxLength={50}
                                        value={lastname}
                                        onChange={(event) => setLastname(event.target.value)}
                                        name="lastName"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">E-mail</label>
                                    <input
                                        id="email"
                                        type="email"
                                        className="form-control"
                                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                        value={email}
                                        onChange={(event) => setEmail(event.target.value)}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Phone Number</label>
                                    <input
                                        id="phone"
                                        type="tel"
                                        className="form-control"
                                        pattern="[+0-9]+"
                                        maxLength={10}
                                        value={phonenumber}
                                        onChange={(event) => setPhonenumber(event.target.value)}
                                        name="phone"
                                        required
                                    />
                                </div>

                                
                                <button
                type="submit"
                className={`btn btn-${
                  oldRecord !== null ? "success" : "primary"
                }`}
                disabled={loading}
              >
                {oldRecord !== null ? " Edit" : "Create"}
              </button>
              </form>
            </div>
          
</div>
      </div>
      </div>
      </div>
    </div>
  );
              }

export default CreateEditSupervisor;