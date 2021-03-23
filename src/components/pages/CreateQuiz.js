import React, { useState } from "react";
import { Button } from "react-bootstrap";
import RenderAccordion from "../session/components/quiz/RenderAccordion";

const initialState = [
  [
    {
      question: "Type your question here1111",
      answer: "give your answer here",
    },
    {
      question: "Type y2",
      answer: "give y2e",
    },
  ],
  [
    {
      question: "Type your question here222",
      answer: "give your answer here",
    },
    {
      question: "Type y2",
      answer: "give y2e",
    },
  ],
  [
    {
      question: "Type your question here333",
      answer: "give your answer here",
    },
    {
      question: "Type y2",
      answer: "give y2e",
    },
  ],
];

const CreateQuiz = () => {
  const [quizQuestions, setQuizQuestions] = useState(initialState);
  const addSection = () => {
    const newSection = [
      {
        question: "Type your question here444",
        answer: "give your answer here",
      },
      {
        question: "Type y2444",
        answer: "give y2e",
      },
    ];
    setQuizQuestions([...quizQuestions, newSection]);
  };
  return (
    <>
      <RenderAccordion
        setQuizQuestions={setQuizQuestions}
        quizQuestions={quizQuestions}
      />
      <Button variant="light" onClick={addSection}>
        <i class="fas fa-plus"></i> Add another section
      </Button>
    </>
  );
};

export default CreateQuiz;
