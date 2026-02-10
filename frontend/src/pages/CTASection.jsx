import React from "react";
import { Link } from "react-router-dom";

const CTASection = () => {
  const benefits = [
    "Access to 200+ professional courses",
    "Certificates recognized worldwide",
    "Learn from practicing experts",
    "Flexible learning schedule",
  ];

  return (
    <section className="cta">
      <div className="cta-content">
        <h2>Ready to Elevate Your Dental Practice?</h2>
        <p>Join thousands of dental professionals advancing their careers with our platform.</p>
        <ul>
          {benefits.map((b, i) => (
            <li key={i}>✅ {b}</li>
          ))}
        </ul>
        <div className="cta-buttons">
          <Link to="/courses">
            <button className="btn-primary">Start Learning Today ➔</button>
          </Link>
          <Link to="/courses">
            <button className="btn-secondary">Browse Courses</button>
          </Link>
        </div>
      </div>
      <div className="cta-image">
        <img
          src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          alt="Dental learning"
        />
      </div>
    </section>
  );
};

export default CTASection;
