// src/components/Gallery.js
import React, { useState, useRef, useEffect } from 'react';
import '../styles/gallery.css';

const Gallery = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [arrowPosition, setArrowPosition] = useState('50%');
  const hoverTimeoutRef = useRef(null);
  const carouselRef = useRef(null);
  const progressRefs = useRef([]);
  
  const galleryPages = [
    {
      id: 'all',
      title: 'All Projects',
      items: Array(9).fill(0).map((_, i) => ({
        id: i + 1,
        src: '/images/placeholder/holder.webp',
        alt: `Pool Project ${i + 1}`,
        title: `Luxury Pool ${i + 1}`,
        location: 'Various Locations'
      }))
    },
    {
      id: 'design',
      title: 'Pool Designs',
      items: Array(6).fill(0).map((_, i) => ({
        id: i + 1,
        src: '/images/placeholder/holder.webp',
        alt: `Design Project ${i + 1}`,
        title: `Design Concept ${i + 1}`,
        location: 'Design Studio'
      }))
    },
    {
      id: 'construction', 
      title: 'Construction',
      items: Array(8).fill(0).map((_, i) => ({
        id: i + 1,
        src: '/images/placeholder/holder.webp',
        alt: `Construction Project ${i + 1}`,
        title: `Construction Phase ${i + 1}`,
        location: 'Project Site'
      }))
    }
  ];

  // Diamond ring animation control
  const startDiamondAnimation = (direction) => {
    const progressElement = progressRefs.current[direction];
    if (!progressElement) return;

    // Reset and prepare for animation
    progressElement.style.strokeDashoffset = '80';
    progressElement.style.opacity = '1';
    
    // Animate the diamond filling
    setTimeout(() => {
      progressElement.style.transition = 'stroke-dashoffset 1000ms linear';
      progressElement.style.strokeDashoffset = '0';
    }, 10);
  };

  const resetDiamondAnimation = (direction) => {
    const progressElement = progressRefs.current[direction];
    if (progressElement) {
      progressElement.style.transition = 'none';
      progressElement.style.strokeDashoffset = '80';
      progressElement.style.opacity = '0';
    }
  };

  const navigateWithDelay = (direction) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    
    // Start diamond animation
    startDiamondAnimation(direction);
    
    hoverTimeoutRef.current = setTimeout(() => {
      if (direction === 'next') {
        setCurrentPage((prev) => (prev + 1) % galleryPages.length);
      } else {
        setCurrentPage((prev) => (prev - 1 + galleryPages.length) % galleryPages.length);
      }
    }, 1000); // Increased from 400ms to 1000ms (1 second)
  };

  const cancelNavigation = (direction) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    resetDiamondAnimation(direction);
  };

  const immediateNavigate = (direction) => {
    cancelNavigation(direction);
    if (direction === 'next') {
      setCurrentPage((prev) => (prev + 1) % galleryPages.length);
    } else {
      setCurrentPage((prev) => (prev - 1 + galleryPages.length) % galleryPages.length);
    }
  };

  // Fixed mouse tracking
  const handleMouseMove = (e) => {
    if (!carouselRef.current) return;
    
    const rect = carouselRef.current.getBoundingClientRect();
    const y = e.clientY - rect.top;
    const percentage = (y / rect.height) * 100;
    
    if (y >= 0 && y <= rect.height) {
      setArrowPosition(`${Math.max(10, Math.min(90, percentage))}%`);
    }
  };

  const handleMouseLeave = () => {
    setArrowPosition('50%');
  };

  const currentGallery = galleryPages[currentPage];

  return (
    <section className="gallery-section">
      <div className="gallery-header">
        <h2 className="section-title">Our Pool Projects</h2>
        <p>Premium pool designs and completed projects</p>
      </div>

      <div 
        ref={carouselRef}
        className="gallery-carousel"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Left navigation arrow */}
        <div 
          className="nav-arrow left"
          style={{ top: arrowPosition }}
          onMouseEnter={() => navigateWithDelay('prev')}
          onMouseLeave={() => cancelNavigation('prev')}
          onClick={() => immediateNavigate('prev')}
        >
          <svg className="diamond-svg" viewBox="0 0 40 40">
            {/* Pulsating glow effect */}
            <path
              className="diamond-glow-edge"
              d="M10,20 L20,10 L30,20 L20,30 Z"
            />
            {/* Progress diamond */}
            <path
              ref={el => progressRefs.current['prev'] = el}
              className="diamond-progress-edge"
              d="M10,20 L20,10 L30,20 L20,30 Z"
              strokeDasharray="80 80"
              strokeDashoffset="80"
            />
          </svg>
          <div className="arrow-icon">‹</div>
        </div>
        
        {/* Current page content */}
        <div className="carousel-page">
          <div className="page-header">
            <h3>{currentGallery.title}</h3>
            <p>{currentGallery.items.length} projects</p>
          </div>
          
          <div className="projects-grid">
            {currentGallery.items.map((item) => (
              <div
                key={item.id}
                className="project-item"
                onClick={() => {
                  document.getElementById('project-placeholder').style.display = 'flex';
                }}
              >
                <img 
                  src={item.src} 
                  alt={item.alt}
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x300/0077B6/FFFFFF?text=Pool+Project';
                  }}
                />
                <div className="project-info">
                  <h4>{item.title}</h4>
                  <p>{item.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right navigation arrow */}
        <div 
          className="nav-arrow right"
          style={{ top: arrowPosition }}
          onMouseEnter={() => navigateWithDelay('next')}
          onMouseLeave={() => cancelNavigation('next')}
          onClick={() => immediateNavigate('next')}
        >
          <svg className="diamond-svg" viewBox="0 0 40 40">
            {/* Pulsating glow effect */}
            <path
              className="diamond-glow-edge"
              d="M10,20 L20,10 L30,20 L20,30 Z"
            />
            {/* Progress diamond */}
            <path
              ref={el => progressRefs.current['next'] = el}
              className="diamond-progress-edge"
              d="M10,20 L20,10 L30,20 L20,30 Z"
              strokeDasharray="80 80"
              strokeDashoffset="80"
            />
          </svg>
          <div className="arrow-icon">›</div>
        </div>
      </div>

      {/* Page indicators */}
      <div className="page-indicators">
        {galleryPages.map((_, index) => (
          <button
            key={index}
            className={`page-indicator ${index === currentPage ? 'active' : ''}`}
            onClick={() => setCurrentPage(index)}
            aria-label={`View ${galleryPages[index].title}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;