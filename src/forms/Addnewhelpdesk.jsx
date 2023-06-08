import react, { useState } from 'react';
import './users.css';
import { Button } from 'react-bootstrap';


const Addnewhelpdesk = () => {


    const [values, setValues] = useState({
        userName: '',
        password: ''
    });


    const handleChange = (e) => {
        e.persist();
        setValues(values => ({
            ...values,
            [e.target.name]: e.target.value
        }));
    };



    return (
        <div className="add-user">



            <section className="h-100">
                <div className="container h-200">

                    <div className="row justify-content-md-center h-100">
                        <div className="card-wrapper">

                            <div className="card fat">
                                <div className="card-body">
                                    <h4 className="card-title">Add New Helpdesk</h4>

                                    <form className="add-new-user" >
                                        <div className="form-group">
                                            <label >First Name</label>
                                            <input id="username" type="text" className="form-control" minLength={5} value={values.firstName} onChange={handleChange} name="firstName" required />






                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="text">Last Name</label>
                                            <input id="username" type="text" className="form-control" minLength={5} value={values.lastName} onChange={handleChange} name="lastName" required />





                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="email">E-mail</label>
                                            <input id="email" type="text" className="form-control" minLength={5} value={values.userName} onChange={handleChange} required />

                                            <div className="invalid-feedback">
                                                UserId is invalid
                                            </div>



                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="number">Phone Number</label>
                                            <input id="username" type="text" className="form-control" minLength={5} value={values.phoneNumber} onChange={handleChange} name="phoneName" required />

                                        </div>


                                        <div className="form-group m-0">
                                            <Button variant="success" type="submit" className="btn btn-primary">
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
    )



}







export default Addnewhelpdesk;