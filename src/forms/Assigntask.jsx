import react, { useState } from 'react';
import './users.css';
import { Button} from 'react-bootstrap';


const Assigntask = () => {


    const [values, setValues] = useState({
    });
    const handleChange = (e) => {
        e.persist();
        setValues(values => ({
            ...values,
            [e.target.name]: e.target.value
        }));
    };
    return (
        <div className="assigntask">
            <section className="h-100" >
                <div className="container h-200">

                    <div className="row justify-content-md-center h-100">
                        <div className="card-wrapper">

                            <div className="card fat">
                                <div className="card-body">
                                    <h4 className="card-title">Assign Task</h4>

                                    <form className="assign-task" >
                                        <div className="form-group">
                                            <label >Task title</label>
                                            <input id="tasktitle" type="text" className="form-control" minLength={5} value={values.tasktitle} onChange={handleChange} name="tasktitle" required />
                                        </div>
                                        <div className="taskdescription">
                                            <label htmlFor="text">Description</label>
                                            <input id="description" type="text" className="form-control" minLength={5} value={values.description} onChange={handleChange} name="description" required />
                                        </div>
                                        <div className="phonenumber">
                                            <label htmlFor="quantity">Phone No</label>
                                            <input id="phoneno" type="text" className="form-control" minLength={5} value={values.phoneno} onChange={handleChange} required />
                                        </div>
                                        <div className="address">
                                            <label htmlFor="text">Address</label>
                                            <input id="address" type="text" className="form-control" minLength={5} value={values.address} onChange={handleChange} name="address" required />
                                        </div>
                                        <div className="agentid">
                                            <label htmlFor="text">Agent ID</label>
                                            <input id="agentid" type="text" className="form-control" minLength={5} value={values.agentid} onChange={handleChange} name="agentid" required />
                                        </div>
                                        <div className="selectresource">
                                            <label htmlFor="text">Select Resource</label>

                                        <select className="form-select" aria-label="Default select example" required>
                                            <option selected>Choose Resources</option>
                                            <option value="1">Resource01</option>
                                            <option value="2">Resource02</option>
                                            <option value="3">Resource03</option>
                                        </select>
                                        </div>
                                        <div className="resourcequantity">
                                            <label htmlFor="text">Resource Quantity</label>
                                            <input id="resourcequantity" type="text" className="form-control" minLength={5} value={values.resourcequantity} onChange={handleChange} name="resourcequantity" required />
                                        </div>
                                        <div className="form-group m-0">
                                            <Button  variant="success" type="submit" className="btn my-2">
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
export default Assigntask;