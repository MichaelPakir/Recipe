import React from "react";
import { Link } from "react-router";
import "../styles/create/create.css";
import Add from "../pages/Add";

const EditRecipe = () => {
  return (
    <section className="editform__section">
      <Link to="/edit" className="recipe__btn">
        Go Back
      </Link>
      <div>
        <Add showSaveButton={false} showUpdateButton={true} />
      </div>
    </section>
  );
};

export default EditRecipe;
