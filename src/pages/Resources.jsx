import React, { useState, memo, useEffect } from "react";
import ResourceList from "../components/ResourceList";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";
import swal from "sweetalert";

import { fetchAllResources, deleteResource} from "../apis/apiHandlers";

import CreateEditResource from "../forms/CreateEditResource";
import ModalComponent from "../components/Modal";


const Resources = () => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [resources, setResources] = useState([]);
  const [selectRow, setSelectRow] = useState(null);
  const [editRecord, setEditRecords] = useState(null);

  const getResources = async () => {
    try {
      const response = await fetchAllResources();
      console.log("response = ", response);

      setResources(response.data);
      setLoading(false);
    } catch (error) {
      console.log("error = ", error);
      toast.error("Network error");
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    getResources();
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

  const handleDeleteResource = async (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover the data!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
      deleteResource(id);
        swal("Resource Deleted Successfully!", {
          icon: "success",
        });
      } 
    });
    await getResources();
  };

  const handleEditResource = async (resource) => {
    setEditRecords(resource);
    handleShow();
  };

  return (
    <div className="resources">
      <div>
        <p>NULL</p>
        <p>NULL</p>
        <p>NULL</p>
        </div>
      <div className="container-md">
        <div className="d-flex justify-content-between my-3">
          <button className="btn btn-success" onClick={handleShow}>
            Add New Resource
          </button>
          <form className="my-2 my-lg-0 d-flex">
            <input
              className="form-control"
              type="search"
              placeholder="Search Resource"
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
        ) : resources?.length > 0 ? (
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Resource Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Quantity</th>
                  <th scope="col" className="text-center" colSpan={2}>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <ResourceList
                  handleDetailsModal={showDetailsModal}
                  onDeleteResource={handleDeleteResource}
                  onEditResource={handleEditResource}
                  data={resources}
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
            <CreateEditResource refetchRecords={getResources} oldRecord={editRecord} />
          }
          modalHeader={
            editRecord ? `Edit Resource #${editRecord.id}` : "Add New Resource"
          }
          size="lg"
        />
      ) : (
        <></>
      )}
    </div>
  );
};
export default memo(Resources);
