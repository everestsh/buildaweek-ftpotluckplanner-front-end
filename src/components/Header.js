import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Header.css";

import pplogotoptight from "../images/pplogotoptight.jpeg";
import facebookPng from "../images/facebook.png";
import pinterestPng from "../images/pinterest.png";
import rssPng from "../images/rss.png";
import emailPng from "../images/email.png";
import mapMonth from "../images/map-month.png";

const Header = () => {
  console.log("Header");
  return (
    <nav className="nav">
      <div className="nav-top">
        <div className="left-img">
          <span> <img src={pplogotoptight} alt="A woman with a barbell on her back" /> </span>
          <span className="facebook"> <img src={facebookPng} alt="facebook" /> </span>
          <span className="pinterest"> <img src={pinterestPng} alt="pinterest" /> </span>
          <span className="rss"> <img src={rssPng} alt="rss" /> </span>
          <span> <img src={emailPng} alt="email" /> </span>
        </div>
        <div className="right-img">
          <span>{" "}<img src={mapMonth} alt="A woman with a barbell on her back" />{" "} </span>
        </div>
      </div>
      <div className="nav-bar">
        <div className="left-links"> <Link className="link" to="/"> Home </Link> </div>
        <div className="right-links">
          <Link className="link" to="/signup"> Signup </Link>
          <Link className="link" to="/login"> Login </Link>
          <Link className="link" to="/logout"> Logout </Link>
          <Link className="link" to="/recipes"> Recipes</Link>
          <Link className="link" to="/guest">  Guest </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
