import "./App.css";
import CityWeather from "./components/CityWeather";

function App() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`;

  return (
    <div className="app">
      <h1>!! Jay Jay Ram Krushna Hari !!</h1>
      <CityWeather />
    </div>
  );
}

export default App;
