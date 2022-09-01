import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <div className='contact'>
      <div className="container contact__container">
        <form>
          <div className='contact__info'>
            <input type='text' placeholder='Firstname' />
            <input type='text' placeholder='Lastname' />
            <input type='mail' placeholder='Your Email' />
            <input type='text' placeholder='Website' />
          </div>
          <input type='message' placeholder='your text' />
        </form>
        <button className='btn'>Send</button>
      </div>
    </div>
  )
}

export default Contact