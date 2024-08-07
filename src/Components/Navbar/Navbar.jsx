import React from 'react'
import './Navbar.css'
import ethan_harris_name from '../../assets/ethan_harris_name.png'

const Navbar = () => {
  return (
    <nav className='container'>
        <img src={ethan_harris_name} alt="" className='ethan_harris_name' />
        <ul>
            <li>Home</li>
            <li>Overview</li>
            <li>Projects</li>
            <li>Education</li>
            <li>Experience</li>
            <li>Interests</li>
            <li><button className='btn'>Contact Me</button></li>
        </ul>
    </nav>
  )
}

export default Navbar