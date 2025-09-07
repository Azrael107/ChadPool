// src/pages/Home.js
import React from 'react';
import Carousel from '../components/Carousel';
import { services } from '../data/services';
import ServiceCard from '../components/ServiceCard';
import '../styles/carousel.css';

const Home = () => {
  return (
    <>
      <section className="hero">
        <h2 className="section-title">Premium Pool Services</h2>
        <p>Transform your backyard into a luxurious oasis with our expert pool design and maintenance services.</p>
        
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
    </>
  );
};

export default Home;