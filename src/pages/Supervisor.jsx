import React, { useState, memo, useEffect } from "react";
import SupervisorList from "../components/SupervisorList";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";
import swal from "sweetalert";


import { fetchAllSupervisors, deleteSupervisor } from "../apis/apiHandlers";

import CreateEditSupervisor from "../forms/CreateEditSupervisor";
import ModalComponent from "../components/Modal";

const Supervisor = () => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [supervisors, setSupervisors] = useState([]);
  const [selectRow, setSelectRow] = useState(null);
  const [editRecord, setEditRecords] = useState(null);

  const getSupervisors = async () => {
    try {
      const response = await fetchAllSupervisors();
      console.log("response = ", response);

      setSupervisors(response.data);
      setLoading(false);
    } catch (error) {
      console.log("error = ", error);
      toast.error("Network error");
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    getSupervisors();
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

  const handleDeleteSupervisor = async (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover the data!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        await deleteSupervisor(id);
        await getSupervisors();

        swal("Supervisor Deleted Successfully!", {
          icon: "success",
        });
      }
    });
  };

  const handleEditSupervisor = async (supervisor) => {
    setEditRecords(supervisor);
    handleShow();
  };

  return (
    <div className="tasks">
      <div className="container-md">
        <div className="d-flex justify-content-between my-3">
          <button className="btn btn-success" onClick={handleShow}>
            Add New Supervisor
          </button>
          <form className="my-2 my-lg-0 d-flex">
            <input
              className="form-control"
              type="search"
              placeholder="Search Supervisor"
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
        ) : supervisors?.length > 0 ? (
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  
                  <th scope="col">Firstname</th>
                  <th scope="col">Lastname</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone No</th>
                  <th scope="col" className="text-center" colSpan={2}>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <SupervisorList
                  onDeleteSupervisor={handleDeleteSupervisor}
                  onEditSupervisor={handleEditSupervisor}
                  data={supervisors}
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
            <CreateEditSupervisor
              refetchRecords={getSupervisors}
              oldRecord={editRecord}
            />
          }
          modalHeader={
            editRecord ? `Edit Supervisor #${editRecord.id}` : "Add New Supervisor"
          }
          size="lg"
        />
      ) : (
        <></>
      )}
      {selectRow !== null ? (
        <ModalComponent
          handleCloseModal={handleClose}
          modalStatus={selectRow !== null}
          
          size="lg"
        />
      ) : (
        <></>
      )}
    </div>
  );
};
export default memo(Supervisor);
