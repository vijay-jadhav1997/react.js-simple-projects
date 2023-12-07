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
    <div className="bg-sky-950 text-white pt-5 rounded-md ">
      <div className="search_bar bg-pink-500 flex justify-center">
        <input
          type="text"
          name=""
          value={cityName}
          onChange={(e) => {
            return setCityName(e.target.value);
          }}
          className=" outline-none rounded-full min-w-[40%] indent-5 text-lg"
          placeholder="Search..."
        />
        <button
          type="button"
          className="ml-5 px-3 py-3 rounded-full bg-white hover:bg-slate-200"
          onClick={() => {
            searchCityWeather;
          }}
        >
          <img src={search} alt="" className="w-5" />
        </button>
      </div>
      <div className="cityWeather mt-5 flex flex-col md:flex-row">
        <div className="weatherBox1 border">
          <div className="date_time">
            <div className="cityName">
              <img className="w-5 inline" src={location} alt="" />
              <span className="text-2xl">Alandi (devachi)</span>
            </div>
            <p className="text-gray-300 text-lg mt-10">September 15</p>
            <p>Monday</p>
          </div>
          <div className="temperatureBox">
            <img className="w-16" src={temperature} alt="" />
            <div className="temp">
              <p>25° C</p>
              <p>Feels like 23° C</p>
            </div>
          </div>
        </div>
        <div className="weatherBox2 border px-2 ">
          <img className="w-52" src={cloudy} alt="weather image" />
          <p className="text-lg mt-3 text-center py-2 font-semibold">Cloudy</p>
        </div>
        <div className="weatherBox3 border px-5 pt-10 pb-2">
          <div className="sunrise my-1 py-[2px] px-3">
            <img className="w-8 h-6 inline" src={sunrise} alt="" />
            <p className="inline-block ml-3 text-lg text-gray-300">
              sunrise 7:00
            </p>
          </div>
          <div className="sunset my-1 py-[2px] px-3">
            <img className="w-8 h-6 inline" src={sunset} alt="" />
            <p className="inline-block ml-3 text-lg text-gray-300">
              sunset 18:33
            </p>
          </div>
          <div className="humidity my-1 py-[2px] px-3">
            <img className="w-8 h-6 inline" src={humidity} alt="" />
            <p className="inline-block ml-3 text-lg text-gray-300">
              64% Humidity
            </p>
          </div>
          <div className="windSpeed my-1 py-[2px] px-3">
            <img className="w-8 h-6 inline" src={windy} alt="" />
            <p className="inline-block ml-3 text-lg text-gray-300">
              18 km/h Wind Speed
            </p>
          </div>
          <div className="pressure my-1 py-[2px] px-3">
            <img className="w-8 h-6 inline" src={pressure} alt="" />
            <p className="inline-block ml-3 text-lg text-gray-300">
              1011 mb pressure
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityWeather;
