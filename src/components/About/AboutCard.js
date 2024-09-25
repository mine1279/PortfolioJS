import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, My name's <span className="purple">Neramid Benjawan </span>
            from <span className="purple"> Bangkok, Thailand.</span>
            <br />
            I’m currently a recent fresh graduate with a degree in <span className="purple">Electronic Computer Technology</span> at 
            <span className="purple"> King Mongkut University of Technology North Bangkok</span>.
            I am looking for opportunities to pursue a career in <span className="purple">Frontend Developer</span> or
            <span className="purple"> Web Developer</span>.
            <br />

          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
