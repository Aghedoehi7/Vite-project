import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Refinery from '../components/Refinery/refinery';
import Award from '../components/Award/award';
import About from '../components/About/about';
import Services from '../components/Services/Services';
import Mandate from '../components/Mandate/mandate';
import Contact from '../components/Contact/Contact';

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isInitialLoad = React.useRef(true);

  useEffect(() => {
    // Handle hash-based navigation
    const handleHashNavigation = () => {
      const hash = window.location.hash;
      if (hash) {
        const elementId = hash.replace('#', '');
        const element = document.getElementById(elementId);
        
        if (element) {
          const headerOffset = 80; // Adjust this value based on your header height
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: isInitialLoad.current ? 'auto' : 'smooth'
          });
        }
      } else if (isInitialLoad.current) {
        // Only scroll to top on initial load if there's no hash
        window.scrollTo(0, 0);
      }
      
      if (isInitialLoad.current) {
        isInitialLoad.current = false;
      }
    };

    // Initial check
    handleHashNavigation();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashNavigation);

    return () => {
      window.removeEventListener('hashchange', handleHashNavigation);
    };
  }, []);

  // Handle scroll position when navigating between pages
  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
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
