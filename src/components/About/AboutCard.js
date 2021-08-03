import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card
      style={{
        marginTop: "2rem",
        background: "transparent",
        padding: "2rem",
        boxShadow: "0 0 25px yellow",
      }}
      className="quote-card-view"
    >
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Dipsikha Banerjee </span>
            from <span className="purple"> West Bengal, India</span>
            <br />I am a pre-final year student pursuing Bachelor of Technology
            from Dr. B. C. Roy Engineering College Durgapur.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Painting
            </li>
            <li className="about-activity">
              <ImPointRight /> UI/UX Designing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
