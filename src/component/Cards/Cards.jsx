import React from 'react'
import {FaTrain} from 'react-icons/fa'
import './cards.css'

const Cards = () => {
  const cardContainer = {
    display:'grid',
    gridTemplateCloumn:'1fr 1fr 1fr',
    textAlign:'center',
    
  }
  const cardItem = {

  }
  return (
   <div className='main'>
    <div style={cardContainer} className='card__container'>
            <div style={cardItem} className='card__item'>
                <FaTrain className='card__icon'/>
                <h3>Lorem Ispum</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, beatae!</p>
            </div>
            <div style={cardItem} className='card__item'>
                <FaTrain className='card__icon'/>
                <h3>Lorem Ispum</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, beatae!</p>
            </div>
            <div style={cardItem} className='card__item'>
                <FaTrain className='card__icon'/>
                <h3>Lorem Ispum</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, beatae!</p>
            </div>
            <div style={cardItem} className='card__item'>
                <FaTrain className='card__icon'/>
                <h3>Lorem Ispum</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, beatae!</p>
            </div>
            <div style={cardItem} className='card__item'>
                <FaTrain className='card__icon'/>
                <h3>Lorem Ispum</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, beatae!</p>
            </div>
            <div style={cardItem} className='card__item'>
                <FaTrain className='card__icon'/>
                <h3>Lorem Ispum</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, beatae!</p>
            </div>

        </div>
   </div>
  )
}

export default Cards