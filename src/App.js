import React from 'react'
import Navbar from './Navbar/Navbar'
import Hero from './Herosection/Hero'
import Craosel from './Craosel/Craosel'
import Service from './Servicesection/Service'
import Experiance from './Experiancesection/Experiance'
import Project from './Projectsection/Project'
import Contact from './Contactsection/Contact'
import Footer from './Footer/Footer'

const App = () => {
  return (
   
    <>
    <Navbar/>
   <Hero/>
   <Craosel/>
   <Service/>
   <Experiance/>
   <Project/>
   <Contact/>
    <Footer/>
    
    </>
  )
}

export default App