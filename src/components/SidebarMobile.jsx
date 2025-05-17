import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/sidebar/sidebar.css";
import { IoClose, IoMenu } from "react-icons/io5";

const SidebarMobile = ({ navLinks }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sidebar--mobile">
      <div className="burger__icon">
        {isOpen ? (
          <IoClose
            className="hamburger-react"
            size={32}
            onClick={() => setIsOpen(false)}
          />
        ) : (
          <IoMenu
            className="hamburger-react"
            size={32}
            onClick={() => setIsOpen(!isOpen)}
          />
        )}
      </div>

      {isOpen && (
        <div className="mobile__overlay">
          <div className="mobile__content">
            <div className="mobile__logo"></div>
            <nav className="mobile__nav">
              {navLinks.map((link, index) => (
                <Link to={link.path} key={index} className="nav__container">
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
