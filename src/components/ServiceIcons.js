// src/components/ServiceIcons.js
import React from 'react';
import ServiceCard from './ServiceCard';
import { services } from '../data/services';
import '../styles/services.css';

const ServiceIcons = ({ variant = 'default' }) => {
  return (
    <div className={`services-grid ${variant}`}>
      {services.map((service) => (
        <ServiceCard 
          key={service.id}
          service={service}
          variant={variant}
        />
      ))}
    </div>
  );
};

export default ServiceIcons;