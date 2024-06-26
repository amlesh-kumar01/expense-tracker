import React from 'react';
import './HeroSection.css'; // Import the CSS file

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to Our Website</h1>
        <p className="hero-description">Discover amazing features and benefits that will help you achieve great things.</p>
        <button className="hero-button">Get Started</button>
      </div>
      <div className="hero-image">
        <img src="your-image-path.jpg" alt="Hero" />
      </div>
    </section>
  );
};

export default HeroSection;
