import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiJava,
  DiPhp,
} from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>

      {/* <Col xs={4} md={2} className="tech-icons">
        <DiPhp />
      </Col> */}

      <Col xs={4} md={2} className="tech-icons">
        <TbBrandNextjs />
      </Col>
    </Row>
  );
}

export default Techstack;
