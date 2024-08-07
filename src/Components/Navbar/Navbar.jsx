import React from 'react'
import './Navbar.css'
import temp_logo from '../../assets/temp_logo.png'

const Navbar = () => {
  return (
    <nav>
        <img src={temp_logo} alt="" />
        <ul>
            <li>Home</li>
            <li>Overview</li>
            <li>Projects</li>
            <li>Education</li>
            <li>Experience</li>
            <li>Interests</li>
        </ul>
    </nav>
  )
}

export default Navbar