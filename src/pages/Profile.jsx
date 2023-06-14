import React, { useState, useEffect } from "react";
import * as Md from "react-icons/md";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";

import { fetchSupervisorById, updateSupervisor } from "../apis/apiHandlers";

const Profile = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [supervisor, setSupervisor] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    setIsEdit(false);
    let supervisor = await updateSupervisor({
      id: 52,
      firstname,
      lastname,
      email,
      phonenumber,
    });
    setLoading(false);
    toast.success("Profile updated successfully");
    await getSupervisor(52);
  };
  const handleEdit = () => {
    setIsEdit(true);
  };

  const getSupervisor = async () => {
    try {
      const response = await fetchSupervisorById(52);
      console.log("response = ", response);

      setSupervisor(response.data);
      console.log(response.data);
      setFirstname(response.data.firstname);
      setLastname(response.data.lastname);
      setEmail(response.data.email);
      setPhonenumber(response.data.phonenumber);
      setLoading(false);
    } catch (error) {
      console.log("error = ", error);
      toast.error("Network error");
      setLoading(false);
      setError(true);
    }
  };
  useEffect(() => {
    getSupervisor(52);
  }, []);
  return (
    <div className="profile-wrapper">
      <div className="container-md my-3">
        <div className="row m-0 align-items-start">
          <div className="tab-conten col-12 col-sm-9 my-2" id="v-tabContent">
            <h2 className="text-muted">Profile</h2>
            <div className="mt-3">
              <form className="row g-3">
                <div className="col-12 text-center">
                  <img
                    src="https://www.shareicon.net/data/512x512/2016/09/15/829466_man_512x512.png"
                    className="img-fluid profile-pic"
                    alt="..."
                    style={{ width: "100px" }}
                  />
                  <h3 className="text-secondary">
                    {supervisor.firstname + "  " + supervisor.lastname}
                  </h3>
                </div>
                <div className="col-md-6">
                  <label for="fname" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="fname"
                    value={firstname}
                    // placeholder="firstname"
                    disabled={isEdit ? false : true}
                    onChange={(event) => setFirstname(event.target.value)}
                  />
                </div>
                <div className="col-md-6">
                  <label for="lname" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lname"
                    value={lastname}
                    // placeholder="lastname"
                    disabled={isEdit ? false : true}
                    onChange={(event) => setLastname(event.target.value)}
                  />
                </div>
                <div className="col-12">
                  <label for="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    // placeholder="email"
                    id="email"
                    value={email}
                    disabled={isEdit ? false : true}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>

                <div className="col-md-4">
                  <label for="tpNo" className="form-label">
                    Contact Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="tpNo"
                    value={phonenumber}
                    disabled={isEdit ? false : true}
                    onChange={(event) => setPhonenumber(event.target.value)}
                  />
                </div>

                <div className="d-flex justify-content-end mt-3">
                  <button
                    type="button"
                    className={`btn ${isEdit ? "btn-danger" : "btn-primary"}`}
                    onClick={isEdit ? handleSubmit : handleEdit}
                  >
                    {isEdit ? "Update" : "Edit"}
                    {isEdit ? (
                      <Md.MdTaskAlt className="icon ms-1" />
                    ) : (
                      <Md.MdEditNote className="icon ms-1" />
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
