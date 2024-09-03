import React from 'react'
import './Background.css'
import dark_arrow from '../assets/dark_arrow.png'

const Background = () => {
  return (
    <div className='background-container'>
        <div className="background-text">
          <h1>Ethan Harris</h1>
          <p>This site is still under development! I will be updating it regularly :&#41;</p>
          <p>Contact me: ethan.harris3@utexas.edu</p>
          <button className='btn'>I want to know more<img src={dark_arrow} alt=''/></button>
        </div>
    </div>
  )
}

export default Background