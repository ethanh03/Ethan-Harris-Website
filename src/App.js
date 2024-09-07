import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Background from './Components/Background/Background'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Title from './Components/Title/Title'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Background/>
      <div className="container">
        <Title title="In-Progress Projects" subTitle="What I've Been Working On"/>
        <Projects/>
        <About/>
        </div>

    </div>
  )
}

export default App