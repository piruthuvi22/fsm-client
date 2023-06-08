import React, {useState} from 'react';
import './users.css';
import { Button} from 'react-bootstrap';
import {useMutation, gql} from "@apollo/client";

const DELETE_RESOURCE_MUTATION = gql`
  mutation deleteResource($id: String!) {
    deleteResource(value: {id: $id}) {
      id
    }
  }
`;

const DeleteResourceDetails = ({resourceId}) => {

    const [deleteResource] = useMutation(DELETE_RESOURCE_MUTATION,{
        onCompleted: (data) => {
            console.log('Deleted resource details successfully!', data.deleteResource);
        },
    });

    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        deleteResource({
            variables: {
                id: resourceId.toString(),
            }
        });
        setFormSubmitted(true);
    };

    if (formSubmitted) {
        return (
            <div className="delete-resource-details">
                <section className="h-100" >
                    <div className="container h-200">
                        <div className="row justify-content-md-center h-100">
                            <div className="card-wrapper">
                                <div className="card fat">
                                    <div className="card-body">
                                        <h4 className="card-title">Resource deleted successfully!</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }

    return (
        <div className="add-user">
            <section className="h-100">
                <div className="container h-200">
                    <div className="row justify-content-md-center h-100">
                        <div className="card-wrapper">
                            <div className="card fat">
                                <div className="card-body">
                                    <h4 className="card-title">Delete Resource</h4>
                                    <form className="add-new-user" onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <label ><h5>Are you sure?</h5></label>
                                            <h6>Do you really want to delete these records?This process cannot be undone.</h6>
                                            <Button variant="danger" type="submit" className="btn btn-primary" >
                                                Delete
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
export default DeleteResourceDetails;