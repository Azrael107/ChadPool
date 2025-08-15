// src/components/ServiceCard.js
import React from 'react';
import { FiDroplet, FiLayout, FiTool } from 'react-icons/fi';
import PropTypes from 'prop-types';

// Define icon components directly (no string mapping needed)
const ServiceCard = ({ service, variant = 'default' }) => {
  // Select icon based on service.type or other property
  const getIcon = () => {
    switch(service.iconType) { // Assuming you add iconType to service objects
      case 'droplet': return <FiDroplet className="service-icon" />;
      case 'tool': return <FiTool className="service-icon" />;
      default: return <FiLayout className="service-icon" />;
    }
  };

  return (
      <div className="service-card">
      <div className="icon-outline" style={{ background: service.gradient }}>
        <div className="icon-container">
          {getIcon()}
        </div>
      </div>
      <div className="service-content">
        <h3>{service.title}</h3>
        <p>{service.description}</p>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    gradient: PropTypes.string,
    waterEffect: PropTypes.bool,
    iconType: PropTypes.oneOf(['layout', 'tool', 'droplet']).isRequired
  }).isRequired,
  variant: PropTypes.oneOf(['default', 'minimal', 'featured'])
};

export default ServiceCard;