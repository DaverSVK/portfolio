import React from "react";
import Card from "react-bootstrap/Card";
import { ImRadioChecked } from "react-icons/im";
function AboutCard(props) {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {props.aboutInfo}
          </p>
          <ul className="list-disc pl-5">
            <li className="about-activity">
              <ImRadioChecked/>  Playing Games
            </li>
            <li className="about-activity">
              <ImRadioChecked/>   Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImRadioChecked/>   Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
