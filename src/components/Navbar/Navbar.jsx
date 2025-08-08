import './Navbar.css';
import logo from '../../assets/logo.jpeg';
import menuicon from '../../assets/menuicon.png';
import { useEffect, useState } from 'react';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const[sticky, setsticky] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY >50 ? setsticky(true) : setsticky(false);
    })
  },[]);

  const[mobileMenu, setMobileMenu] =useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const handleNavClick = (to) => {
    // Close mobile menu when a link is clicked
    setMobileMenu(false);
    
    // If not on home page, navigate to home first, then scroll
    if (!isHomePage && to !== '/') {
      navigate('/', { state: { scrollTo: to } });
    }
  };
  return (
    <nav className={`navbar ${sticky ? 'navbar--dark' : ''}`}>
      <img src={logo} alt="Company Logo" className='navbar__logo' />
      
      {/* Desktop Navigation */}
      <ul className='navbar__list navbar__desktop-menu'>
        <li className='navbar__item'>
          {isHomePage ? (
            <ScrollLink 
              to='home' 
              smooth={true} 
              offset={-100} 
              duration={500} 
              onClick={() => handleNavClick('home')}
              className='navbar__link'
            >
              Home
            </ScrollLink>
          ) : (
            <RouterLink 
              to='/' 
              onClick={() => handleNavClick('home')}
              className='navbar__link'
            >
              Home
            </RouterLink>
          )}
        </li>
        <li className='navbar__item'>
          {isHomePage ? (
            <ScrollLink 
              to='about' 
              smooth={true} 
              offset={-80} 
              duration={500} 
              onClick={() => handleNavClick('about')}
              className='navbar__link'
            >
              About
            </ScrollLink>
          ) : (
            <RouterLink 
              to='/' 
              onClick={() => handleNavClick('about')}
              className='navbar__link'
            >
              About
            </RouterLink>
          )}
        </li>
        <li className='navbar__item'>
          {isHomePage ? (
            <ScrollLink 
              to='services' 
              smooth={true} 
              offset={-80} 
              duration={500} 
              onClick={() => handleNavClick('services')}
              className='navbar__link'
            >
              Services
            </ScrollLink>
          ) : (
            <RouterLink 
              to='/services' 
              onClick={() => handleNavClick('services')}
              className='navbar__link'
            >
              Services
            </RouterLink>
          )}
        </li>
        <li className='navbar__item'>
          {isHomePage ? (
            <ScrollLink 
              to='quality-assurance' 
              smooth={true} 
              offset={-80} 
              duration={500} 
              onClick={() => handleNavClick('quality-assurance')}
              className='navbar__link'
            >
              Quality Assurance
            </ScrollLink>
          ) : (
            <RouterLink 
              to='/' 
              onClick={() => handleNavClick('quality-assurance')}
              className='navbar__link'
            >
              Quality Assurance
            </RouterLink>
          )}
        </li>
        <li className='navbar__item'>
          {isHomePage ? (
            <ScrollLink 
              to='contact' 
              smooth={true} 
              offset={-80} 
              duration={500} 
              onClick={() => handleNavClick('contact')}
              className='navbar__link'
            >
              Contact us
            </ScrollLink>
          ) : (
            <RouterLink 
              to='/' 
              onClick={() => handleNavClick('contact')}
              className='navbar__link'
            >
              Contact us
            </RouterLink>
          )}
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <img 
        src={menuicon} 
        alt="Menu"  
        className='navbar__menu-button' 
        onClick={toggleMenu}
      />

      {/* Mobile Navigation */}
      <ul className={`navbar__mobile-menu ${mobileMenu ? 'navbar__mobile-menu--open' : ''}`}>
        <li className='navbar__mobile-item'>
          <RouterLink 
            to='/' 
            onClick={() => handleNavClick('home')}
            className='navbar__mobile-link'
          >
            Home
          </RouterLink>
        </li>
        <li className='navbar__mobile-item'>
          <RouterLink 
            to='/' 
            onClick={() => handleNavClick('about')}
            className='navbar__mobile-link'
          >
            About
          </RouterLink>
        </li>
        <li className='navbar__mobile-item'>
          <RouterLink 
            to='/services' 
            onClick={() => handleNavClick('services')}
            className='navbar__mobile-link'
          >
            Services
          </RouterLink>
        </li>
        <li className='navbar__mobile-item'>
          <RouterLink 
            to='/' 
            onClick={() => handleNavClick('quality-assurance')}
            className='navbar__mobile-link navbar__mobile-button'
          >
            Quality Assurance
          </RouterLink>
        </li>
        <li className='navbar__mobile-item'>
          <RouterLink 
            to='/' 
            onClick={() => handleNavClick('contact')}
            className='navbar__mobile-link navbar__mobile-button'
          >
            Contact us
          </RouterLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
