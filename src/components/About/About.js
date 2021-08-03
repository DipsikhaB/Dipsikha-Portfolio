import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Aboutcard from "./AboutCard";
import Item from "./item";
import Techstack from "../Skills/Techstack";
import Toolstack from "../Skills/Toolstack";
import Carousel from "react-elastic-carousel";
import laptopImg from "../../Assets/about.png";
import Ibm from "../../Assets/achievement/IBM.jpg";
import app from "../../Assets/achievement/0001.jpg";
import Ai from "../../Assets/achievement/Artificial Intelligence.jpg";
import Security from "../../Assets/achievement/Cyber Security.jpg";
import google from "../../Assets/achievement/google.jpg";
import fest from "../../Assets/achievement/tech.jpg";
import Isro from "../../Assets/achievement/isro.jpeg";
import aws from "../../Assets/achievement/aws.jpg";
import work from "../../Assets/achievement/Workshop.jpg";
import intern from "../../Assets/achievement/intern.jpeg";

function About() {
   
   const breakPoints = [
     { width: 1, itemsToShow: 1 },
     { width: 550, itemsToShow: 2 },
     { width: 768, itemsToShow: 3 },
     { width: 1200, itemsToShow: 4 },
   ];

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
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
      </Container>
      <Container fluid className="about-section">                  
        <h1
          style={{
            marginBottom: "-5rem",
            marginTop: "-4rem",
          }}
          className="project-heading"
        >
          My{" "}
          <span
          className="purple"
          >
            Achievement{" "}
          </span>
        </h1>
        <div className="a">
          <Carousel breakPoints={breakPoints}>
            <Item className="b">
              <img src={Isro} />
            </Item>
            <Item className="b">
              <img src={app} />
            </Item>
            <Item className="b">
              <img src={work} />
            </Item>
            <Item className="b">
              <img src={intern} />
            </Item>
            <Item className="b">
              <img src={Ibm} />
            </Item>
            <Item className="b">
              <img src={fest} />
            </Item>
            <Item className="b">
              <img src={aws} />
            </Item>
            <Item className="b">
              <img src={Ai} />
            </Item>
            <Item className="b">
              <img src={Security} />
            </Item>
            <Item className="b">
              <img src={google} />
            </Item>
          </Carousel>
        </div>
      </Container>
    </Container>
  );
}

export default About;
