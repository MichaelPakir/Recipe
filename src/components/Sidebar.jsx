import React from "react";
import SidebarMobile from "./SidebarMobile";
import SidebarWeb from "./SidebarWeb";

const Sidebar = ({ navLinks }) => {
  return (
    <div className="sidebar__box">
      <SidebarWeb navLinks={navLinks} />
      <SidebarMobile navLinks={navLinks} />
    </div>
  );
};

export default Sidebar;
