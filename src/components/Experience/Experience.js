import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ExpCard from "./ExpCard";

function Experience() {
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
              My <strong className="purple">Experience</strong>
            </h1>
            <ExpCard />
            
          </Col>
          </Row>
            </Container>
        </Container>
    );
}
export default Experience;