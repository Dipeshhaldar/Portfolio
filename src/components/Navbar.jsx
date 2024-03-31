import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const closeSidebar = () => {
    setShowSidebar(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/" className="logo-link" onClick={closeSidebar}>
            <img src="/Logo.png" alt="Logo" />
          </Link>
        </div>
        <div className="navbar-items">
          {/* <NavLink
            to="/about"
            className="navbar-item"
            style={{
              borderBottom:
                location.pathname === "/about" ? "2px solid white" : "none",
            }}
            onClick={closeSidebar}
          > */}
            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              offset={-70} // Adjust this offset as needed
              duration={500}
              className="navbar-item"
              onClick={closeSidebar}
            >
              About
            </ScrollLink>
          {/* </NavLink> */}
          <NavLink
            to="/experience"
            className="navbar-item"
            style={{
              borderBottom:
                location.pathname === "/experience"
                  ? "2px solid white"
                  : "none",
            }}
            onClick={closeSidebar}
          >
            Experience
          </NavLink>
          <NavLink
            to="/projects"
            className="navbar-item"
            style={{
              borderBottom:
                location.pathname === "/projects" ? "2px solid white" : "none",
            }}
            onClick={closeSidebar}
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className="navbar-item"
            style={{
              borderBottom:
                location.pathname === "/contact" ? "2px solid white" : "none",
            }}
            onClick={closeSidebar}
          >
            Contact
          </NavLink>
        </div>
        <div className="navbar-icon" onClick={toggleSidebar}>
          {showSidebar ? <FaTimes /> : <FaBars />}
        </div>
      </div>
      {showSidebar && (
        <div className="sidebar">
          <div className="sidebar-items">
            {/* <NavLink
              to="/about"
              className="sidebar-item"
              onClick={closeSidebar}
            > */}
              <ScrollLink
                to="about"
                spy={true}
                smooth={true}
                offset={-70} // Adjust this offset as needed
                duration={500}
                className="navbar-item"
                onClick={closeSidebar}
              >
                About
              </ScrollLink>
            {/* </NavLink> */}
            <NavLink
              to="/experience"
              className="sidebar-item"
              onClick={closeSidebar}
            >
              Experience
            </NavLink>
            <NavLink
              to="/projects"
              className="sidebar-item"
              onClick={closeSidebar}
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              className="sidebar-item"
              onClick={closeSidebar}
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
