import React from "react";
import { Link } from "react-router-dom";
import "../styles/sidebar/sidebar.css";
import { FaChevronCircleRight } from "react-icons/fa";

const Sidebar = ({ navLinks }) => {
  return (
    <div className="l-navbar" id="navbar">
      <nav className="nav">
        <div>
          <a href="#" className="nav__logo" aria-label="Recipe Logo">
            <img src="/vite.svg" alt="Recipe Logo" className="nav__logo-icon" />
            <span className="nav__logo-text">Recipe</span>
          </a>

          <button
            className="nav__toggle"
            id="nav-toggle"
            aria-label="Toggle Sidebar"
          >
            <FaChevronCircleRight />
          </button>

          <ul className="nav__list">
            {navLinks.map((link, index) => (
              <li className="nav__item" key={index}>
                <Link to={link.path} className="nav__link">
                  <span className="nav__icon">{link.icon}</span>
                  <span className="nav__text">{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link to="/logout" className="nav__link" aria-label="Close Sidebar">
          <i className="bx bx-log-out-circle nav__icon"></i>
          <span className="nav__text">Close</span>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
