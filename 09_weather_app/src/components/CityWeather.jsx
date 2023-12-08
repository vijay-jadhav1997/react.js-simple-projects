import humidity from "./assets/humidity.png";
import windy from "./assets/windy.png";
import search from "./assets/search.png";
import sunrise from "./assets/sunrise.png";
import sunset from "./assets/sunset.png";
import temperature from "./assets/temperature.png";
import pressure from "./assets/pressure.png";
import location from "./assets/location.png";
import cloudy from "./assets/cloudy.png";
import { useState } from "react";
import { useEffect } from "react";

const CityWeather = () => {
  const [cityWeather, setCityWeather] = useState({});
  const [cityUrl, setCityUrl] = useState("");
  const [cityName, setCityName] = useState("");

  useEffect(() => {
    fetchCityData();
  }, [cityUrl]);

  async function fetchCityData() {
    try {
      const cityData = await fetch(cityUrl);
      const jsonData = await cityData.json();
      setCityWeather(jsonData);
      // console.log(cityData);
    } catch (error) {
      console.log(error);
    }
  }

  const searchCityWeather = () => {
    let cityNameOk =
      cityName.split("")[0].toUpperCase() +
      cityName.substring(1, cityName.length).toLowerCase();
    // console.log(cityNameOk);
    setCityUrl(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityNameOk}&units=Metric&appid=a73d68f9bcb2329ef697a7b1f304b10b`
    );
    fetchCityData();
  };

  console.log(cityWeather);

  const { name, sys, weather, wind, main } = cityWeather;

  // let api_key = "a73d68f9bcb2329ef697a7b1f304b10b";
  // let cityDataUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=a73d68f9bcb2329ef697a7b1f304b10b`;

  return (
    <div className="bg-cyan-900 text-white rounded-lg mx-auto mt-10 md:w-max w-[420px] px-5 md:py-10 py-5">
      <div className="search_bar flex justify-center mx-auto w-[90%] max-w-2xl">
        <input
          type="text"
          name=""
          value={cityName}
          onChange={(e) => {
            return setCityName(e.target.value);
          }}
          className=" outline-none rounded-full w-full indent-5 text-lg text-cyan-950"
          placeholder="Search..."
        />
        <button
          type="button"
          className="ml-5 px-3 py-3 rounded-full bg-white hover:bg-slate-200"
          onClick={() => {
            searchCityWeather();
          }}
        >
          <img src={search} alt="" className="w-5" />
        </button>
      </div>
      <div className="cityWeather md:mt-10 mt-3 flex flex-col md:flex-row items-center">
        <div className="weatherBox1 pb-5 mb-2 flex flex-wrap justify-center md:block">
          <div className="cityName flex items-center gap-x-2">
            <img className="w-5 inline" src={location} alt="" />
            <span className="md:text-3xl text-2xl font-medium">{name}</span>
          </div>
          <div className="date_time ml-10 md:mt-10 mt-5 text-xl">
            <p className="text-gray-300">September 15</p>
            <p className="text-gray-300">Monday</p>
          </div>
          <div className="temperatureBox flex md:mt-10 mt-5">
            <img className="w-14 h-12" src={temperature} alt="" />
            <div className="temp ml-2">
              <p className="text-5xl font-semibold">
                {Math.round(main?.temp)}° C
              </p>
              <p className="text-gray-200 mt-2 text-lg font-medium">
                Feels like {Math.round(main?.feels_like)}° C
              </p>
            </div>
          </div>
        </div>
        <div className="weatherBox2 px-2">
          <img className="md:w-56 w-36" src={cloudy} alt="weather image" />
          <p className="text-lg mt-3 text-center py-2 font-semibold">Cloudy</p>
        </div>
        <div className="weatherBox3 px-2 md:py-5 pb-2 md:ml-8 md:flex-col flex  flex-wrap gap-x-8">
          <div className="sunrise my-1 py-1 px-1">
            <img className="w-8 h-6 inline" src={sunrise} alt="" />
            <p className="inline-block ml-3 text-lg text-gray-300">
              sunrise {sys?.sunrise}
            </p>
          </div>
          <div className="sunset my-1 py-[2px] px-1">
            <img className="w-8 h-6 inline" src={sunset} alt="" />
            <p className="inline-block ml-3 text-lg text-gray-300">
              sunset {sys?.sunset}
            </p>
          </div>
          <div className="humidity my-1 py-[2px] px-1">
            <img className="w-8 h-6 inline" src={humidity} alt="" />
            <p className="inline-block ml-3 text-lg text-gray-300">
              {main?.humidity}% Humidity
            </p>
          </div>
          <div className="windSpeed my-1 py-[2px] px-1">
            <img className="w-8 h-6 inline" src={windy} alt="" />
            <p className="inline-block ml-3 text-lg text-gray-300">
              {wind?.speed} km/h Wind
            </p>
          </div>
          <div className="pressure my-1 py-[2px] px-1">
            <img className="w-8 h-6 inline" src={pressure} alt="" />
            <p className="inline-block ml-3 text-lg text-gray-300">
              {main?.pressure} mb pressure
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityWeather;
