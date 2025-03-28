import React, { useState } from "react";
import "../styles/create/create.css";

const Add = () => {
  const [recipe, setRecipe] = useState({
    title: "",
    category: "",
    description: "",
    image: "",
    ingredients: [
      {
        name: "",
      },
    ],
    instructions: [
      {
        title: "",
        name: "",
      },
    ],
  });

  const handleRecipeNameChange = (e) => {
    setRecipe((prevState) => {
      return { ...prevState, title: e.target.value }; // Purposes
    });
  };

  const handleReciCatChange = (e) => {
    setRecipe((prevState) => {
      return { ...prevState, category: e.target.value };
    });
  };

  const handleReciDescChange = (e) => {
    setRecipe((prevState) => {
      return { ...prevState, description: e.target.value };
    });
  };

  const handleReciUrlChange = (e) => {
    setRecipe((prevState) => {
      return { ...prevState, image: e.target.value };
    });
  };

  const handleReciIngChange = (e) => {
    setRecipe((prevState) => {
      return { ...prevState, ingredients: e.target.value };
    });
  };

  const handleReciStepChange = (e) => {
    setRecipe((prevState) => {
      return { ...prevState, directions: e.target.value };
    });
  };

  const handleAddIngredientClick = (e) => {
    e.preventDefault();
    console.log("Testing Ingredient Click:");
  };

  return (
    <div className="recipe__bg">
      {JSON.stringify(recipe)}
      <h1>What's Cooking in Your Mind?</h1>
      <h3>Add a new recipe to your collection!</h3>

      <div className="form__container">
        <form className="recipe__form">
          <label>
            Recipe Name:
            <input
              type="text"
              name="recipe name"
              onChange={handleRecipeNameChange}
            />
          </label>

          <label>
            Select Category:
            <select onChange={handleReciCatChange}>
              <option>Desserts</option>
              <option>Main Course</option>
              <option>Appetizers</option>
              <option>Beverages</option>
              <option>Vegetarian</option>
            </select>
          </label>

          <label>
            Recipe Description:
            <textarea onChange={handleReciDescChange} />
          </label>

          <label>
            Image URL:
            <input type="text" onChange={handleReciUrlChange} />
          </label>

          <div>
            <h4>Ingredients</h4>
            <div>
              <input
                type="text"
                placeholder="Ingredient 1"
                onChange={handleReciIngChange}
              />
            </div>
            <button onClick={handleAddIngredientClick}>Add Ingredient</button>
          </div>

          <div>
            <h4>Directions</h4>
            <div>
              <label>
                <input
                  type="text"
                  placeholder="Step 1"
                  onChange={handleReciStepChange}
                />
                <input type="text" placeholder="Instruction" />
              </label>
            </div>
            <button>Add Instruction</button>
          </div>

          <div className="recipe__save">
            <button>Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add;
