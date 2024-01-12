// import React from 'react'
import ReactLOGO from "../assets/react.svg";

function Navbar() {
  return (
    <div className="navbar">
      <p>
        ✨ Welcome, to learn Redux Toolkit with React...!{" "}
        <img src={ReactLOGO} style={{ width: "20px", height: "20px" }} alt="" />
      </p>
      <h1 className="heading">: ADMIN TABLE :</h1>
      <p>
        Redux Toolkit : A solution to manage global state and store data
        globally, to make it available to every required component of our react
        app. It is also used to avoid props drilling.
      </p>
      <div className="navbar-nav">
        <div>HOME</div>
        <div>ABOUT</div>
        <div>PROJECTS</div>
        <div>CODE</div>
        <div>CONTACT</div>
      </div>
    </div>
  );
}

export default Navbar;
