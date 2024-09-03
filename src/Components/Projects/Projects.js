import React from 'react'
import './Projects.css'
import games from '../../assets/games.jpg'
import minecraft_mods from '../../assets/minecraft_mods.png'
import zombies_maps from '../../assets/zombies_map.jpg'

const Projects = () => {
  return (
    <div className="projects">
        <div className="project">
            <img src={games} alt=''/>
            <div className="caption">
                <p>GAMES</p>
            </div>
        </div>
        <div className="project">
            <img src={minecraft_mods} alt=''/>
            <div className="caption">
                <p>MINECRAFT MODS</p>
            </div>
        </div>
        <div className="project">
            <img src={zombies_maps} alt=''/>
            <div className="caption">            
                <p>ZOMBIES MAPS</p>
            </div>
        </div>
    </div>
    )
}

export default Projects