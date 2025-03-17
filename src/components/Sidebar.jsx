import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ navLinks }) => {
  return (
    <>
      <nav className="sidebar__nav">
        <a href="/" className="sidebar__logo">
          LOGO
        </a>

        <ul className="sidebar__nav-links">
          {navLinks.map((link, index) => (
            <li className="sidebar__nav-item" key={index}>
              <Link to={link.path}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
