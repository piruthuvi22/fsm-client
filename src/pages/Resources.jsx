import React, {useState} from "react";
import Button from 'react-bootstrap/Button'
import * as BiEditAlt from 'react-icons/bi';
import * as AiOutlineDelete from 'react-icons/ai';
import ModalC from "../components/Modal";
import Addnewresource from "../forms/Addnewresource";
import {useQuery, gql} from "@apollo/client";
import EditResourceDetails from "../forms/EditResourceDetails";
import DeleteResourceDetails from "../forms/DeleteResourceDetails";

const RES_QUERY = gql`  
    query{
  queryResource(query:{})
  {
    id
    name
    description
    quantity
  }
}
  `;

const Resources = () => {
    const {data} = useQuery(RES_QUERY);
    const [show, setShow] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [resourceId, setResourceId] = useState(null);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleCloseEdit = () => {
        setShowEdit(false);
        setResourceId(null);
    };
    const handleShowEdit = (id) => {
        setShowEdit(true);
        setResourceId(id);
    };
    const handleCloseDelete = () => {
        setShowDelete(false);
        setResourceId(null);
    };
    const handleShowDelete = (id) => {
        setShowDelete(true);
        setResourceId(id);
    };
    if (!data) return null;

    return (<React.Fragment>
            <div className="container-md">
                <div className="search_"
                     style={{
                         display: 'flex',
                         justifyContent: 'space-between',
                         paddingBottom: '50px',
                         marginTop: '68px'
                     }}>
                    <Button className="btn btn-success"
                        onClick={handleShow}>
                        Add New Resource
                    </Button>
                    <form class="form-inline my-2 my-lg-0"
                          style={{marginRight: '50px'}}>
                        <input class="form-control mr-sm-2"
                               type="search"
                               placeholder="Search resource"
                               aria-label="Search">
                        </input>
                        <button class="btn btn-outline-success my-2 my-sm-0"
                                type="submit">
                            Search
                        </button>
                    </form>
                </div>
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">RID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Quantity</th>
                        </tr>
                        </thead>
                        <tbody>
                        {data.queryResource.map((item) => {
                            return (<>
                                    <tr className="align-middle">
                                        <th scope="row">{item.id}</th>
                                        <td>{item.name}</td>
                                        <td>{item.description}</td>
                                        <td>{item.quantity}</td>
                                        <td>
                                            <BiEditAlt.BiEditAlt data-toggle="tooltip"
                                                                 data-placement="top"
                                                                 title="edit resource details"
                                                                 role="button"
                                                                 fontSize="1.5em"
                                                                 color="#A020F0"
                                                                 onClick={() => handleShowEdit(item.id)}/>
                                        </td>
                                        <td>
                                            <AiOutlineDelete.AiOutlineDelete data-toggle="tooltip"
                                                                             data-placement="top"
                                                                             title="delete resource details"
                                                                             role="button"
                                                                             fontSize="1.5em"
                                                                             color="#FF0000"
                                                                             onClick={() => handleShowDelete(item.id)}
                                            />
                                        </td>
                                    </tr>
                                </>);
                        })}
                        </tbody>
                    </table>
                </div>
                <ModalC handleCloseModal={handleClose}
                        modalStatus={show}
                        ComponentName={<Addnewresource/>}
                />
                <ModalC
                    handleCloseModal={handleCloseEdit}
                    modalStatus={showEdit}
                    ComponentName={<EditResourceDetails resourceId={resourceId}/>}
                />
                <ModalC
                    handleCloseModal={handleCloseDelete}
                    modalStatus={showDelete}
                    ComponentName={<DeleteResourceDetails resourceId={resourceId}/>}
                />
            </div>
        </React.Fragment>);
};
export default Resources;