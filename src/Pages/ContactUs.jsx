import React from 'react'
import Contact from '../component/Contact/Contact'
import Footer from '../component/Footer/Footer'
import GetInTouch from '../component/GetInTouch/GetInTouch'
import Header from '../component/Header/Header'
import PageLocator from '../component/PageLocator/PageLocator'

const ContactUs = () => {
  return (
    <div>
      <Header />
      <PageLocator />
      <Contact />
      <GetInTouch />
      <Footer />
      
    </div>
  )
}

export default ContactUs