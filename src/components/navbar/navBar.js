import React from "react";
import "./navBar.css";
import { Link } from "react-router-dom";

const navBar = () => {
  return (
    <nav className="top_nav">
      <Link to="/home">
        {" "}
        <img
          className="nav_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
          alt=""
        />
      </Link>

      <ul>
        <Link to="/home/favorites" style={{ color: "black" }}>
          {" "}
          <li>Favourite Pokemon </li>{" "}
        </Link>
      </ul>
    </nav>
  );
};

export default navBar;
