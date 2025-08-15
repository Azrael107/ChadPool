import React from 'react';
import NavButton from './NavButton';
import ThemeToggle from './ThemeToggle';
import '../styles/components.css';

const Header = ({ menuItems, isDarkMode, toggleTheme }) => {
  return (
    <header className="header">
      <h1 className="logo">Pool Elegance</h1>
      <nav className="nav">
        {menuItems.map(({ id, name, link }) => (
          <NavButton key={id} onClick={() => console.log(`Navigating to ${link}`)}>
            {name}
          </NavButton>
        ))}
      </nav>
      <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
    </header>
  );
};

export default Header;