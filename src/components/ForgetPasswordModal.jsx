import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import PasswordChangeForm from "../forms/ChangePassword";

function ForgetPasswordModal(props) {
    const [email, setEmail] = useState("");
    const [showOtpModal, setShowOtpModal] = useState(false);
    const [showRPWDModal, setShowRPWDModal] = useState(false);
    const [otp, setOtp] = useState("");

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // handle submit logic
        // show the OTP modal
        setShowOtpModal(true);
    };

    const handleSubmit2 = (event) => {
        event.preventDefault();
        // handle submit logic
        // show the OTP modal
        setShowRPWDModal(true);
    };

    const handleOtpClose = () => {
        // close the OTP modal and reset email state
        setShowOtpModal(false);
        setEmail("");
    };
    const handleRPWDClose = () => {
        // close the OTP modal and reset email state
        setShowRPWDModal(false);
    };

    const handleOtpChange = (event) => {
        setOtp(event.target.value);
    };

    return (
        <>
            <Modal show={props.show} onHide={props.onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>Forgot Password</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={handleEmailChange}
                            />
                            <Form.Text className="text-muted">
                                We'll send you a link to reset your password.
                            </Form.Text>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
            <Modal show={showOtpModal} onHide={handleOtpClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Enter OTP</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {" "}
                    <Form onSubmit={handleSubmit2}>
                        <Form.Group controlId="formBasicOTP">
                            <Form.Label>Enter OTP</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter OTP"
                                value={otp}
                                onChange={handleOtpChange}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={handleSubmit2}>
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
            <Modal show={showRPWDModal} onHide={handleRPWDClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Reset Password</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {""}
                    <PasswordChangeForm />
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ForgetPasswordModal;
