import React from 'react'
import './header.css'
import { Paper } from '@mui/material'
import {FiFacebook} from 'react-icons/fi'
import {AiOutlineTwitter} from 'react-icons/ai'
import {TiSocialLinkedin} from 'react-icons/ti'
import {BiStopwatch} from 'react-icons/bi'
import {ImPhone} from 'react-icons/im'
import {GoMail} from 'react-icons/go'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <Paper elevation={3} >
            <div className="container paper__container">
                <div className="social__icons">
                    <FiFacebook />
                    <AiOutlineTwitter />
                    <TiSocialLinkedin />
                </div>
                <div className='contact__icons'>
                    <div className='contact__icon'>
                        <BiStopwatch className='__icon'/>
                        <p>9:17 mon</p>
                    </div>
                    <div className='contact__icon'>
                        <ImPhone className='__icon'/> 
                        <p>9649881614</p>
                    </div>
                    <div className='contact__icon'>
                        <GoMail className='__icon'/>
                        <p>deepsdk007@gmail.com</p>
                    </div>
                </div>
            </div>
        </Paper>
        <div className="container header__container">
            <div className="header__left">
                    <h1>MASTIA</h1>
                    <h5>TEMPLATE</h5>
            </div>
            <div className="header__right">
            <Link className='link' to="/home">
                Home
            </Link>
            <Link className='link' to="../about">
                About Us
            </Link>
            <Link className='link' to="../contact">
                Contact Us
            </Link>
            <Link className='link' to="../home">
                Pages
            </Link>
            <Link className='link' to="../home">
                Projects
            </Link>
            <Link className='link' to="../home">
                Blog
            </Link>
                
            </div>
        </div>
    </header>
  )
}

export default Header