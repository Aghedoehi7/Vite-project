import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Refinery from '../components/Refinery/refinery';
import Award from '../components/Award/award';
import About from '../components/About/about';
import Services from '../components/Services/Services';
import Mandate from '../components/Mandate/Mandate';
import Contact from '../components/Contact/Contact';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    // If there's a scroll target in the location state, scroll to it
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        const headerOffset = 80; // Adjust this value based on your header height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else {
      // Default behavior: scroll to top when the component mounts
      window.scrollTo(0, 0);
    }
  }, [location.state]);
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
