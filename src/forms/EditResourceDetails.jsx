import React, { useState} from 'react';
import './users.css';
import { Button} from 'react-bootstrap';
import { useMutation, gql } from '@apollo/client';

const UPDATE_RESOURCE_MUTATION = gql`
  mutation updateResource($id: String!, $name: String!, $description: String!, $quantity: Int!) {
    updateResource(value: { id: $id, name: $name, description: $description, quantity: $quantity }) {
      id
      name
      description   
      quantity
    }
  }
`;

const EditResourceDetails = ({resourceId}) => {

    const [values, setValues] = useState({
        id: resourceId,
        name: '',
        description: '',
        quantity: ''
    });

    const [updateResource] = useMutation(UPDATE_RESOURCE_MUTATION,{
        onCompleted: (data) => {
            console.log('Updated resource details successfully!', data.updateResource);
        },
    });

    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleChange = (e) => {
        e.persist();
        setValues(values => ({
            ...values,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateResource({
                variables: {
                    id: values.id.toString(),
                    name: values.name,
                    description: values.description,
                    quantity: parseInt(values.quantity)
                }
            });
        setFormSubmitted(true);
    };

    if (formSubmitted) {
        return (
            <div className="edit-resource-details">
                <section className="h-100" >
                    <div className="container h-200">
                        <div className="row justify-content-md-center h-100">
                            <div className="card-wrapper">
                                <div className="card fat">
                                    <div className="card-body">
                                        <h4 className="card-title">Resource updated successfully!</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }

return(
        <div className="edit-resource-details">
            <section className="h-100">
                <div className="container h-200">
                    <div className="row justify-content-md-center h-100">
                        <div className="card-wrapper">
                            <div className="card fat">
                                <div className="card-body">
                                    <h4 className="card-title">Edit Resource Details</h4>
                                    <form className="edit-resource-details" onSubmit={handleSubmit}>
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
                                            <Button  variant="success" type="submit" className="btn btn-primary">
                                                Edit
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

export default EditResourceDetails;

