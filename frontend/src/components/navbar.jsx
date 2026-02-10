import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Courses", to: "/courses" },
    { name: "Articles", to: "/articles" },
    { name: "About", to: "#about-footer" },   // scroll to footer About
    { name: "Contact", to: "#contact-footer" }, // scroll to footer Contact
  ];

  // Function to handle smooth scroll for footer sections
  const handleScroll = (to) => {
    if (to.startsWith("#")) {
      const section = document.querySelector(to);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    setIsOpen(false); // close mobile menu
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 navbar-blur">
      <div className="container">
        {/* Logo */}
        <Link to="/" className="logo">
          Dental<span></span>
        </Link>

        {/* Desktop Links */}
        <div className="links">
          {navLinks.map((link) =>
            link.to.startsWith("#") ? (
              <a
                key={link.name}
                href={link.to}
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll(link.to);
                }}
              >
                {link.name}
              </a>
            ) : (
              <Link key={link.name} to={link.to}>
                {link.name}
              </Link>
            )
          )}
        </div>

        {/* Phone */}
        <div className="phone">
          <Phone size={16} />
          <span>(123) 456-7890</span>
        </div>

        {/* Mobile Button */}
        <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) =>
            link.to.startsWith("#") ? (
              <a
                key={link.name}
                href={link.to}
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll(link.to);
                }}
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.to}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
