import React, { useState, memo, useEffect } from "react";
import ComplaintList from "../components/ComplaintList";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";
import swal from "sweetalert";


import { fetchAllComplaints, deleteComplaint, updateHandled, activateAgent } from "../apis/apiHandlers";

import CreateEditComplaint from "../forms/CreateEditComplaint";
import ModalComponent from "../components/Modal";
import ComplaintDetails from "../components/ComplaintDetails";

const Complaint = () => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [complaints, setComplaints] = useState([]);
  const [selectRow, setSelectRow] = useState(null);
  const [editRecord, setEditRecords] = useState(null);

  const getComplaints = async () => {
    try {
      const response = await fetchAllComplaints();
      console.log("response = ", response);

      setComplaints(response.data);
      setLoading(false);
    } catch (error) {
      console.log("error = ", error);
      toast.error("Network error");
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    getComplaints();
  }, []);

  const handleClose = () => {
    setShow(false);
    setSelectRow(null);
    setEditRecords(null);
  };
  const handleShow = () => setShow(true);

 

  const handleDeleteComplaint = async (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover the data!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        await deleteComplaint(id);
        await getComplaints();

        swal("Complaint Deleted Successfully!", {
          icon: "success",
        });
      }
    });
  };

  const handleEditComplaint = async (complaint) => {
    setEditRecords(complaint);
    handleShow();
  };

  const handleComplaint = async (complaint) => {
    setSelectRow(complaint);
    // handleShow();
  };
  
  const handleSuspend = async (complaint) => {
     await updateHandled(complaint.id);
     await getComplaints();
    console.log("suspended "+ complaint.handled );
  };
   
  const handleActive = async (complaint) => {
    await activateAgent(complaint.id);
    await getComplaints();
   console.log("activated "+ complaint.handled );
 };


 
  return (
    <div className="tasks">
      <div className="container-md">
        <div className="d-flex justify-content-between my-3">
          <button className="btn btn-success" onClick={handleShow}>
            Add New Complaint
          </button>
          <form className="my-2 my-lg-0 d-flex">
            <input
              className="form-control"
              type="search"
              placeholder="Search Complaint"
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
        ) : complaints?.length > 0 ? (
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  
                  <th scope="col">Taskid</th>
                  <th scope="col">Description</th>
                  <th scope="col">Agent Id</th>
                  <th scope="col">Customer PhoneNumber</th>
                  <th scope="col" className="text-center" colSpan={2}>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <ComplaintList
                  onDeleteComplaint={handleDeleteComplaint}
                  onEditComplaint={handleEditComplaint}
                  data={complaints}
                  onHandleComplaint={handleComplaint}
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
            <CreateEditComplaint
              refetchRecords={getComplaints}
              oldRecord={editRecord}
            />
          }
          modalHeader={
            editRecord ? `Edit Complaint ${editRecord.id}` : "Add New Complaint"
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
          ComponentName={<ComplaintDetails value={selectRow}  handleSuspend={handleSuspend} handleActive={handleActive} />}
          size="lg"
        />
      ) : (
        <></>
      )}
    </div>
  );
};
export default memo(Complaint);
