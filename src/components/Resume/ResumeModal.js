import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';
import pdf1 from "../../Assets/Transcript_pages-to-jpg-0001.jpg";
import pdf2 from "../../Assets/Transcript_pages-to-jpg-0003.jpg";

const ImagePopup = () => {
  const [show, setShow] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [pdf1, pdf2];

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
        เปิดรูปภาพ
      </Button>

      {/* Modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>รูปภาพที่ {currentIndex + 1}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={images[currentIndex]}
            alt={`Popup ${currentIndex + 1}`}
            className="img-fluid"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            ปิด
          </Button>
          <Button variant="primary" onClick={handlePrev}>
            รูปก่อนหน้า
          </Button>
          <Button variant="primary" onClick={handleNext}>
            รูปถัดไป
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ImagePopup;
