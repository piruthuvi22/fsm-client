import react, { useState } from "react";
import "./users.css";
import { Button } from "react-bootstrap";
import {useMutation} from "@apollo/client";
// import {CREATE_SUPERVISOR_MUTATION} from "../data/apolloclient";

const Addnewsupervisor = () => {
  // const [createSupervisor, { data }] = useMutation(CREATE_SUPERVISOR_MUTATION);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");


  function handleSubmit(event) {
    event.preventDefault();
    // createSupervisor({
    //   variables: { firstName, lastName, phone, email },
    // });
  }

  return (
    <div className="add-user">
      <div className="container-md">
        <div className="row justify-content-md-center h-100 my-3">
          <div className="card-wrapper">
            <div className="card fat">
              <div className="card-body">
                <h4 className="card-title">Add New Supervisor</h4>

                <form className="add-new-user" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>First Name</label>
                    <input
                      id="firstname"
                      type="text"
                      className="form-control"
                      minLength={5}
                      value={firstName}
                      onChange={(event) => setFirstName(event.target.value)}
                      name="firstName"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="text">Last Name</label>
                    <input
                      id="lastname"
                      type="text"
                      className="form-control"
                      minLength={5}
                      value={lastName}
                      onChange={(event) => setLastName(event.target.value)}
                      name="lastName"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">E-mail</label>
                    <input
                      id="email"
                      type="text"
                      className="form-control"
                      minLength={5}
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      required
                    />

                    <div className="invalid-feedback">User Email is incorrect</div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="number">Phone Number</label>
                    <input
                      id="phone"
                      type="text"
                      className="form-control"
                      minLength={5}
                      value={phone}
                      onChange={(event) => setPhone(event.target.value)}
                      name="phoneName"
                      required
                    />
                  </div>

                  <div className="form-group m-0">
                    <Button
                      variant="success"
                      type="submit"
                      className="btn btn-primary"
                    >
                      Add
                    </Button>
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

export default Addnewsupervisor;
