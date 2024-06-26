import React from 'react';
import './HeroSection.css'; // Import the CSS file

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to BudgetBuddy</h1>
        <p className="hero-description">An Expense Tracker Website to track all you expenses.</p>
        <button className="hero-button">Get Started</button>
      </div>
      <div className="hero-image">
        <img src="/images/hero-section.jpg" alt="Hero" />
      </div>
    </section>
  );
};

export default HeroSection;
