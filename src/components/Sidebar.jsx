import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [navLinks] = useState([
    { label: "Menu", path: "/menu" },
    { label: "Edit", path: "/edit" },
    { label: "Fav", path: "/fav" },
    { label: "Add", path: "/add" },
  ]);

  return (
    <aside className="sidebar">
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
    </aside>
  );
};

export default Sidebar;
