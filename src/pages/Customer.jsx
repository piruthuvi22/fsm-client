import React, { useState } from "react";
import ModalC from "../components/Modal";

import Addnewcustomer from "../forms/Addcustomer";
import CustomerList from "../data/CustomerList";

const Customer = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
      <div className="customers">
        <div className="container-md">
          <div
              className="search my-3"
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
          >
            <button className="btn btn-success" onClick={handleShow}>
              Add New Customer
            </button>
            <form class="form-inline my-2 my-lg-0">
              <input
                  class="form-control mr-sm-2"
                  type="search"
                  placeholder="Search Customer"
                  aria-label="Search"
              ></input>
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>

          <div className="table-responsive">
            <table className="table">
              <thead>
              <tr>
                <th scope="col"></th>

                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">E-mail</th>

                <th scope="col">Phone No</th>
                <th scope="col">Address</th>
              </tr>
              </thead>
              <tbody>
              <CustomerList />
              </tbody>
            </table>
          </div>
          <ModalC
              handleCloseModal={handleClose}
              modalStatus={show}
              ComponentName={<Addnewcustomer />}
          />
        </div>
      </div>
  );
};
export default Customer;
