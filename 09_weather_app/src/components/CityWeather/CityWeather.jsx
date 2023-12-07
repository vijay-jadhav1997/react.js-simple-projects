import "./CityWeather.css";
import humidity from "../assets/humidity.png";
import windy from "../assets/windy.png";
import search from "../assets/search.png";
import sunrise from "../assets/sunrise.png";
import sunset from "../assets/sunset.png";
import temperature from "../assets/temperature.png";
import pressure from "../assets/pressure.png";
import location from "../assets/location.png";
import cloudy from "../assets/cloudy.png";
import { useState } from "react";
// import { useEffect } from "react";
const CityWeather = () => {
  const [cityWeather, setCityWeather] = useState({});
  const [cityUrl, setCityUrl] = useState(``);
  const [cityName, setCityName] = useState("Pune");

  // useEffect(() => {
  //   fetchCityData();
  // }, []);

  async function fetchCityData() {
    try {
      const cityData = await fetch(cityUrl);
      const jsonData = await cityData.json();
      setCityWeather(jsonData);
      console.log(cityData);
      console.log(cityWeather);
    } catch (error) {
      console.log(error);
    }
  }

  const searchCityWeather = () => {
    setCityUrl(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=Metric&appid=a73d68f9bcb2329ef697a7b1f304b10b`
    );
    fetchCityData();
  };
  // let api_key = "a73d68f9bcb2329ef697a7b1f304b10b";
  // let cityDataUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=a73d68f9bcb2329ef697a7b1f304b10b`;

  return (
    <div className="cityWeatherContainer">
      <div className="search_bar">
        <input
          type="text"
          name=""
          id=""
          value={cityName}
          onChange={(e) => {
            return setCityName(e.target.value);
          }}
          className="city_input"
          placeholder="Search..."
        />
        <div
          className="searchBtn"
          onClick={() => {
            searchCityWeather;
          }}
        >
          <img src={search} alt="" />
        </div>
      </div>
      <div className="cityWeather">
        <div className="weatherBox1">
          <div className="date_time"></div>
          <div className="temperatureBox">
            <img src={temperature} alt="" />
            <div className="temp">
              <p>25° C</p>
              <p>Feels like 23° C</p>
            </div>
          </div>
        </div>
        <div className="weatherBox2">
          <img src={cloudy} alt="" />
          <div className="cityName">
            <img src={location} alt="" /> Alandi (devachi)
          </div>
        </div>
        <div className="weatherBox3">
          <div className="sunrise">
            <img src={sunrise} alt="" />
            <p>sunrise</p>
          </div>
          <div className="sunset">
            <img src={sunset} alt="" />
            <p>sunset</p>
          </div>
          <div className="humidity">
            <img src={humidity} alt="" />
            <p>64% Humidity</p>
          </div>
          <div className="windSpeed">
            <img src={windy} alt="" />
            <p>18 km/h Wind Speed</p>
          </div>
          <div className="pressure">
            <img src={pressure} alt="" />
            <p>1011 mb</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityWeather;
