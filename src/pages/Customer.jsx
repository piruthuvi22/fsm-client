import React, { useState, memo, useEffect } from "react";
import CustomerList from "../components/CustomerList";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";
import swal from "sweetalert";

import { fetchAllCustomers, deleteCustomer } from "../apis/apiHandlers";

import CreateEditCustomer from "../forms/CreateEditCustomer";
import ModalComponent from "../components/Modal";

const Customer = () => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [customers, setCustomers] = useState([]);
  const [filteredCustomers, setfilteredCustomers] = useState([]);
  const [selectRow, setSelectRow] = useState(null);
  const [editRecord, setEditRecords] = useState(null);

  const getCustomers = async () => {
    try {
      const response = await fetchAllCustomers();
      console.log("response = ", response);
      setCustomers(response.data);
      setfilteredCustomers(response.data);
      setLoading(false);
    } catch (error) {
      console.log("error = ", error);
      toast.error("Network error");
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    getCustomers();
  }, []);

  const handleClose = () => {
    setShow(false);
    setSelectRow(null);
    setEditRecords(null);
  };
  const handleShow = () => setShow(true);

  const handleDeleteCustomer = async (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover the data!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        await deleteCustomer(id);
        await getCustomers();

        swal("Customer Deleted Successfully!", {
          icon: "success",
        });
      }
    });
  };

  const handleEditCustomer = async (customer) => {
    setEditRecords(customer);
    handleShow();
  };

  const filter = (e) => {
    // console.log(e.target.value);
    if (e.target.value === "") {
      setfilteredCustomers(customers);
    } else {
      let filtered = customers.filter((item) => {
        console.log(item.phonenumber);
        return item.phonenumber.includes(e.target.value);
      });
      setfilteredCustomers(filtered);
    }
  };
  return (
    <div className="tasks">
      <div className="container-md">
        <div className="d-flex justify-content-between my-3">
          <button className="btn btn-success" onClick={handleShow}>
            Add New Customer
          </button>
          <form className="my-2 my-lg-0 d-flex">
            <input
              className="form-control"
              type="search"
              placeholder="Search Customer"
              aria-label="Search"
              onChange={filter}
            ></input>
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
        ) : filteredCustomers?.length > 0 ? (
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Firstname</th>
                  <th scope="col">Lastname</th>
                  <th scope="col">Email</th>
                  <th scope="col">Address</th>
                  <th scope="col">Phone No</th>
                  <th scope="col" className="text-center" colSpan={2}>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <CustomerList
                  onDeleteCustomer={handleDeleteCustomer}
                  onEditCustomer={handleEditCustomer}
                  data={filteredCustomers}
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
            <CreateEditCustomer
              refetchRecords={getCustomers}
              oldRecord={editRecord}
            />
          }
          modalHeader={
            editRecord ? `Edit Customer #${editRecord.id}` : "Add New Customer"
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
export default memo(Customer);
