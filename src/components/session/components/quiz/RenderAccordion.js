import React from "react";
import { Accordion, Button, Card } from "react-bootstrap";

const RenderAccordion = ({ quizQuestions, setQuizQuestions }) => {
  const deleteSection = (e) => {
    e.stopPropagation();
    const target =
      e.target.tagName.toLowerCase() === "i"
        ? e.target.parentNode.value
        : e.target.value;
    console.log(target, "here", quizQuestions);
    setQuizQuestions(
      quizQuestions.filter((item) => {
        return item !== quizQuestions.splice(target, 1);
      })
    );
    console.log(target, "after", quizQuestions);
  };
  return (
    <Accordion>
      {quizQuestions.map((section, index) => {
        return (
          <Card>
            <Accordion.Toggle
              as={Card.Header}
              className="d-flex justify-content-between"
              eventKey={1 + index}
            >
              Section {index + 1}
              <Button value={index} onClick={deleteSection}>
                <i value={index} className="fas fa-trash-alt"></i>
              </Button>
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
