import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
      const offsetTop = section.offsetTop - 100;
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

  const downloadResume = () => {
    const resumeUrl = "/Dipesh Haldar Resume.pdf";
    window.open(resumeUrl, "_blank");
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
          <button
            className="navbar-item navbar-item__resume-button"
            onClick={downloadResume}
          >
            Resume
          </button>
        </div>
        <motion.div
          className="navbar-icon"
          onClick={toggleSidebar}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {showSidebar ? <FaTimes /> : <FaBars />}
        </motion.div>
      </div>
      <AnimatePresence>
        {showSidebar && (
          <>
            <motion.div
              className="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={closeSidebar}
            />
            <motion.div
              className="sidebar"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
            >
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
                <button
                id="sidebar-item__resume-button"
                  className="sidebar-item"
                  onClick={downloadResume}
                >
                  Resume
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
