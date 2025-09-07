import React from 'react';
import { FiDroplet, FiLayout, FiTool } from 'react-icons/fi';
import PropTypes from 'prop-types';
import '../data/services';

const ServiceCard = ({ service }) => {
  const getIcon = () => {
    switch (service.iconType) {
      case 'droplet':
        return <FiDroplet className="icon droplet" />;
      case 'tool':
        return <FiTool className="icon tool" />;
      default:
        return <FiLayout className="icon layout" />;
    }
  };

  return (
    <div className="service-card">
      {/* Left: Text */}
      <div className="text-content">
        <h3>{service.title}</h3>
        <p>{service.description}</p>
      </div>

      {/* Middle: Divider (acts as vertical rule) */}
      <div className="divider"></div>

      {/* Right: Icon */}
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
    iconType: PropTypes.oneOf(['layout', 'tool', 'droplet']).isRequired
  }).isRequired
};

export default ServiceCard;
