import { useContext } from "react";
import { QuizContext } from "./helpers/Context";

const EndScreen = () => {
  const { score, setScore, setGameState } = useContext(QuizContext);

  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
  };

  return (
    <div className="endScreen">
      <h1>Quiz Over</h1>
      <h3>Your Score : {score}</h3>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
};

export default EndScreen;
