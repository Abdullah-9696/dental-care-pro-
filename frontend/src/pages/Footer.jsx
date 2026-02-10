import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div id="about-footer">
          <h3>About Us</h3>
          <p>
            DentalCare Pro is your trusted source for dental education and
            resources. We provide courses, articles, and tips for professionals
            and students.
          </p>
        </div>

        {/* Contact Section */}
        <div id="contact-footer">
          <h3>Contact Us</h3>
          <p>Email: contact@dentalcarepro.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Address: 123 Dental Street, City</p>
        </div>

        {/* Copyright */}
        <div>
          <p>© {new Date().getFullYear()} DentalCare Pro. All rights reserved.</p>
        </div>
      </div>

   
    </footer>
  );
};

export default Footer;
