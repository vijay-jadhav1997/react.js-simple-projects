import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import ThemeBtn from "./components/ThemeBtn";
import { ThemeProvider } from "./contexts/themeContext";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  function darkTheme() {
    setThemeMode("dark");
  }
  function lightTheme() {
    setThemeMode("light");
  }

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme, setThemeMode }}>
      <div className="flex flex-wrap items-center min-h-screen">
        <div className="w-full">
          <Header />
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>
          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
