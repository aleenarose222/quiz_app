import React, { useState } from "react";
import quizData from "../data/quizData";
import Question from "./Question";
import Score from "./Score";

function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (selectedOption) => {
    if (selectedOption === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <Score score={score} totalQuestions={quizData.length} resetQuiz={resetQuiz} />
      ) : (
        <Question
          questionData={quizData[currentQuestion]}
          handleAnswerOptionClick={handleAnswerOptionClick}
        />
      )}
    </div>
  );
}

export default QuizApp;
