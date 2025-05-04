import React, { useState } from "react";
import { Divide as Hamburger } from "hamburger-react";
import { Link } from "react-router";

const SidebarMobile = ({ navLinks }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sidebar--mobile">
      <div>
        <Hamburger Divide toggled={isOpen} toggle={setIsOpen} />
      </div>

      {isOpen && (
        <div className="mobile__overlay">
          <nav className="mobile__nav">
            {navLinks.map((link, index) => (
              <Link to={link.path} key={index} onClick={() => setIsOpen(false)}>
                <span className="nav__icon">{link.icon}</span>
                <span className="nav__text">{link.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
};

export default SidebarMobile;
