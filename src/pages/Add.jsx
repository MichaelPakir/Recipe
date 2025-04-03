import React, { useState } from "react";
import "../styles/create/create.css";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box } from "@mui/material";
import "../styles/add/add.css";

const Add = ({ fieldStyle }) => {
  const [idCounter, setIdCounter] = useState(1);
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
        name: "",
      },
    ],
  });

  const [ingredients, setIngredients] = useState({
    name: "",
  });

  const handleAddIngredientsChange = (e) => {
    const newIngredientName = e.target.value;

    setIngredients({ name: newIngredientName });

    setRecipe((prevState) => ({
      ...prevState,
      ingredients: prevState.ingredients.map((ingredient, index) =>
        index === 0 ? { ...ingredient, name: newIngredientName } : ingredient
      ),
    }));
  };

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

  const handleReciGuideChange = (e) => {
    setRecipe((prevState) => {
      return { ...prevState, directions: e.target.value };
    });
  };

  const handleAddIngredientClick = (e) => {
    e.preventDefault();

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

    setIdCounter((prev) => prev + 1);
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
