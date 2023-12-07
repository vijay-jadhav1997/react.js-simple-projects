import "./CityWeather.css";
import humidity from "../assets/humidity.png";
import windy from "../assets/windy.png";
import search from "../assets/search.png";
import { useState } from "react";
const CityWeather = () => {
  const [cityweather, setCityWeather] = useState([]);
  // let api_key = "a73d68f9bcb2329ef697a7b1f304b10b";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=a73d68f9bcb2329ef697a7b1f304b10b`;
  return (
    <div className="cityWeatherContainer">
      <div className="search_bar">
        <input
          type="text"
          name=""
          id=""
          className="city_input"
          placeholder="Search..."
        />
        <img src={search} alt="" />
      </div>
      <div className="cityWeather">
        <div>
          <img src="" alt="" />
          <div className="temperature">24 deg C</div>
          <div className="cityName">Alandi (Devachi)</div>
        </div>
        <div>
          <div className="humidity">
            <img src={humidity} alt="" />
            <div>
              <div>64%</div>
              <div>Humidity</div>
            </div>
          </div>
          <div className="windSpeed">
            <img src={windy} alt="" />
            <div>
              <div>18 km/h</div>
              <div>Wind Speed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityWeather;
