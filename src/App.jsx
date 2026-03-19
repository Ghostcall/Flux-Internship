import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Footer from './components/Footer/Footer'
import Services from './components/Services/Services'

const App = () => {
  return (

    <div className='app'>
      <Router>
          <Routes>
            <Route path="/#home" element={<Hero />} />
            <Route path="/#services" element={<Services />} />
          </Routes>
      </Router>
      
      
      
      
      <Navbar />
      <Hero />
      <Services />
      <Footer />
    </div>

  )
}

export default App
