import React from 'react';
import '../styles/components.css';

const ThemeToggle = ({ isDarkMode, toggleTheme }) => {
  return (
    <button 
      className="theme-toggle"
      onClick={toggleTheme}
      style={{
        background: 'var(--accent)',
        color: 'var(--text)',
        border: 'none',
        padding: '8px 15px',
        borderRadius: '20px',
        fontWeight: '500',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '5px'
      }}
    >
      {isDarkMode ? '☀️ Light' : '🌙 Dark'}
    </button>
  );
};

export default ThemeToggle;