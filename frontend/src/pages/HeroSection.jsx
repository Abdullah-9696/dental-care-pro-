import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        
        <h1>Advance Your Dental Career</h1>
        <p>Access world-class courses and resources designed by leading dental professionals.</p>
        <div className="hero-buttons">
          <Link to="/courses">
            <button className="btn-primary">Explore Courses ➔</button>
          </Link>
          <button className="btn-secondary">▶ Watch Demo</button>
        </div>
        <div className="hero-stats">
          <div>👨‍🎓 <strong>15K+</strong><span> Active Students</span></div>
          <div>📚 <strong>200+</strong><span> Expert Courses</span></div>
          <div>🏆 <strong>98%</strong><span> Success Rate</span></div>
        </div>
      </div>
      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          alt="Dental professional"
        />
      </div>
    </section>
  );
};

export default HeroSection;
