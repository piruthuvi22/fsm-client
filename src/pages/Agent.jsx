import React, { useState, memo, useEffect } from "react";
import AgentList from "../components/AgentList";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";
import swal from "sweetalert";

import { fetchAllAgents, deleteAgent } from "../apis/apiHandlers";

import CreateEditAgent from "../forms/CreateEditAgent";
import ModalComponent from "../components/Modal";

const Agent = () => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [agent, setAgent] = useState([]);
  const [selectRow, setSelectRow] = useState(null);
  const [editRecord, setEditRecords] = useState(null);

  const getAgents = async () => {
    try {
      const response = await fetchAllAgents();
      console.log("response = ", response);

      setAgent(response.data);
      setLoading(false);
    } catch (error) {
      console.log("error = ", error);
      toast.error("Network error");
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    getAgents();
  }, []);

  const handleClose = () => {
    setShow(false);
    setSelectRow(null);
    setEditRecords(null);
  };
  const handleShow = () => setShow(true);

  const showDetailsModal = (record) => {
    setSelectRow(record);
  };

  const handleDeleteAgent = async (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover the data!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
      deleteAgent(id);
        swal("Agent Deleted Successfully!", {
          icon: "success",
        });
      } 
    });
    await getAgents();
  };

  const handleEditAgent = async (agent) => {
  
    setEditRecords(agent);
    handleShow();
  };

  return (
    <div className="agents">
      <div>
        <p>NULL</p>
        <p>NULL</p>
        <p>NULL</p>
        </div>
      <div className="container-md">
        <div className="d-flex justify-content-between my-3">
          <button className="btn btn-success" onClick={handleShow}>
            Add New Agent
          </button>
          <form className="my-2 my-lg-0 d-flex">
            <input
              className="form-control"
              type="search"
              placeholder="Search Agent"
              aria-label="Search"
            ></input>
            <button
              className="btn btn-outline-success  ms-2"
              type="button"
              onClick={() => {
                toast.success("🦄 Wow so easy!", {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: false,
                  draggable: true,
                  theme: "light",
                });
              }}
            >
              Search
            </button>
          </form>
        </div>
        {loading ? (
          <div className="row justify-content-center align-items-center">
            <ClipLoader
              color="#b0b0b0"
              loading={loading}
              size={100}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        ) : error ? (
          <div className="d-flex justify-content-center align-items-center">
            <h5>Network error</h5>
          </div>
        ) : agent?.length > 0 ? (
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone Number</th>
                  <th scope="col" className="text-center" colSpan={2}>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <AgentList
                  handleDetailsModal={showDetailsModal}
                  onDeleteAgent={handleDeleteAgent}
                  onEditAgent={handleEditAgent}
                  data={agent}
                />
              </tbody>
            </table>
          </div>
        ) : (
          <div className="d-flex justify-content-center align-items-center">
            <h5>No records found</h5>
          </div>
        )}
      </div>

      {show ? (
        <ModalComponent
          handleCloseModal={handleClose}
          modalStatus={show}
          ComponentName={
            <CreateEditAgent refetchRecords={getAgents} oldRecord={editRecord} />
          }
          modalHeader={
            editRecord ? `Edit Agent #${editRecord.id}` : "Add New Agent"
          }
          size="lg"
        />
      ) : (
        <></>
      )}
    </div>
  );
};
export default memo(Agent);
