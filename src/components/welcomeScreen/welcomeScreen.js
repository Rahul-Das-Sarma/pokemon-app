import React from "react";
import "./welcomeScreen.css";
import { Link } from "react-router-dom";

const WelcomeScreen = () => {
  return (
    <div className="welcome_container ">
      <img
        className="img_pikachu"
        src="https://freesvgplanet.com/wp-content/uploads/2019/10/pokemon-svg-free-30195.jpg"
        alt=""
      />

      <Link to="/home">
        <button className="btn btn-primary btn_margin"> Checkout </button>{" "}
      </Link>
    </div>
  );
};

export default WelcomeScreen;
