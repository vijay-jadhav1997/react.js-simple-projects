import { useEffect, useState } from "react";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import TogglerBtn from "./components/TogglerBtn";
import { ThemeProvider } from "./contexts/themeContexts";
// import useTheme from "./contexts/themeContexts";

function App() {
  const [theme, setTheme] = useState("light-theme");

  function darkTheme() {
    setTheme("dark-theme");
  }
  function lightTheme() {
    setTheme("light-theme");
  }
  function themeToggler() {
    theme === "light-theme" ? darkTheme() : lightTheme();
  }

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeProvider value={{ theme, darkTheme, lightTheme, themeToggler }}>
      <div className="app">
        <Header />
        <TogglerBtn />
        <Body />
        <Body />
        <Body />
      </div>
    </ThemeProvider>
  );
}

export default App;
