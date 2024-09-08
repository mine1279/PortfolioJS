import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiGithub,
  SiPostman,
} from "react-icons/si";

import { FaGitlab } from "react-icons/fa6";
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub /> 
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaGitlab />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiPostman />
      </Col>
    </Row>
  );
}

export default Toolstack;
