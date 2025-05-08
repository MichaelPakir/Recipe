import React from "react";
import { Link } from "react-router-dom";
import "../styles/sidebar/sidebar.css";

const SidebarWeb = ({ navLinks }) => {
  return (
    <div className="sidebar sidebar--web">
      <nav className="sidebar__nav">
        <a href="/" className="sidebar__logo">
          {/* <img src="/logo.png" className="sidebar__logo-icon" /> */}
          <h2>LOGO</h2>
        </a>

        <div>
          {/* {navLinks.map((link, index) => (
            <Link key={index} to={link.path} className="nav__link">
              <span className="nav__text">{link.label}</span>
              <span>
                <img src={link.image} />
              </span>
            </Link>
          ))} */}

          {navLinks.map((link, index) => (
            <Link key={index} to={link.path} className="nav__link">
              <span className="nav__text">{link.label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default SidebarWeb;
