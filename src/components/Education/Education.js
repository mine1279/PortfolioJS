import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Educard from "./EduCard";

function Education() {
    return(
        <Container fluid className="education-section">
            <Particle />
            <Container>
            <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              My <strong className="purple">Education</strong>
            </h1>
            <Educard />
            
          </Col>
          </Row>
            </Container>
        </Container>
    );
}
export default Education;