import React from "react";
import { Link } from "react-router-dom"; // Note: make sure this matches Sidebar
import "../styles/create/create.css";
import Add from "../pages/Add";
import Sidebar from "./Sidebar";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const EditRecipe = ({ foods, setFoods, navLinks }) => {
  return (
    <div className="editpage__container edit">
      <Sidebar navLinks={navLinks} />
      <section className="editform__section eform">
        <div className="edit__container">
          <Add foods={foods} setFoods={setFoods} />
        </div>
      </section>
    </div>
  );
};

export default EditRecipe;
