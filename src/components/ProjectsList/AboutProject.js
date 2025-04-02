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

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
