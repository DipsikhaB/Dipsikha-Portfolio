import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import bcrec from "../../Assets/Projects/bcrec.jpeg";
import location from "../../Assets/Projects/location.jpeg";
import blog from "../../Assets/Projects/blog.jpg";
import portfolio from "../../Assets/Projects/portfolio.jpg";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="PortFolio Website"
              description="My portfolio website contains my introduction, my skills, my achievements and also my resume."
              link="https://dipsikhaportfolio.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={location}
              isBlog={false}
              title="Get User Current Location"
              description="Used to fetch user's current location with the GPS tracker."
              link="https://drive.google.com/file/d/1myj0F_DzXEpzgvjUKJQn5eD_NZVRML41/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bcrec}
              isBlog={false}
              title="BCREC COLLEGE APPLICATION"
              description="Own College Application made with XML and Java. Student wil find all details about the college. Contact are also provided."
              link="https://drive.google.com/file/d/17Mk8uURnFN6b0Jh-nYEDFI41XR224h9a/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Tyrant Blogging"
              description="My personal blog page build with React.js and Css which is generally for developers. Easy to find knowledge about every kind of developing "
              link="https://tyrant-blog-website.herokuapp.com/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
            //   imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              link="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
            //   imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              link="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
