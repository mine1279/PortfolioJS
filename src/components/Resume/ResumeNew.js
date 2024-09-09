import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf3 from '../../Assets/../Assets/Graduation Certificate.pdf'
import pdf2 from "../../Assets/../Assets/Transcript_Neramid.pdf";
import pdf from "../../Assets/../Assets/Resume_Neramid2.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { pdfjs } from "react-pdf";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {


  return (
    <div>
      <Container fluid className="resume-section mt-5 ">
        <Particle />
        
        <Row style={{ justifyContent: "center", position: "relative" }} className="resume">
        <Col md={4} className="d-flex justify-content-center mb-3">
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px"}}
          >
            <AiOutlineDownload />
            &nbsp;<br />
            Download 
            <br />
            Resume
          </Button>
          </Col>
          
          <Col md={4} className="d-flex justify-content-center mb-3">
          <Button
            variant="primary"
            href={pdf2}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;
            <br />
            Download 
            <br />
            Transcript
          </Button>
          </Col>

          <Col md={4} className="d-flex justify-content-center mb-3">
          <Button
            variant="primary"
            href={pdf3}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;
            <br />Download 
            <br />
            Graduation Certificate
          </Button>
          </Col>
          </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
