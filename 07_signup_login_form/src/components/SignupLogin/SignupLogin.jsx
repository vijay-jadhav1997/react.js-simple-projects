import React, { useState } from "react";
import "./SignupLogin.css";
import user from "../Assets/user.png";
import email from "../Assets/email.png";
import padlock from "../Assets/padlock.png";
import eye from "../Assets/eye.png";
import hidden from "../Assets/hidden.png";

const SignupLogin = () => {
  const [action, setAction] = useState("sign up");
  const [pswdIcon, setPswdIcon] = useState(hidden);
  return (
    <div className="SignupLogin">
      <div className="header">
        <h1 className="title">{action}</h1>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={user} alt="" />
          <input type="text" placeholder="Name..." />
        </div>
        {action !== "sign up" ? (
          <div></div>
        ) : (
          <div className="input">
            <img src={email} alt="" />
            <input type="email" placeholder="Email Id..." />
          </div>
        )}
        <div className="input passwordBox">
          <img src={padlock} alt="" />
          <input
            type={pswdIcon === hidden ? "password" : "text"}
            placeholder="Password..."
          />
          <div
            className="hide-show-icon"
            onClick={() =>
              pswdIcon === hidden ? setPswdIcon(eye) : setPswdIcon(hidden)
            }
          >
            {pswdIcon === hidden ? (
              <img src={hidden} alt="" />
            ) : (
              <img src={eye} alt="" />
            )}
          </div>
        </div>
        {action === "sign up" ? (
          <div></div>
        ) : (
          <div className="forgotPswdBox">
            <p className="forgotPswd">
              Forgot password? <span>click here !</span>
            </p>
          </div>
        )}
      </div>

      <div className="submitBtns-Container">
        <button
          type="button"
          className={action === "sign up" ? "" : "gray"}
          onClick={() => setAction("sign up")}
        >
          sign up
        </button>
        <button
          type="button"
          className={action === "login" ? "" : "gray"}
          onClick={() => setAction("login")}
        >
          login
        </button>
      </div>
    </div>
  );
};

export default SignupLogin;
