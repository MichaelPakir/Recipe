import React, { useState } from "react";
import "../styles/create/create.css";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box } from "@mui/material";

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

  const [ingredients, setIngredients] = useState({
    name: "",
  });

  const handleAddIngredientsChange = (e) => {
    setIngredients((prevState) => {
      return { ...prevState, name: e.target.value };
    });
  };

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

  const handleReciStepChange = (e) => {
    setRecipe((prevState) => {
      return { ...prevState, directions: e.target.value };
    });
  };

  const handleAddIngredientClick = (e) => {
    e.preventDefault();
    setIngredients((prevState) => {
      return { ...prevState, name: "" };
    });
  };

  return (
    <Box>
      <div className="recipe__bg">
        {JSON.stringify(recipe)} <br />
        {JSON.stringify(ingredients)}
        <h1>What's Cooking in Your Mind?</h1>
        <h3>Add a new recipe to your collection!</h3>
        <div className="form__container">
          <TextField
            id="outlined-basic"
            label="Recipe Name"
            variant="outlined"
            onChange={handleRecipeNameChange}
          />
          <FormControl className="recipe__form">
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={""}
              label="Age"
              onChange={handleReciCatChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>

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
                  value={ingredients.name}
                  onChange={handleAddIngredientsChange}
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
          </FormControl>
        </div>
      </div>
    </Box>
  );
};

export default Add;
