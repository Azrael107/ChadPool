import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';
import './styles/main.css';
import './styles/theme.css';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const hour = new Date().getHours();
    const autoDarkMode = hour < 6 || hour >= 18;
    setIsDarkMode(autoDarkMode);
    document.documentElement.setAttribute('data-theme', autoDarkMode ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.setAttribute('data-theme', newMode ? 'dark' : 'light');
  };

  const menuItems = [
    { id: 1, name: 'Home', link: '/' },
    { id: 2, name: 'Services', link: '/services' },
    { id: 3, name: 'Gallery', link: '/gallery' },
    { id: 4, name: 'About', link: '/about' },
    { id: 5, name: 'Contact', link: '/contact' },
  ];

  return (
    <Router>
      <div className="container">
        {/* Header stays fixed - outside of Routes */}
        <Header menuItems={menuItems} isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        
        {/* Main content area changes with routes */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        {/* Footer stays fixed - outside of Routes */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;