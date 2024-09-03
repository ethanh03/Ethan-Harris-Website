import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Background from './Components/Background/Background'
import Overview from './Components/Overview/Overview'
import Projects from './Components/Projects/Projects'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Background/>
      <div className="container">
        <Projects/>
        </div>
      <Overview/>

    </div>
  )
}

export default App