import React from 'react'
import {TbFriends} from 'react-icons/tb'
import {BiLike} from 'react-icons/bi'
import './aboutcontent.css'

const AboutContent = () => {
  return (
    <div className='aboutcontent'>
        <div className="container aboutcontent__container">
            <article>
                <div className='about__logo'>
                    <BiLike />
                </div>
                <h4>Within Budget</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Nesciunt aliquam culpa saepe at explicabo soluta laboriosam necessitatibus quo, hic alias.</p>
            </article>
            <article>
                <div className='about__logo'>
                    <TbFriends />
                </div>
                <h4>Within Budget</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Nesciunt aliquam culpa saepe at explicabo soluta laboriosam necessitatibus quo, hic alias.</p>
            </article>
            <article>
                <div className='about__logo'>
                    <BiLike />
                </div>
                <h4>Within Budget</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Nesciunt aliquam culpa saepe at explicabo soluta laboriosam necessitatibus quo, hic alias.</p>
            </article>
        </div>
    </div>
  )
}

export default AboutContent