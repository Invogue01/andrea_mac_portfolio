import React from 'react'
import "./Intro.css"
const intro = () => {
  return (
    <div className="i">
    <div className="i-left">
      <div className="i-left-wrapper">
        <h2>Hello, My name is</h2>
        <h1 className="i-name">Andrea Mac</h1>
        <div className="i-title">
          <div className="i-title-wrapper">
            <div className="i-title-item">Full Stack Web Developer</div>
            <div className="i-title-item">Gamer</div>
            <div className="i-title-item">Animal Lover</div>
          </div>
        </div>
      </div>
      </div>
    <div className="i-right">right side</div>
    </div>
  )
}

export default intro