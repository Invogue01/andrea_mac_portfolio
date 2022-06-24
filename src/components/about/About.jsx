import React from "react";
import "./about.css";
import Coding from "../../images/coding.png";
import Award from "../../images/award.png";
const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card ">
          <img src={Coding} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">Long established fact that the reader</p>
        <p className="a-desc">Something very very long text more and more</p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Coding award</h4>
            <p className="a-award-description">
              Some random text about some random award
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
