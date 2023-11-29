import "./App.css";
import RandomQuote from "./components/randomQuote/RandomQuote";
import Mauli from "./components/assets/A3.jpg";

function App() {
  return (
    <div className="App">
      <header>
        <img src={Mauli} alt="" />
        <h1>!! Jay Jay Ram Krushna Hari !!</h1>
      </header>
      <RandomQuote />
    </div>
  );
}

export default App;
