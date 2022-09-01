import React from 'react'
import AboutBlog from '../component/AboutBlog/AboutBlog'
import AboutContent from '../component/AboutBlog/AboutContent'
import Footer from '../component/Footer/Footer'
import GetInTouch from '../component/GetInTouch/GetInTouch'
import Header from '../component/Header/Header'
import OurTeam from '../component/OurTeam/OurTeam'
import PageLocator from '../component/PageLocator/PageLocator'

const AboutUs = () => {
  return (
    <div>
        <Header />
        <PageLocator />
        <AboutBlog />
        <AboutContent />
        <OurTeam />
        <GetInTouch />
        <Footer />
    </div>
  )
}

export default AboutUs