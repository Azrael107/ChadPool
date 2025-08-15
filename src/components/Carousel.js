import React, { useState, useEffect } from 'react';
import poolImages from '../assets/images/pool-images'; // Verify path
import '../styles/carousel.css';

const Carousel = () => { // Remove {images} prop since we're importing directly
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitionDirection, setTransitionDirection] = useState('next');

  const goToSlide = (index, direction) => {
    setTransitionDirection(direction);
    setCurrentIndex(index);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      goToSlide((currentIndex + 1) % poolImages.length, 'next');
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  useEffect(() => {
  console.log('Pool Images:', poolImages);
  poolImages.forEach(img => {
    const testImg = new Image();
    testImg.src = img.src;
    testImg.onload = () => console.log(`Loaded: ${img.src}`);
    testImg.onerror = () => console.error(`Failed: ${img.src}`);
  });
}, []);

  return (
    <div className="carousel">
      <div className="slides-container">
        {poolImages.map((img, index) => (
          <div 
            key={img.id} // Use unique ID instead of index
            className={`slide ${index === currentIndex ? 'active' : ''} ${transitionDirection}`}
            style={{ 
              backgroundImage: `url(${img.src})`,
              zIndex: index === currentIndex ? 1 : 0
            }}
          >
            <div className="slide-content">
              <h3>{img.title}</h3>
              <p>{img.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="carousel-controls">
        <button onClick={() => goToSlide((currentIndex - 1 + poolImages.length) % poolImages.length, 'prev')}>
          &lt;
        </button>
        <button onClick={() => goToSlide((currentIndex + 1) % poolImages.length, 'next')}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;