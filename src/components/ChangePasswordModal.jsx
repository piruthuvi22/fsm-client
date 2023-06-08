import React from "react";
import { Modal } from "react-bootstrap";
import PasswordChangeForm from "../forms/ChangePassword";

function ChangePasswordModal(props) {

    return (
        <Modal show={props.show} onHide={props.onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Change Password</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <PasswordChangeForm/>
            </Modal.Body>
        </Modal>
    );
}

export default ChangePasswordModal;




