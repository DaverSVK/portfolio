import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Dávid Szépvölgyi</span>
            currently student of  <span className="purple">Robotics and cybernetics</span>
            <br />
            In my free time i like to thing of new ways to solve problems and develop things that will make daily life easier.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>

          <p style={{ color: "rgb(36, 103, 5)" }}>
            "Have fun while doing things and in the it will be worth IT!"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
