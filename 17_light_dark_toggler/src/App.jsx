import { useEffect, useState } from "react";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
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

  useEffect(() => {
    document.getElementsByTagName("body")[0].className = theme;
  }, [theme]);

  return (
    <ThemeProvider value={{ theme, setTheme, darkTheme, lightTheme }}>
      <div className="app">
        light/Dark Mode Toggle Button on any website using React.js by
        ThapaTechnical.
        <Header />
        <Body />
      </div>
    </ThemeProvider>
  );
}

export default App;
