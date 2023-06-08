import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function PasswordChangeForm(props) {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [formError, setFormError] = useState("");

    const handleOldPasswordChange = (event) => {
        setOldPassword(event.target.value);
    };

    const handleNewPasswordChange = (event) => {
        setNewPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (newPassword !== confirmPassword) {
            setFormError("New password and confirm password do not match.");
            return;
        }

        // TODO: Submit the password change request to the server here
        // For example:
        // fetch('/api/change-password', {
        //   method: 'POST',
        //   body: JSON.stringify({ oldPassword, newPassword }),
        //   headers: { 'Content-Type': 'application/json' },
        // })
        // .then(response => response.json())
        // .then(data => console.log(data))
        // .catch(error => console.error(error))

        setOldPassword("");
        setNewPassword("");
        setConfirmPassword("");
        setFormError("");
        props.onSuccess();
    };

    return (
        <Form onSubmit={props.onSubmit}>
            <Form.Group controlId="formOldPassword">
                <Form.Label>Current Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Enter current password"
                    value={oldPassword}
                    onChange={handleOldPasswordChange}
                    required
                />
            </Form.Group>
            <Form.Group controlId="formNewPassword">
                <Form.Label>New Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Enter new password"
                    value={newPassword}
                    onChange={handleNewPasswordChange}
                    required
                />
            </Form.Group>
            <Form.Group controlId="formConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Confirm new password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    required
                />
            </Form.Group>
            {formError && <div className="text-danger">{formError}</div>}
            <Button variant="primary" type="submit">
                Change Password
            </Button>
        </Form>
    );
}

export default PasswordChangeForm;
