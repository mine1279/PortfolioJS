import React from "react";
import { Container, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf2 from "../../Assets/../Assets/Transcript.pdf";
import pdf from "../../Assets/../Assets/Resume_Neramid.pdf";
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
        
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px", marginRight:'500px' }}
          >
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
          
          

          <Button
            variant="primary"
            href={pdf2}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download Transcript
          </Button>
          </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
