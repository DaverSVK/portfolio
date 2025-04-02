import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Particle from "../Particle";
// import Github from "./Github";
import Techstack from "./TechstackProjects";
import Aboutcard from "./AboutProject";
import projectMainImage from "../../Assets/Projects/GreenHouse.png";
import projectApp from "../../Assets/Projects/GreenApp.png";
import Toolstack from "../About/Toolstack";
import ArticleProject from "./ArticleProject";
const brief = "The Automatic Greenhouse is a proof of concept designed to grow and observe leaf lettuce, chosen for its simplicity and short 40-day vegetation period. As illustrated in the sketch, the lower section is an enclosed technical area containing all hardware components (except for the sensors). The greenhouse is equipped with two temperature sensors (one at the bottom and one at the top), a light intensity sensor, air and soil humidity sensors, and a pressure sensor. A small heating device regulates temperature, while an adjustable fan at the top ensures optimal temperature distribution throughout the greenhouse."
const projectDescription = "The Smart Greenhouse application, originally developed as a web-based tool using React with TypeScript and a Java backend, has evolved significantly. Initially, the application served primarily for managing and viewing sample data through a simple tabular interface. This version allowed basic operations such as adding or deleting samples. However, it was eventually phased out after migrating to Firebase, which provided a more robust and user-friendly interface for database management."
const projectDescription2 =  "In its current form, the application is developed using React Native, making it accessible on both Android and iOS platforms. It enables users to interact with greenhouse data in real time through HTTP requests via Axios, using asynchronous communication that waits for JSON responses rather than relying on promises."



function AutomaticGreenhouse() {
  return (
    <Container fluid className="about-section">
      {/* <Particle /> */}
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
              Automatic <strong className="purple">Greenhouse</strong>
            </h1>
            <Aboutcard aboutInfo={brief}/>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={projectMainImage} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={20}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Mobile <strong className="purple">App</strong>
            </h1>
            <Aboutcard aboutInfo={projectDescription}/>
            <Aboutcard aboutInfo={projectDescription2}/>
            <img src={projectApp} alt="about" className="img-fluid" />
          </Col>
          <Col>
          </Col>
        </Row>
        {/* <ArticleProject /> */}
        <h1 className="project-heading">
          Main <strong className="purple">Skills </strong> used
        </h1>
        <Techstack />

        {/* <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1> */}
        {/* <Toolstack /> */}

        {/* <Github /> */}
      </Container>
    </Container>
  );
}

export default AutomaticGreenhouse;
