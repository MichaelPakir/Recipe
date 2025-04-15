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
        <Add
          showSaveButton={false}
          showHeader={false}
          showEditName={true}
          showUpdateButton={true}
          showRecipeNameField={false}
          showRecipeCategory={false}
          showRecipeDescription={false}
          showRecipeImage={false}
          showRecipeIngredient={false}
          showRecipeDirection={false}
          showNewRecipeNameField={true}
          showNewRecipeCategory={true}
          showNewRecipeDescription={true}
          showNewRecipeImage={true}
          showNewRecipeIngredient={true}
          showNewRecipeDirection={true}
          foods={foods}
        />
      </div>
    </section>
  );
};

export default EditRecipe;
