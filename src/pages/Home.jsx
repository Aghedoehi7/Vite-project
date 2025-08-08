import React from 'react'
import Refinery from '../components/Refinery/refinery'
import Award from '../components/Award/award'
import About from '../components/About/about'
import Services from '../components/Services/Services'
import Mandate from '../components/Mandate/Mandate'
import Contact from '../components/Contact/Contact'

const Home = () => {
  return (
    <div id="home">
      <section id="refinery">
        <Refinery/>
      </section>
      <section id="about" className='container'>
        <About/>
      </section>
      <section id="services" className='container'>
        <Services/>
      </section>
      <section id="quality-assurance" className='container'>
        <Mandate/>
      </section>
      <section id="contact" className='container'>
        <Contact/>
      </section>
      <div className='container'>
        <Award/> 
      </div>
    </div>
  )
}

export default Home
