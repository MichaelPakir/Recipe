import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/sidebar/sidebar.css";
import { IoMenu } from "react-icons/io5";
import Hamburger from "hamburger-react";

const SidebarWeb = ({ navLinks }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`sidebar sidebar--web ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar__top">
        <button
          className="burger__toggle"
          onClick={() => setCollapsed(!collapsed)}
        >
          <Hamburger className="burger_react__blue" size={24} />
          {/* <IoMenu className="burger_react__blue" size={24} />  */}
        </button>
        {!collapsed && <h2 className="sidebar__logo">LOGO</h2>}
      </div>

      <nav className="sidebar__nav">
        {navLinks.map((link, index) => (
          <Link key={index} to={link.path} className="nav__link">
            <span className="nav__icon">{link.icon}</span>
            {!collapsed && <span className="nav__text">{link.label}</span>}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default SidebarWeb;
