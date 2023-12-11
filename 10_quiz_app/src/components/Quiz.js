import { Questions } from "../helpers/QuestionBank";
import { useState, useContext } from "react";
import { QuizContext } from "../helpers/Context";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [chosenOption, setChosenOption] = useState("");
  const { score, setScore, setGameState } = useContext(QuizContext);

  const optionBtns = document.getElementsByClassName("optionBtn");

  const optionHandler = (e) => {
    if (optionBtns.length - 3 === Questions[currentQuestion]?.answer) {
      optionBtns[0].classList.add("correctAns");
    } else {
      optionBtns[0].classList.add("wrongAns");
    }
    if (optionBtns.length - 2 === Questions[currentQuestion]?.answer) {
      optionBtns[1].classList.add("correctAns");
    } else {
      optionBtns[1].classList.add("wrongAns");
    }
    if (optionBtns.length - 1 === Questions[currentQuestion]?.answer) {
      optionBtns[2].classList.add("correctAns");
    } else {
      optionBtns[2].classList.add("wrongAns");
    }
    if (optionBtns.length === Questions[currentQuestion]?.answer) {
      optionBtns[3].classList.add("correctAns");
    } else {
      optionBtns[3].classList.add("wrongAns");
    }
  };

  const nextQuestion = () => {
    if (chosenOption === Questions[currentQuestion]?.answer) {
      setScore(score + 1);
    }

    setCurrentQuestion(currentQuestion + 1);

    optionBtns[0].className = "optionBtn";
    optionBtns[1].className = "optionBtn";
    optionBtns[2].className = "optionBtn";
    optionBtns[3].className = "optionBtn";
  };

  const finishQuiz = () => {
    if (chosenOption === Questions[currentQuestion]?.answer) {
      setScore(score + 1);
    }
    setGameState("endGame");
  };

  return (
    <div className="quiz">
      <h1 className="question">{Questions[currentQuestion]?.question}</h1>
      <div className="options">
        <button
          className="optionBtn"
          onClick={() => {
            setChosenOption("A");
            optionHandler();
          }}
        >
          {Questions[currentQuestion]?.optionA}
        </button>
        <button
          className="optionBtn"
          onClick={() => {
            setChosenOption("B");
            optionHandler();
          }}
        >
          {Questions[currentQuestion]?.optionB}
        </button>
        <button
          className="optionBtn"
          onClick={() => {
            setChosenOption("C");
            optionHandler();
          }}
        >
          {Questions[currentQuestion]?.optionC}
        </button>
        <button
          className="optionBtn"
          onClick={() => {
            setChosenOption("D");
            optionHandler();
          }}
        >
          {Questions[currentQuestion]?.optionD}
        </button>
      </div>
      <div className="buttonsBox">
        <button className="skipBtn">Skip</button>
        {currentQuestion === Questions.length - 1 ? (
          <button className="nextBtn" onClick={finishQuiz}>
            Finish Quiz
          </button>
        ) : (
          <button className="nextBtn" onClick={nextQuestion}>
            Next Question
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
