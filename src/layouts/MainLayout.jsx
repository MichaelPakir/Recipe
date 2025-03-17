import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const MainLayout = ({ navLinks }) => {
  return (
    <div className="main-container">
      <aside className="sidebar">
        <Sidebar navLinks={navLinks} />
      </aside>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
