import React from 'react'
import Carder from './Card'
import './projects.css'

const Projects = () => {
  return (
    <div className=' projects__container'>
        <h2>Recent Projects</h2>
        <div className='project__item'>
            <Carder />
            <Carder />
            <Carder />
        </div>
    </div>
  )
}

export default Projects