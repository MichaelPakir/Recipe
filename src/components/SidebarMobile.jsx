import React, { useState } from "react";
import { Divide as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";
import "../styles/sidebar/sidebar.css";
import { IoMenu } from "react-icons/io5";

const SidebarMobile = ({ navLinks }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sidebar--mobile">
      <div className="burger__icon">
        {/* <Hamburger
          className="hamburger-react"
          size={32}
          toggled={isOpen}
          toggle={setIsOpen}
          onClick={() => setCollapsed(!collapsed)}
        /> */}
        <IoMenu
          className="hamburger-react"
          size={32}
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>

      {isOpen && (
        <div className="mobile__overlay">
          <div className="mobile__content">
            <div className="mobile__logo"></div>
            <nav className="mobile__nav">
              {navLinks.map((link, index) => (
                <Link
                  to={link.path}
                  key={index}
                  onClick={() => setIsOpen(false)}
                  className="nav__container"
                >
                  <span className="nav__icon">{link.icon}</span>
                  <span className="nav__text">{link.label}</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default SidebarMobile;
