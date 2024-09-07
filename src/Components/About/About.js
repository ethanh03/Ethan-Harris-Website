import React from 'react'
import './About.css'
import ethan_headshot from '../../assets/Ethan_Headshot.jpg'

const About = () => {
  return (
    <div className='about'>
      <div className='about-left'>
        <img src={ethan_headshot} alt='' className='about-img'/>
      </div>
      <div className='about-right'>
        <h2>About Me</h2>
        <p>I am a fourth-year student at the University of Texas at Austin, pursuing a degree in Management of Information Systems, a certificate in Elements of Computing, and a minor in Chinese. My academic experience and engagement with student organizations have helped to grow my interest in computer science, product development, and technological solutions.</p>
        <p>My whole life my philosopy has been to seek out environments that challenge me and allow me to grow. While looking for a work environment, I hope to find just that between the work I'm doing and the people that will be surrounding me.</p>
        <p>Outside my professional and academic life, I enjoy weightlifting, playing soccer, reading, learning about fashion, producing music, and playing video games such as Minecraft, COD Zombies, and Rocket League!</p>
      </div>
    </div>
  )
}

export default About