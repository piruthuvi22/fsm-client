import React, { useState } from "react";
import "./users.css";
import { Button } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { CREATE_CUSTOMER_MUTATION } from "../data/apolloclient";

const Addnewcustomer = () => {
    // Define the state variables using the useState hook
    const [createCustomer, { data }] = useMutation(CREATE_CUSTOMER_MUTATION);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    // Define the submit handler function
    function handleSubmit(event) {
        event.preventDefault();
        // Call the createCustomer mutation with the form data
        createCustomer({
            variables: { firstName, lastName, address, phone, email },
        });
    }

    // Render the form using Bootstrap and React components
    return (
        <div className="add-user">
            <section className="h-100">
                <div className="container h-200">
                    <div className="row justify-content-md-center h-100">
                        <div className="card-wrapper">
                            <div className="card fat">
                                <div className="card-body">
                                    <h4 className="card-title">Add New Customer</h4>

                                    <form className="add-new-user" onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <label>First Name</label>
                                            <input
                                                id="firstName"
                                                type="text"
                                                className="form-control"
                                                maxLength={50}
                                                value={firstName}
                                                onChange={(event) => setFirstName(event.target.value)}
                                                name="firstName"
                                                required
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label>Last Name</label>
                                            <input
                                                id="lastName"
                                                type="text"
                                                className="form-control"
                                                maxLength={50}
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
                                                type="email"
                                                className="form-control"
                                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                                value={email}
                                                onChange={(event) => setEmail(event.target.value)}
                                                required
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label>Phone Number</label>
                                            <input
                                                id="phone"
                                                type="tel"
                                                className="form-control"
                                                pattern="[+0-9]+"
                                                maxLength={15}
                                                value={phone}
                                                onChange={(event) => setPhone(event.target.value)}
                                                name="phone"
                                                required
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label>Address</label>
                                            <textarea
                                                id="address"
                                                type="text"
                                                className="form-control"
                                                maxLength={200}
                                                value={address}
                                                onChange={(event) => setAddress(event.target.value)}
                                                name="address"
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
            </section>
        </div>
    );
};

export default Addnewcustomer;

