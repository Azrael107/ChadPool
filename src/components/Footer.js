import React from 'react';
import '../styles/components.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Pool Elegance. All rights reserved.</p>
    </footer>
  );
};

export default Footer;