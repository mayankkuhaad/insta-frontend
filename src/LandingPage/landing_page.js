import React from "react";
import { Link } from "react-router-dom";
import "../Styles/landingPage.css";

export default function Landingpage() {
  return (
    <div className="LandingPage">
      <div className="Img">
        <img src={require("../Images/Home.JPG")} alt="1" />
      </div>

      <div className="Title">
        <div className="title">
          <h1>10x Team04</h1>
        </div>
        <Link to="/postview">
          <div className="button">Enter</div>
        </Link>
      </div>
    </div>
  );
}
