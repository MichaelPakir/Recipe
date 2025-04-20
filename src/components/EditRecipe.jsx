import React from "react";
import { Link } from "react-router";
import "../styles/create/create.css";
import Add from "../pages/Add";

const EditRecipe = ({ foods }) => {
  return (
    <section className="editform__section">
      <Link to="/edit" className="recipe__btn">
        Go Back
      </Link>

      <div>
        <Add foods={foods} />
      </div>
    </section>
  );
};

export default EditRecipe;
