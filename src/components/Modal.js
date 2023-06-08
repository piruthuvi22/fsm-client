import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalC({
  handleCloseModal,
  modalStatus,
  ComponentName,
  modalHeader = "",
  size = "default",
  centered = false,
}) {
  const handleClose = () => handleCloseModal();

  return (
    <>
      <Modal
        centered={centered}
        show={modalStatus}
        onHide={handleClose}
        className="test-modal"
        size={size}
      >
        {modalHeader && (
          <Modal.Header>
            <Modal.Title>{modalHeader}</Modal.Title>
          </Modal.Header>
        )}
        <Modal.Body>{ComponentName}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalC;
