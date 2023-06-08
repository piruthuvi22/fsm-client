import React, { useState } from 'react';
import './users.css';
import { Button} from 'react-bootstrap';
import { useMutation, gql } from '@apollo/client';

const CREATE_RESOURCE = gql`
  mutation createResource($name: String!, $description: String!, $quantity: Int!) {
    createResource(value: { name: $name, description: $description, quantity: $quantity }) {
      id
      name
      description
      quantity
    }
  }
`;

const Addnewresource = () => {
    const [values, setValues] = useState({
        name: '',
        description: '',
        quantity: 0
    });

    const [createResource] = useMutation(CREATE_RESOURCE, {
        onCompleted: (data) => {
            console.log('Resource created successfully!', data.createResource);
        },
    });

    const [formSubmitted, setFormSubmitted] = useState(false); // added state variable

    const handleChange = (e) => {
        e.persist();
        setValues(values => ({
            ...values,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createResource({
            variables: {
                name: values.name,
                description: values.description,
                quantity: parseInt(values.quantity),
            },
        });
        setFormSubmitted(true); // set formSubmitted to true
    };

    // Render a success message after the form is submitted
    if (formSubmitted) {
        return (
            <div className="add-resource">
                <section className="h-100" >
                    <div className="container h-200">
                        <div className="row justify-content-md-center h-100">
                            <div className="card-wrapper">
                                <div className="card fat">
                                    <div className="card-body">
                                        <h4 className="card-title">Resource added successfully!</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }

    // Render the form if formSubmitted is false
    return (
        <div className="add-resource">
            <section className="h-100" >
                <div className="container h-200">
                    <div className="row justify-content-md-center h-100">
                        <div className="card-wrapper">
                            <div className="card fat">
                                <div className="card-body">
                                    <h4 className="card-title">Add New Resource</h4>
                                    <form className="add-new-resource" onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <label >Name</label>
                                            <input id="resource_name" type="text" className="form-control" minLength={5} value={values.name} onChange={handleChange} name="name" required />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="text">Description</label>
                                            <input id="description" type="text" className="form-control" minLength={5} value={values.description} onChange={handleChange} name="description" required />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="quantity">Quantity</label>
                                            <input id="resource_quantity" type="text" className="form-control" minLength={1} value={values.quantity} onChange={handleChange} name="quantity" required />
                                            <div className="invalid-feedback">
                                                Invalid quantity
                                            </div>
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
export default Addnewresource;