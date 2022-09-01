import React from 'react'
import Header from '../component/Header/Header'
import Slider from '../component/Slider/Slider'
import Cards from '../component/Cards/Cards'
import Projects from '../component/Projects/Projects'
import Clients from '../component/Clients/Clients'
import Blog from '../component/Blog/Blog'
import GetInTouch from '../component/GetInTouch/GetInTouch'
import Footer from '../component/Footer/Footer'

const Home = () => {

  return (

    <div>
        <Header />
        <Slider />
        <Cards />
        <Projects />
        <Clients />
        <Blog />
        <GetInTouch />
        <Footer />
    </div>
  )
}

export default Home