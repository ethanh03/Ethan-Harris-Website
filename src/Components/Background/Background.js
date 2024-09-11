import React from 'react'
import './Background.css'
import dark_arrow from '../../assets/dark_arrow.png'
import { Link, Element, animateScroll as scroll } from 'react-scroll';

const Background = () => {
  return (
    <div className='background-container'>
        <div className="background-text">
          <h1>Ethan Harris</h1>
          <p>This site is still under development! I will be updating it regularly :&#41;</p>
          <p>Contact me: ethan.harris3@utexas.edu</p>
          <Link to='about' smooth={true} offset={-100} duration={500}><button className='btn'>I want to know more<img src={dark_arrow} alt=''/></button></Link>
        </div>
    </div>
  )
}

export default Background