// import React from "react";
import { useTheme } from "../contexts";

function ThemeToggler() {
  const { themeMode, toggleDarkTheme } = useTheme();
  return (
    <div className="border absolute top-1 right-[5%]   flex items-center rounded-md py-3 px-10 w-[280px] dark:text-white">
      {" "}
      <span className="font-medium mr-1">Dark theme</span>:
      <div
        onClick={toggleDarkTheme}
        className="toggleBtn mx-3 cursor-pointer bg-slate-400 dark:bg-green-400 relative w-[60px] h-[30px] rounded-full border"
      >
        <div className="toggler absolute top-0.5 bg-gray-100 dark:bg-white left-1 dark:left-7 h-6 w-6 rounded-full border"></div>
      </div>
      {themeMode !== "light-theme" ? "🌙" : "🌞"}
    </div>
  );
}

export default ThemeToggler;
