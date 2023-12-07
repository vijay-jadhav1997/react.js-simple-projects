import "./WeatherApp.css";
import CityWeather from "./components/CityWeather";

function WeatherApp() {
  return (
    <div className="">
      <h1>
        Weather App using <span>React</span>
      </h1>
      <CityWeather />
    </div>
  );
}

export default WeatherApp;
