import React from 'react'
import ContentSlider from './ContentSlider'
import './slider.css'

const Slider = () => { 
    const containerStyles = {
        width:'100%',
        height:'500px',
        backgroundColor:'rgb(56, 56, 56)'
    }
  return (
    <>
        <div style={containerStyles}>
            <ContentSlider />
        </div>
    </>
  )
}

export default Slider