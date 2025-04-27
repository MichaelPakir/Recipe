import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/sidebar/sidebar.css";

const Sidebar = ({ navLinks }) => {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (label) => {
    setActiveLink(label);
  };

  return (
    <div className="page__wrapper">
      <div className="sidebar">
        <nav className="sidebar__nav">
          <div>
            <a href="/" className="sidebar__logo">
              <img
                src="/logo.png"
                alt="Recipe Logo"
                className="sidebar__logo-icon"
              />
            </a>

            <div className="nav__container">
              {navLinks.map((link, index) => (
                <div className="nav__item" key={index}>
                  <Link
                    to={link.path}
                    className={`nav__link ${
                      activeLink === link.label ? "active__work" : ""
                    }`}
                    onClick={() => handleLinkClick(link.label)}
                  >
                    <span className="nav__icon">{link.icon}</span>
                    <span className="nav__text">{link.label}</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
