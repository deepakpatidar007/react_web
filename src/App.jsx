import React from 'react'
import ContactUs from './Pages/ContactUs'
import AboutUs from './Pages/AboutUs'
import Home from './Pages/Home'
import {Routes,Route,Navigate} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigate to='home'/>} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<AboutUs/>} />
        <Route path='/contact' element={<ContactUs />} />
      </Routes>
    </div>
  )
}

export default App