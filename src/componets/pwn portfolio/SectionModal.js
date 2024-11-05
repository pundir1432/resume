import React from 'react';
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

const SectionModal = ({ open, handleClose, data }) => {
  return (
    <Modal show={open} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Form Submission Data</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>Your Details:</h5>
        <p>
          <strong>Name:</strong> {data?.name}
        </p>
        <p>
          <strong>Email:</strong> {data?.email}
        </p>
        <p>
          <strong>Message:</strong> {data?.message}
        </p>
        <p>
          <strong>Note:</strong> Wait for your reply; I sent you a message to your email.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-primary" onClick={handleClose}>
          Done
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default SectionModal;
