import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {MdOutlineArrowBackIosNew} from 'react-icons/md'
import {MdOutlineArrowForwardIos} from 'react-icons/md'

function ContentSlider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className='carousel'>
      <Carousel.Item>
      
        <div className='slide__container'>
            <div className=''>
                <a href=''><MdOutlineArrowBackIosNew className='slide__icon'/></a>
            </div>
            <div className=''>
                <h2>We Care About Your Business</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className='__slide'>
                <a href=''><MdOutlineArrowForwardIos className='slide__icon'/></a>
            </div>
        </div>
        
      </Carousel.Item>
      <Carousel.Item>
      <div className='slide__container'>
            <div className=''>
                <a href=''><MdOutlineArrowBackIosNew className='slide__icon'/></a>
            </div>
            <div className=''>
                <h2>We Care About Your Business</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className='__slide'>
                <a href=''><MdOutlineArrowForwardIos className='slide__icon'/></a>
            </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className='slide__container'>
            <div className=''>
                <a href=''><MdOutlineArrowBackIosNew className='slide__icon'/></a>
            </div>
            <div className=''>
                <h2>We Care About Your Business</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className='__slide'>
                <a href=''><MdOutlineArrowForwardIos className='slide__icon'/></a>
            </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default ContentSlider