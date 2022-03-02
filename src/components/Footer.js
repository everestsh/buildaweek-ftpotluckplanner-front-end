import React from "react";
import './../CSS/Footer.css'
import ttamlogotopJpg from "./../images/ttamlogotop.jpeg";

const Footer = (props) => {
  return (
    <div className="footer">
      {/* <h2>Footer</h2> */}
      <div className="footer-border">
        <div className="footer-border-radius-left footer-bg"></div>
        <div className="footer-border-radius-right">
          <span>
            <img src={ttamlogotopJpg} alt="ttamlogotop" />
          </span>
          <br />
          <span href="https://www.takethemameal.com" target="_blank">
            Coordinate meals for friends and family in need with
            TakeThemAMeal.com
          </span>
        </div>
      </div>
      <div className="footer-bar">
        <span>find a meal</span>
        &nbsp;•&nbsp;
        <span>plan a meal</span>
        &nbsp;•&nbsp;
        <span>view a sample</span>
        &nbsp;•&nbsp;
        <span>group meal ideas</span>
        &nbsp;•&nbsp;
        <span>(in)frequently asked questions</span>
        &nbsp;•&nbsp;
        <span>our story</span>
        &nbsp;•&nbsp;
        <span>contact us</span>
        <br />
        <span>Copyright 2010-2021</span>
        &nbsp;•&nbsp;
        <span>privacy policy</span>
        &nbsp;•&nbsp;
        <span>terms of use</span>
      </div>

      <div></div>
    </div>
  );
};

export default Footer;
