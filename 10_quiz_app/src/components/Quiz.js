import { Questions } from "../helpers/QuestionBank";
import { useState } from "react";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  return (
    <div className="quiz">
      <h1 className="question">{Questions[currentQuestion]?.question}</h1>
      <div className="options">
        <button>{Questions[currentQuestion]?.optionA}</button>
        <button>{Questions[currentQuestion]?.optionB}</button>
        <button>{Questions[currentQuestion]?.optionC}</button>
        <button>{Questions[currentQuestion]?.optionD}</button>
      </div>
    </div>
  );
};

export default Quiz;
