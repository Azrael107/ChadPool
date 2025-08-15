import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Import fonts
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&family=Playfair+Display:wght@400;500;600&display=swap';
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);