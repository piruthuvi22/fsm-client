import React, { useState } from "react";
import * as Md from "react-icons/md";

const Profile = () => {
  const [isEdit, setIsEdit] = useState(false);

  const handleSubmit = () => {
    setIsEdit(false);
  };
  const handleEdit = () => {
    setIsEdit(true);
  };
  return (
    <div className="profile-wrapper">
      <div className="container-md my-3">
        <div className="row m-0 align-items-start">
          <div
            className="nav col-12 col-sm-3 flex-column nav-pills"
            id="v-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <button
              className="nav-link active bg-light my-2"
              id="v-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-home"
              type="button"
              role="tab"
              aria-controls="v-home"
              aria-selected="true"
            >
              Company Setting
            </button>
            <button
              className="nav-link  bg-light my-2"
              id="v-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-profile"
              type="button"
              role="tab"
              aria-controls="v-profile"
              aria-selected="false"
            >
              Profile
            </button>

            <button
              className="nav-link  bg-light my-2"
              id="v-messages-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-messages"
              type="button"
              role="tab"
              aria-controls="v-messages"
              aria-selected="false"
            >
              About
            </button>
          </div>
          <div className="tab-content col-12 col-sm-9 my-2" id="v-tabContent">
            <div
              className="tab-pane fade show active"
              id="v-home"
              role="tabpanel"
              aria-labelledby="v-home-tab"
              tabIndex="0"
            >
              <h2 className="text-muted">Company details</h2>

              <ul className="list-group list-group-flush mt-3">
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <span className="fs-5 fw-bold "> Company name</span>
                  <span className="text-secondary value">3AxisLabs</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <span className="fs-5  fw-bold "> Phone number</span>
                  <span className="text-secondary value">021-222-6789</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <span className="fs-5 fw-bold"> Email</span>

                  <span className="text-secondary value">
                    hello@threeaxislabs.com
                  </span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <span className="fs-5 fw-bold"> Postalcode</span>

                  <span className="text-secondary value">40000</span>
                </li>
              </ul>

              <div className="d-flex justify-content-end mt-3">
                <button className="btn btn-danger">
                  Chage ownership
                  <Md.MdSupervisorAccount className="icon ms-1" />
                </button>
              </div>
            </div>

            <div
              className="tab-pane fade"
              id="v-profile"
              role="tabpanel"
              aria-labelledby="v-profile-tab"
              tabIndex="0"
            >
              <h2 className="text-muted">Profile</h2>
              <div className="mt-3">
                <form className="row g-3">
                  <div className="col-12 text-center">
                    <img
                      src="https://www.shareicon.net/data/512x512/2016/09/15/829466_man_512x512.png"
                      className="img-fluid profile-pic"
                      alt="..."
                    />
                    <h3 className="text-secondary">Piruthuvi Raj</h3>
                  </div>
                  <div className="col-md-6">
                    <label for="fname" className="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="fname"
                      placeholder="Piruthuvi"
                      disabled={isEdit ? false : true}
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
                      placeholder="Raj"
                      disabled={isEdit ? false : true}
                    />
                  </div>
                  <div className="col-12">
                    <label for="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="abcd@gmail.com"
                      id="email"
                      disabled={isEdit ? false : true}
                    />
                  </div>
                  <div className="col-12">
                    <label for="address" className="form-label">
                      Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      placeholder="Apartment, studio, or floor"
                      disabled={isEdit ? false : true}
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
                      disabled={isEdit ? false : true}
                    />
                  </div>
                  <div className="col-md-4">
                    <label for="city" className="form-label">
                      City
                    </label>
                    <select
                      id="city"
                      className="form-select"
                      disabled={isEdit ? false : true}
                    >
                      <option selected>Choose...</option>
                      <option>Jaffna</option>
                      <option>Kilinochi</option>
                      <option>Mullaitheevu</option>
                      <option>Vavuniya</option>
                      <option>Anuradapura</option>
                      <option>Polanaruwa</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label for="state" className="form-label">
                      State
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="state"
                      disabled={isEdit ? false : true}
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
    </div>
  );
};

export default Profile;
