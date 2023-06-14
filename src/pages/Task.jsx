import React, { useState, memo, useEffect } from "react";
import TaskList from "../components/TaskList";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";

import { fetchAllTasks, deleteTask } from "../apis/apiHandlers";

import CreateEditTask from "../forms/CreateEditTask";
import ModalComponent from "../components/Modal";
import TaskDetails from "../components/TaskDetails";
import swal from "sweetalert";

const Task = () => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [selectRow, setSelectRow] = useState(null);
  const [editRecord, setEditRecords] = useState(null);

  const getTasks = async () => {
    try {
      const response = await fetchAllTasks();
      console.log("response = ", response);

      setTasks(response.data);
      setFilteredTasks(response.data);
      setLoading(false);
    } catch (error) {
      console.log("error = ", error);
      toast.error("Network error");
      setLoading(false);
      setError(true);
    }
  };

  const filter = (e) => {
    if (e.target.value === "") {
      setFilteredTasks(tasks);
    } else {
      let filtered = tasks.filter(
        (item) =>
          item.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
          item.description.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setFilteredTasks(filtered);
    }
  };

  useEffect(() => {
    getTasks();
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


  const handleEditTask = async (task) => {
    setEditRecords(task);
    handleShow();
  };

  const handleDeleteTask = async (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover the data!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        await deleteTask(id);
        await getTasks();

        swal("Customer Deleted Successfully!", {
          icon: "success",
        });
      }
    });
  };
console.log(filteredTasks);
  return (
    <div className="tasks">
      <div className="container-md">
        <div className="d-flex justify-content-between my-3">
          <button className="btn btn-success" onClick={handleShow}>
            Add New Task
          </button>
          <form className="my-2 my-lg-0 d-flex">
            <input
              className="form-control"
              type="search"
              placeholder="Search Task"
              aria-label="Search"
              onChange={filter}
            ></input>
            {/* <button className="btn btn-outline-success  ms-2">Search</button> */}
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
        ) : filteredTasks?.length > 0 ? (
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Customer Phone No</th>
                  <th scope="col">Task title</th>
                  <th scope="col">Description</th>
                  <th scope="col">Address</th>
                  <th scope="col">Status</th>
                  <th scope="col" className="text-center" colSpan={2}>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <TaskList
                  handleDetailsModal={showDetailsModal}
                  onDeleteTask={handleDeleteTask}
                  onEditTask={handleEditTask}
                  data={filteredTasks}
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
            <CreateEditTask refetchRecords={getTasks} oldRecord={editRecord} />
          }
          modalHeader={
            editRecord ? `Edit Task #${editRecord.id}` : "Add New Task"
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
          ComponentName={<TaskDetails value={selectRow} />}
          size="lg"
        />
      ) : (
        <></>
      )}
    </div>
  );
};
export default memo(Task);
