// Navbar.jsx
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const closeSidebar = () => {
    setShowSidebar(false);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop - 100; // Adjust this value as needed
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
      navigate(`#${sectionId}`);
    }
    closeSidebar();
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/" className="logo-link" onClick={scrollToTop}>
            <img src="/Logo.png" alt="Logo" />
          </Link>
        </div>
        <div className="navbar-items">
          <button
            className="navbar-item"
            onClick={() => scrollToSection("about")}
          >
            About
          </button>
          <button
            className="navbar-item"
            onClick={() => scrollToSection("experience")}
          >
            Experience
          </button>
          <button
            className="navbar-item"
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </button>
          <button
            className="navbar-item"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </button>
        </div>
        <div className="navbar-icon" onClick={toggleSidebar}>
          {showSidebar ? <FaTimes /> : <FaBars />}
        </div>
      </div>
      {showSidebar && (
        <div className="sidebar">
          <div className="sidebar-items">
            <button
              className="sidebar-item"
              onClick={() => scrollToSection("about")}
            >
              About
            </button>
            <button
              className="sidebar-item"
              onClick={() => scrollToSection("experience")}
            >
              Experience
            </button>
            <button
              className="sidebar-item"
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </button>
            <button
              className="sidebar-item"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
