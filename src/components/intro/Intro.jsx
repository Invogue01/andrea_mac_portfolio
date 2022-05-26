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
        <p className="i-description">
        Full-stack web developer leveraging customer service background to build a more intuitive user experience on the web. With experience in JavaScript, CSS, React.js, MERN and responsive web design. Known as an innovative problem solver passionate about developing apps, with a focus on mobile-first design and development. With each project, my aim is to best engage my audience for an impactful user experience. I applied aspects of UX and agile development in a recent project. I worked on a team of four to develop a single-page MERN app that helps cooking enthusiasts to find recipe's for random ingredients they find in their kitchen. This app uses two APIs and drives business to content creators on YouTube. I’m excited to leverage my skills as part of a quality-driven team to build better experiences on the web.
        </p>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="400" height="400"
viewBox="0 0 16 16"
className= "i-scroll"
style={{float: 'center'}}><path d="M 4.5 2 C 3.125 2 2 3.125 2 4.5 L 2 6 L 3 6 L 3 4.5 C 3 3.664063 3.664063 3 4.5 3 L 11.5 3 C 12.335938 3 13 3.664063 13 4.5 L 13 6 L 11 6 L 13.5 8.5 L 16 6 L 14 6 L 14 4.5 C 14 3.125 12.875 2 11.5 2 Z M 2.5 7.5 L 0 10 L 2 10 L 2 11.5 C 2 12.875 3.125 14 4.5 14 L 11.5 14 C 12.875 14 14 12.875 14 11.5 L 14 10 L 13 10 L 13 11.5 C 13 12.335938 12.335938 13 11.5 13 L 4.5 13 C 3.664063 13 3 12.335938 3 11.5 L 3 10 L 5 10 Z"></path></svg>
      </div>
    <div className="i-right">
      <div className="i-bg"></div>
      <img src={Me} alt="" className="i-img" />
    </div>
    </div>
  )
}

export default intro