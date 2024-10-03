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
      <Col xs={12} sm={6} md={5} className="exp-icons">
        <img src={Register} alt="Register" className="img-fluid" />
      </Col>
      <Col xs={12} sm={6} md={5} className="exp-icons">
        <img src={profile} alt="Profile" className="img-fluid" />
      </Col>
      <Col xs={12} sm={6} md={5} className="exp-icons">
        <img src={editprofile} alt="Edit Profile" className="img-fluid" />
      </Col>
      <Col xs={12} sm={6} md={5} className="exp-icons">
        <img src={historylist} alt="History List" className="img-fluid" />
      </Col>
      <Col xs={12} sm={6} md={5} className="exp-icons">
        <img src={historydetail} alt="History Detail" className="img-fluid" />
      </Col>
      <Col xs={12} sm={6} md={5} className="exp-icons">
        <img src={sidebar} alt="Sidebar" className="img-fluid" />
      </Col>
      <Col xs={12} md={10} className="exp-icons">
        <img src={profileadmin} alt="Profileadmin" className="img-fluid" />
      </Col>
      <Col xs={12} md={10} className="exp-icons">
        <img src={editprofileadmin} alt="EditProfileadmin" className="img-fluid" />
      </Col>
      <Col xs={12} md={10} className="exp-icons">
        <img src={changpassadmin} alt="Changpassadmin" className="img-fluid" />
      </Col>
    </Row>
  );
}

export default Detail;
