import React, { useState } from "react";
import "../styles/create/create.css";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box } from "@mui/material";

const Add = ({ fieldStyle }) => {
  const [idCounter, setIdCounter] = useState(1);
  const [recipe, setRecipe] = useState({
    title: "",
    category: "",
    description: "",
    image: "",
    ingredients: [],
    instructions: [],
  });

  const [ingredients, setIngredients] = useState({});
  const [instructions, setInstructions] = useState({});

  const handleRecipeNameChange = (e) => {
    setRecipe((prevState) => {
      return { ...prevState, title: e.target.value };
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

  const handleAddIngredientsChange = (e) => {
    const newIngredientName = e.target.value;

    setIngredients({ name: newIngredientName });
  };

  const handleAddIngredientClick = (e) => {
    e.preventDefault();
    setIdCounter((prev) => prev + 1);

    setRecipe((prevState) => ({
      ...prevState,
      ingredients: [
        ...prevState.ingredients,
        {
          id: idCounter,
          name: ingredients.name,
        },
      ],
    }));

    setIngredients({ name: "" });
  };

  const handleReciGuideChange = (e) => {
    const newInstructionName = e.target.value;

    setInstructions({ name: newInstructionName });
  };

  const handleAddInstructionClick = (e) => {
    e.preventDefault();
    setIdCounter((prev) => prev + 1);

    setRecipe((prevState) => ({
      ...prevState,
      instructions: [
        ...prevState.ingredients,
        {
          id: idCounter,
          name: instructions.name,
        },
      ],
    }));
  };

  return (
    <Box>
      <div className="recipe__bg">
        {JSON.stringify(recipe)} <br />
        {JSON.stringify(ingredients)}
        <h1>What's Cooking in Your Mind?</h1>
        <h3>Add a new recipe to your collection!</h3>
        <div className="form__container">
          <div>
            <TextField
              sx={fieldStyle}
              id="outlined-basic"
              label="Recipe Name"
              variant="outlined"
              onChange={handleRecipeNameChange}
            />
          </div>
          <FormControl className="recipe__form">
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              sx={fieldStyle}
              id="demo-simple-select"
              value={""}
              label="category"
              onChange={handleReciCatChange}
            >
              <MenuItem value={"desserts"}>Desserts</MenuItem>
              <MenuItem value={"main course"}>Main Course</MenuItem>
              <MenuItem value={"appetizers"}>Appetizers</MenuItem>
              <MenuItem value={"beverages"}>Beverages</MenuItem>
              <MenuItem value={"vegetarian"}>Vegetarian</MenuItem>
            </Select>

            <TextField
              sx={fieldStyle}
              id="outlined-basic"
              label="Description"
              variant="outlined"
              onChange={handleReciDescChange}
            />

            <TextField
              sx={fieldStyle}
              id="outlined-basic"
              label="Image URL"
              variant="outlined"
              onChange={handleReciUrlChange}
            />

            <div>
              <h4>Ingredients</h4>

              <TextField
                sx={fieldStyle}
                id="outlined-basic"
                label="Ingredient"
                variant="outlined"
                value={ingredients.name}
                onChange={handleAddIngredientsChange}
              />

              <button onClick={handleAddIngredientClick}>Add Ingredient</button>
            </div>

            <div>
              <h4>Directions</h4>

              <TextField
                sx={fieldStyle}
                id="outlined-basic"
                label="Direction"
                variant="outlined"
                onChange={handleReciGuideChange}
              />

              <button onClick={handleAddInstructionClick}>
                Add Instruction
              </button>
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
