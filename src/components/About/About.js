import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import mypic from "../../Assets/img/dui3nobg.png"
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
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
            LET ME <strong className="purple">INTRODUCE</strong> MYSELF 
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={3}
            style={{ paddingBottom: "50px",marginTop:"-120px" }}
            className="about-img"
          >
            <img src={mypic} alt="about" className="img-fluid" style={{ borderRadius:'0%' }} />
          </Col>
        </Row>
        <h1 className="project-heading">
          <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

      </Container>
    </Container>
  );
}

export default About;
