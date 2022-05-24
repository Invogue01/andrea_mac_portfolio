import React from 'react'
import "./Intro.css"
import Me from "../../images/me.png"
const intro = () => {
  return (
    <div className="i">
    <div className="i-left">
      <div className="i-left-wrapper">
        <h2 className="i-intro">Hello, My name is</h2>
        <h1 className="i-name">Andrea Mac</h1>
        <div className="i-title">
          <div className="i-title-wrapper">
            <div className="i-title-item">Full Stack Web Developer</div>
            <div className="i-title-item">Gamer</div>
            <div className="i-title-item">Animal Lover</div>
          </div>
        </div>
        <div className="i-description">
        Full-stack web developer leveraging customer service background to build a more intuitive user experience on the web. With experience in JavaScript, CSS, React.js, MERN and responsive web design. Known as an innovative problem solver passionate about developing apps, with a focus on mobile-first design and development. With each project, my aim is to best engage my audience for an impactful user experience. I applied aspects of UX and agile development in a recent project. I worked on a team of four to develop a single-page MERN app that helps cooking enthusiasts to find recipe's for random ingredients they find in their kitchen. This app uses two APIs and drives business to content creators on YouTube. I’m excited to leverage my skills as part of a quality-driven team to build better experiences on the web.
        </div>
      </div>
      </div>
    <div className="i-right">
      <img src={Me} alt="" className="i" />
    </div>
    </div>
  )
}

export default intro