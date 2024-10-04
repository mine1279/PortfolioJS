import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Modal, Button } from 'react-bootstrap';
import Transcript1 from "../../Assets/Transcript_pages-to-jpg-0001.jpg";
import Transcript2 from "../../Assets/Transcript_pages-to-jpg-0003.jpg";
import pdf2 from "../../Assets/../Assets/Transcript_Neramid.pdf";

const ModalTranscript = () => {
  const [show, setShow] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [Transcript1, Transcript2];

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="container mt-5">
      {/* Button trigger modal */}
      <Button variant="primary" onClick={handleShow}>
        Transcript
      </Button>

      {/* Modal */}
      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Page {currentIndex + 1}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={images[currentIndex]}
            alt={`Popup ${currentIndex + 1}`}
            className="img-fluid"
          />
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-between">
          <Button variant="link" onClick={handlePrev}>
            <i className="bi bi-arrow-left" style={{ fontSize: '2rem', color:'purple' }}></i>
          </Button>
          <div className='d-flex justify-content-center'>
          <Button href={pdf2}>
            Download
          </Button>
          </div>
          <Button variant="link" onClick={handleNext}>
            <i className="bi bi-arrow-right" style={{ fontSize: '2rem', color:'purple' }}></i>
          </Button>
          
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalTranscript;
