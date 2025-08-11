import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/footer';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import QualityAssurancePage from './pages/QualityAssurancePage';
import ContactPage from './pages/ContactPage';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  const isInitialLoad = React.useRef(true);

  useEffect(() => {
    // Remove the # from the URL for cleaner URLs (HashRouter will still work with it)
    if (window.location.hash.startsWith('#/')) {
      const cleanPath = window.location.hash.substring(1);
      if (window.history.replaceState) {
        window.history.replaceState(null, null, cleanPath);
      }
    }

    // Scroll to top on route change, but skip initial load
    if (!isInitialLoad.current) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      isInitialLoad.current = false;
    }
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

