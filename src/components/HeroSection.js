import React from 'react';
import './HeroSection.css'; // Import the CSS file
import { Link } from 'react-router-dom';

const HeroSection = () => {
  
  return (
    <section className="hero" id='hero-section'>
      <div className="hero-content">
        <h1 className="hero-title">Welcome to BudgetBuddy</h1>
        <p className="hero-description">An Expense Tracker Website to track all you expenses.</p>
        {/* <button className="hero-button">Let's Track</button> */}
        <Link to="/track" className="track-link">Let's Track</Link>
      </div>
      <div className="hero-image">
        <img src="/images/hero-section.jpg" alt="Hero" />
      </div>
    </section>
  );
};

export default HeroSection;
