import React from 'react';
import { FiDroplet, FiLayout, FiTool } from 'react-icons/fi';
import PropTypes from 'prop-types';

const ServiceCard = ({ service }) => {
  const getIcon = () => {
    switch(service.iconType) {
      case 'droplet': return <FiDroplet className="icon" />;
      case 'tool': return <FiTool className="icon" />;
      default: return <FiLayout className="icon" />;
    }
  };

  return (
    <div className="service-card">
      <div className="text-content">
        <h3>{service.title}</h3>
        <p>{service.description}</p>
      </div>
      
      <div className="divider"></div>
      
      <div className="icon-container">
        {getIcon()}
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
