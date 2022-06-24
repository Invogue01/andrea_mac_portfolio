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
        <p className="a-sub">
          I am passionate about building apps, with a focus on mobile-first
          design and development. With each project, my aim is to best engage my
          audience for an impactful user experience. I applied aspects of UX and
          agile development in a recent project. I worked on a team of four to
          develop a single-page MERN app that helps cooking enthusiasts to find
          recipe's for random ingredients they find in their kitchen. This app
          uses two APIs and drives business to content creators on YouTube. I’m
          excited to leverage my skills as part of a quality-driven team to
          build better experiences on the web.
        </p>

        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Student of the Year</h4>
            <p className="a-award-description">
              A representative award from University Birmingham Coding Bootcamp{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
