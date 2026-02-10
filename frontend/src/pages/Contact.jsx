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

      {/* Footer Styles */}
      <style jsx>{`
        .footer {
          background: #111;
          color: #ddd;
          padding: 60px 20px;
          text-align: center;
          width: 100%;
        }

        .footer-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          gap: 40px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .footer h3 {
          font-size: 1.6rem;
          margin-bottom: 10px;
          color: #FFD700;
        }

        .footer p {
          margin: 5px 0;
        }

        /* Responsive for mobile */
        @media (max-width: 768px) {
          .footer-container {
            flex-direction: column;
            gap: 30px;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
