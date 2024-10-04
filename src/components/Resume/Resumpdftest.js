import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import pdf2 from "../../Assets/Transcript_pages-to-jpg-0001.jpg";
const PdfPopup = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="container mt-5">
      {/* ปุ่มเปิด PDF */}
      <Button variant="primary" onClick={handleShow}>
        เปิดไฟล์ PDF
      </Button>

      {/* Modal */}
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>แสดงไฟล์ PDF</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            src={pdf2}
            title="PDF Viewer"
            width="100%"
            height="500px"
            style={{ border: 'none' }}
          ></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            ปิด
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PdfPopup;
