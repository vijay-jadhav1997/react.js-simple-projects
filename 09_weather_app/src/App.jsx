import "./App.css";
import CityWeather from "./components/CityWeather";

function App() {
  return (
    <div className="bg-[url('../public/images/weather-bg.jpg')] bg-no-repeat bg-cover w-full min-h-screen pt-10 pb-40">
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

export default App;
