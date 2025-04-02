import React from "react";
import Card from "react-bootstrap/Card";
import { ImRadioChecked } from "react-icons/im";
function AboutProjectFeatures(props) {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <h2 style={{ textAlign: "justify" }}>
            Key Features of the Project:
          </h2>
          <ul className="list-disc pl-5">
 
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

export default AboutProjectFeatures;
