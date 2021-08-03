import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Card from "@material-ui/core/Card"
import resume from "../../Assets/resume.png";
import pdf from "../../Assets/DIPSIKHA RESUME.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
    return (
      <Container fluid className="resume-section">
        <Card
          style={{
            fontSize: "1.5rem",
            color: "white",
            boxShadow: "0 0 25px #FFFBA2 ",
          }}
          className="quote-card-view"
        >
          <h1
            style={{
              color: "white",
              margin: "4rem",
            }}
          >
            Find my <span className="purple"> Resume </span> on Clicking
          </h1>
          <img style={{
              width: "18rem",
              height: "18rem",
              marginLeft: "-2rem",
              marginRight: "1rem"
          }}src={resume}></img>
          <Button
            style={{
              fontSize: "1.5rem",
              color: "white",
              marginLeft: "2rem",
              marginRight: "4rem",
              marginTop: "4rem",
              marginBottom: "4rem",
              width: "16rem",
              height: "5rem",
              boxShadow: "0 0 25px #FFFBA2 ",
            }}
            variant="outlined"
            href={pdf}
            target="_blank"
          >
            <AiOutlineDownload fontSize="3rem" />
            &nbsp;Download CV
          </Button>
        </Card>
        <Particle />
      </Container>
    );
}

export default Resume
