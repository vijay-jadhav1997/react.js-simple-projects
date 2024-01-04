// import React from 'react'
import useTheme from "../contexts/themeContexts";
import student from "../assets/students.jpg";

function Body() {
  const { theme, darkTheme, lightTheme } = useTheme();
  function themeToggler() {
    theme === "light-theme" ? darkTheme() : lightTheme();

    // if (theme === "light-theme") {
    //   darkTheme();
    // } else {
    //   lightTheme();
    // }
  }

  return (
    <div className="body">
      <div className="content">
        <h2>React theme toggler</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          recusandae laudantium corrupti iste eligendi amet adipisci quibusdam
          explicabo harum minima!
        </p>
        <button onClick={themeToggler}>Toggle Mode</button>
      </div>
      <div className="dp">
        <img src={student} alt="students studying image" />
      </div>
    </div>
  );
}

export default Body;
