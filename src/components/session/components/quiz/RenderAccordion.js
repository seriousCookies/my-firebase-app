import React from "react";
import { Accordion, Button, Card, Form } from "react-bootstrap";

const RenderAccordion = ({ quizQuestions }) => {
  return (
    <Accordion>
      {quizQuestions.map((section, index) => {
        return (
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey={1 + index}>
              Section {index + 1}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={1 + index}>
              <Card.Body>
                <ol>
                  {section.map((question) => {
                    return <li>{question.question}</li>;
                  })}
                </ol>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        );
      })}
    </Accordion>
  );
};

export default RenderAccordion;
