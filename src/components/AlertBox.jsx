import React, { useEffect } from "react";
import * as Md from "react-icons/md";

import Modal from "react-bootstrap/Modal";

const AlertBox = ({
  onCloseAlert,
  duration = 2000,
  title,
  type = "success",
  closeBtnColor = "secondary",
  size = "default",
  onShowAlert = false,
  centered = false,
}) => {
  useEffect(() => {
    console.log("use Effect Alert box");
    setTimeout(() => {
      console.log("timeout");
      onCloseAlert();
    }, duration);
  }, []);

  return (
    <Modal
      centered={centered}
      show={onShowAlert}
      onHide={onCloseAlert}
      className="test-modal"
      size={size}
    >
      {title && (
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
      )}
      <Modal.Body>
        <div className="d-flex flex-column align-items-center">
          {/* <h4>{title}</h4> */}
          <div className="my-3">
            {type === "success" && (
              <Md.MdDoneAll size={64} className="text-success" />
            )}
            {type === "error" && (
              <Md.MdWarningAmber size={64} className="text-danger" />
            )}
            {type === "warning" && (
              <Md.MdDoneAll size={64} className="text-warning" />
            )}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className={`btn btn-${closeBtnColor}`} onClick={onCloseAlert}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default AlertBox;
