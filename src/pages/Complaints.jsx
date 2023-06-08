import React, { useState } from "react";
import * as BiEditAlt from "react-icons/bi";
import * as AiOutlineDelete from "react-icons/ai";
import users from "../data/Users.json";
import ModalC from "../components/Modal";
import Addnewcomplaint from "../forms/Addnewcomplaint";

const Complaints = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="complaints">
      <div className="container-md">
        <div
          className="search my-3"
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <button className="btn btn-success" onClick={handleShow}>
            Add New Complaint
          </button>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search Complaint"
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

                <th scope="col">Task title</th>
                <th scope="col">Agent Name</th>

                <th scope="col">Phone Number</th>
              </tr>
            </thead>
            <tbody>
              {users.map((item) => {
                return (
                  <>
                    <tr className="align-middle">
                      <th scope="row">{item.id}</th>

                      <td>{item.tasktitle}</td>
                      <td>{item.desription}</td>

                      <td>{item.phonenumber}</td>

                      <td>
                        <BiEditAlt.BiEditAlt
                          data-toggle="tooltip"
                          data-placement="top"
                          title="edit task"
                          role="button"
                          fontSize="1.5em"
                          color="#A020F0"
                        />
                      </td>
                      <td>
                        <AiOutlineDelete.AiOutlineDelete
                          data-toggle="tooltip"
                          data-placement="top"
                          title="delete task"
                          role="button"
                          fontSize="1.5em"
                          color="#FF0000"
                        />
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
        <ModalC
          handleCloseModal={handleClose}
          modalStatus={show}
          ComponentName={<Addnewcomplaint />}
        />
      </div>
    </div>
  );
};
export default Complaints;
