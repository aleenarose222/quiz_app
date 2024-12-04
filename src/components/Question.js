import React from "react";
import "./Question.css";

function Question({ questionData, handleAnswerOptionClick }) {
  return (
    <div className="question-section">
      <h2>{questionData.question}</h2>
      <div className="options-section">
        {questionData.options.map((option, index) => (
          <button key={index} onClick={() => handleAnswerOptionClick(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
