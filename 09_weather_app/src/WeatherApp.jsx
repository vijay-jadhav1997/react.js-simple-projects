import "./WeatherApp.css";
import CityWeather from "./components/CityWeather";

function WeatherApp() {
  return (
    <div className="bg-blend-multiply bg-blue-950 w-screen h-[1000px] pt-10">
      <header className="bg-white text-cyan-600 text-3xl md:text-4xl font-bold w-max px-10 md:px-12 py-3 md:py-4 mx-auto mb-3 rounded-full">
        Weather App using{" "}
        <span className="underline underline-offset-4 decoration-wavy decoration-sky-700 text-pink-700 text-4xl md:text-5xl">
          React
        </span>
      </header>
      <CityWeather />
    </div>
  );
}

export default WeatherApp;
