import React from "react";
import { Col, Row } from "react-bootstrap";
import Register from './img/Register.png';
import profile from './img/profile.png';
import editprofile from './img/editprofile.png';
import historylist from './img/historylist.png';
import historydetail from './img/historydetail.png';
import profileadmin from './img/profileadmin.png';
import editprofileadmin from './img/editprofileadmin.png';
import changpassadmin from './img/changpassadmin.png';
import sidebar from './img/sidebar.png';
function Detail() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={6} md={5} className="exp-icons">
        <img src={Register} alt="Register" />
      </Col>
      <Col xs={6} md={5} className="exp-icons">
        <img src={profile} alt="Profile" />
      </Col>
      <Col xs={6} md={5} className="exp-icons">
        <img src={editprofile} alt="Edit Profile" />
      </Col>
      <Col xs={6} md={5} className="exp-icons">
        <img src={historylist} alt="History List" />
      </Col>
      <Col xs={6} md={5} className="exp-icons">
        <img src={historydetail} alt="History Detail" />
      </Col>
      <Col xs={6} md={5} className="exp-icons">
        <img src={sidebar} alt="Sidebar" />
      </Col>
      <Col xs={10} md={10} className="exp-icons">
        <img src={profileadmin} alt="Profileadmin" />
      </Col>
      <Col xs={10} md={10} className="exp-icons">
        <img src={editprofileadmin} alt="EditProfileadmin" />
      </Col>
      <Col xs={10} md={10} className="exp-icons">
        <img src={changpassadmin} alt="Changpassadmin" />
      </Col>
    </Row>
  );
}

export default Detail;
