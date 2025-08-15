import React from 'react';
import '../styles/components.css';

const NavButton = ({ children, onClick }) => {
  return (
    <button 
      className="nav-button"
      onClick={onClick}
      style={{
        background: 'var(--primary)',
        color: 'var(--button-text)',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '4px',
        fontWeight: '500',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        fontSize: '14px',
        textTransform: 'uppercase',
        letterSpacing: '1px'
      }}
    >
      {children}
    </button>
  );
};

export default NavButton;