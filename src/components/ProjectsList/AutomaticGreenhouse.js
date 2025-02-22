import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Particle from "../Particle";
// import Github from "./Github";
import Techstack from "./TechstackProjects";
import Aboutcard from "./AboutProject";
import projectMainImage from "../../Assets/Projects/GreenHouse.png";
import Toolstack from "../About/Toolstack";
import ArticleProject from "./ArticleProject";
const brief = "Duis lobortis lorem eu magna faucibus, ac euismod quam interdum. Aenean tempus, diam semper ultrices vehicula, purus arcu maximus libero, a dignissim erat purus vitae odio. Cras sed felis ultrices, convallis metus nec, varius turpis. Praesent convallis nunc sagittis ipsum efficitur aliquam. Curabitur ut magna ut ex elementum ullamcorper eu at libero. In pulvinar condimentum fringilla. Sed volutpat porta mi imperdiet accumsan. Curabitur vel sollicitudin orci. Vestibulum ut dolor neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed feugiat ultricies sapien, a rhoncus risus molestie ut."
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
        <ArticleProject />
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
