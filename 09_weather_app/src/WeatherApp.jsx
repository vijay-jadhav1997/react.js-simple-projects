import "./WeatherApp.css";
import CityWeather from "./components/CityWeather/CityWeather";

function WeatherApp() {
  return (
    <>
      <h1>
        Weather App using <span>React</span>
      </h1>
      <CityWeather />
    </>
  );
}

export default WeatherApp;
