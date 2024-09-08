import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import picmyself from "../../Assets/img/dui2nobg.png"
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Tilt from "react-parallax-tilt";

function Home() {

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Welcome To My Portfolio!{" "}
                {/*<span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
  </span>*/}
              </h1>

              <h1 className="heading-name">
               I'M
                <strong className="main-name"> NERAMID BENJAWAN</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }} className="myAvatar"><Tilt>
              <img
                src={picmyself}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "400px", marginLeft:"100px"}}
              /></Tilt>
            </Col>
          </Row>
        </Container>
        <Home2 />
      </Container>
      
    </section>
  );
}

export default Home;
