import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavButton from './NavButton';
import ThemeToggle from './ThemeToggle';
import '../styles/components.css';

const Header = ({ menuItems, isDarkMode, toggleTheme }) => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <h1 
        className="logo" 
        onClick={() => navigate('/')}
        style={{ cursor: 'pointer' }}
      >
        Singapore Pools
      </h1>
      <nav className="nav">
        {menuItems.map(({ id, name, link }) => (
          <NavButton 
            key={id} 
            onClick={() => navigate(link)}
          >
            {name}
          </NavButton>
        ))}
      </nav>
      <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
    </header>
  );
};

export default Header;