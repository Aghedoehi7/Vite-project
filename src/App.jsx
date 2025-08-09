import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/footer';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import QualityAssurancePage from './pages/QualityAssurancePage';
import ContactPage from './pages/ContactPage';

// Scroll to top on route change, but only for non-home routes
const ScrollToTop = () => {
  const { pathname } = useLocation();
  const isInitialLoad = React.useRef(true);

  useEffect(() => {
    // Don't scroll on initial load of home page
    if (isInitialLoad.current && pathname === '/') {
      isInitialLoad.current = false;
      return;
    }
    
    // For other routes or navigation, scroll to top
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <ScrollToTop />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/quality-assurance" element={<QualityAssurancePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App

