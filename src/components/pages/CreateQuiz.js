import React, { useState } from "react";
import { Button } from "react-bootstrap";
import RenderAccordion from "../session/components/quiz/RenderAccordion";

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
const addSection = () => {
  console.log("clicked");
};

const CreateQuiz = () => {
  const [quizQuestions, setQuizQuestions] = useState(initialState);
  return (
    <>
      <RenderAccordion quizQuestions={quizQuestions} />
      <Button variant="light" onClick={addSection}>
        <i class="fas fa-plus"></i> Add another section
      </Button>
    </>
  );
};

export default CreateQuiz;
