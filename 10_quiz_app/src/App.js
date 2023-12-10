import "./App.css";
import { useState } from "react";
import MainMenu from "./components/MainMenu";
import Header from "./components/Header";
import Quiz from "./components/Quiz";
import EndScreen from "./EndScreen";
import { QuizContext } from "./helpers/Context";

function App() {
  const [gameState, setGameState] = useState("menu");
  return (
    <div className="app">
      <Header />
      <QuizContext.Provider value={{ gameState, setGameState }}>
        {gameState === "menu" && <MainMenu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "endGame" && <EndScreen />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
