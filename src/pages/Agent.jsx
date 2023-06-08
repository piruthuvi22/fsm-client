import React, { useState } from "react";
import * as Bi from "react-icons/bi";
import * as Ai from "react-icons/ai";
import * as Fa from "react-icons/fa";

import users from "../data/Users.json";
import ModalC from "../components/Modal";
import Addnewagent from "../forms/Addnewagent";

const Agent = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="agent">
      <div className="container-md">
        <div
          className="search my-3"
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <button className="btn btn-success" onClick={handleShow}>
            Add New Agent
          </button>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search Agent"
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
                <th scope="col">Status</th>
                {/* <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input> */}
              </tr>
            </thead>
            <tbody>
              {users.map((item) => {
                return (
                  <>
                    <tr className="align-middle">
                      <th scope="row">{item.id}</th>

                      <td>{item.firstname}</td>
                      <td>{item.lastname}</td>

                      <td>{item.email}</td>
                      <td>{item.phone}</td>
                      <td>{item.status}</td>

                      <td>
                        <Bi.BiEditAlt
                          data-toggle="tooltip"
                          data-placement="top"
                          title="edit agent details"
                          role="button"
                          fontSize="1.5em"
                          color="#A020F0"
                        />
                      </td>
                      <td>
                        <Ai.AiOutlineDelete
                          data-toggle="tooltip"
                          data-placement="top"
                          title="delete agent details"
                          role="button"
                          fontSize="1.5em"
                          color="#FF0000"
                        />
                      </td>
                      <td>
                        <Fa.FaUserAltSlash
                          data-toggle="tooltip"
                          data-placement="top"
                          title="suspend agent"
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
          ComponentName={<Addnewagent />}
        />
      </div>
    </div>
  );
};
export default Agent;
