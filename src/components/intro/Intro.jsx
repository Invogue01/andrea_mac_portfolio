import React from "react";
import "./Intro.css";
import Me from "../../images/me.png";
const intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Andrea Lea-Trengrouse</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Full Stack Web Developer</div>
              <div className="i-title-item">Gamer</div>
              <div className="i-title-item">Animal Lover</div>
            </div>
          </div>
          <p className="i-description">
            Full-stack web developer leveraging customer service background to
            build a more intuitive user experience on the web. With experience
            in JavaScript, CSS, HTM5, MERN and responsive web design.
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default intro;
