import { useContext } from "react";
import { QuizContext } from "../helpers/Context";
import "../App.css";
const MainMenu = () => {
  const { setGameState } = useContext(QuizContext);
  return (
    <div className="mainMenu">
      <button
        onClick={() => {
          setGameState("quiz");
        }}
      >
        Start Quiz
      </button>
    </div>
  );
};

export default MainMenu;
