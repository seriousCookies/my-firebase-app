import React, { useState } from "react";
import { Accordion, Button, Card, Form } from "react-bootstrap";

const initialState = [
  [
    {
      question: "Type your question here",
      answer: "give your answer here",
    },
    {
      question: "Type y2",
      answer: "give y2e",
    },
  ],
  [
    {
      question: "Type your question here",
      answer: "give your answer here",
    },
    {
      question: "Type y2",
      answer: "give y2e",
    },
  ],
  [
    {
      question: "Type your question here",
      answer: "give your answer here",
    },
    {
      question: "Type y2",
      answer: "give y2e",
    },
  ],
];
const clicky = (e) => {
  console.log("clicked", e.target);
};

const CreateQuiz = () => {
  const [quizQuestions, setQuizQuestions] = useState(initialState);
  const renderAccordion = (sections) => {
    console.log(sections);
    return (
      <Accordion>
        {sections.map((section, index) => {
          return (
            <Card>
              <Accordion.Toggle
                as={Card.Header}
                eventKey={1 + index}
                onClick={clicky}
              >
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
  return renderAccordion(quizQuestions);

  // const addSection = () => {
  //   console.log("clicked");
  // };
  // return (
  //   <>
  //     <Accordion id="quizSections">
  //       <Card>
  //         <Accordion.Toggle as={Card.Header} eventKey="0">
  //           Section 1
  //         </Accordion.Toggle>
  //         <Accordion.Collapse eventKey="0">
  //           <Card.Body>Hello! I'm the body</Card.Body>
  //         </Accordion.Collapse>
  //       </Card>
  //       <Card>
  //         <Accordion.Toggle as={Card.Header} eventKey="1">
  //           Section 2
  //         </Accordion.Toggle>
  //         <Accordion.Collapse eventKey="1">
  //           <Card.Body>Hello! I'm another body</Card.Body>
  //         </Accordion.Collapse>
  //       </Card>
  //     </Accordion>
  //     <Button variant="light" onClick={addSection}>
  //       <i class="fas fa-plus"></i> Add another section
  //     </Button>
  //   </>
  // );
};

export default CreateQuiz;
