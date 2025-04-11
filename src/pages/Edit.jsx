import React from "react";
import Cards from "../components/Cards";
import { Outlet } from "react-router-dom";

const Edit = ({ foods }) => {
  return (
    <div>
      <h1>Edit Your Masterpiece</h1>
      <h3>Make changes to your recipe and perfect it to your taste!</h3>
      <div>
        <Cards foods={foods} />
        <Outlet />
      </div>
    </div>
  );
};

export default Edit;
