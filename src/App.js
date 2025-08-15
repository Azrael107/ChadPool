import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Carousel from './components/Carousel'; // Import the Carousel component
import { services } from './data/services';
import ServiceCard from './components/ServiceCard';
import './styles/main.css';
import './styles/theme.css';
import './styles/carousel.css'; // Make sure to import carousel styles

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check time for automatic dark mode
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
    <div className="container">
      <Header menuItems={menuItems} isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      <section className="hero">
        <h2 className="section-title">Premium Pool Services</h2>
        <p>Transform your backyard into a luxurious oasis with our expert pool design and maintenance services.</p>
        
        {/* Add Carousel component here */}
        <div className="carousel-container">
          <Carousel />
        </div>
      </section>

      <h2 className="section-title">Our Services</h2>
       <div className="card-grid">
          {services.map(service => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              variant="card" 
            />
    ))}
  </div>

      <Footer />
    </div>
  );
};

export default App;