import React from "react";

function Score({ score, totalQuestions, resetQuiz }) {
  return (
    <div className="score-section">
      <h2>
        Your Score: {score} / {totalQuestions}
      </h2>
      <button onClick={resetQuiz}>Restart Quiz</button>
    </div>
  );
}

export default Score;
