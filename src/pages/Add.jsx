import React, { useState } from "react";
import "../styles/create/create.css";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box } from "@mui/material";
import { useParams } from "react-router";

const Add = ({
  fieldStyle,
  setFoods,
  foods,
  showSaveButton = true,
  showHeader = true,
  showEditName = false,
  showUpdateButton = false,
  showRecipeNameField = true,
  showRecipeCategory = true,
  showRecipeDescription = true,
  showRecipeImage = true,
  showRecipeIngredient = true,
  showRecipeDirection = true,
  showNewRecipeNameField = false,
  showNewRecipeCategory = false,
  showNewRecipeDescription = false,
  showNewRecipeImage = false,
  showNewRecipeIngredient = false,
  showNewRecipeDirection = false,
}) => {
  const { id } = useParams();
  const newRecipe = foods.find((food) => food.id === parseInt(id));
  const [ingIdCounter, setIngIdCounter] = useState(1);
  const [dirIdCounter, setDirIdCounter] = useState(1);
  const [recipe, setRecipe] = useState({
    title: "",
    category: "",
    description: "",
    image: "",
    ingredients: [],
    directions: [],
  });

  const [ingredients, setIngredients] = useState("");
  const [directions, setDirections] = useState("");

  const handleRecipeNameChange = (e) => {
    setRecipe((prevState) => ({
      ...prevState,
      title: e.target.value,
    }));
  };

  const handleReciCatChange = (e) => {
    setRecipe((prevState) => ({
      ...prevState,
      category: e.target.value,
    }));
  };

  const handleReciDescChange = (e) => {
    setRecipe((prevState) => ({
      ...prevState,
      description: e.target.value,
    }));
  };

  const handleReciUrlChange = (e) => {
    setRecipe((prevState) => ({
      ...prevState,
      image: e.target.value,
    }));
  };

  const handleAddIngredientsChange = (e) => {
    setIngredients(e.target.value);
  };

  const handleAddIngredientClick = (e) => {
    e.preventDefault();
    if (ingredients === "") return;
    setRecipe((prevState) => ({
      ...prevState,
      ingredients: [
        ...prevState.ingredients,
        {
          id: ingIdCounter,
          name: ingredients,
        },
      ],
    }));
    setIngIdCounter((prev) => prev + 1);
    setIngredients("");
  };

  const handleReciGuideChange = (e) => {
    setDirections(e.target.value);
  };

  const handleAddDirectionClick = (e) => {
    e.preventDefault();
    if (directions === "") return;
    setRecipe((prevState) => ({
      ...prevState,
      directions: [
        ...prevState.directions,
        {
          id: dirIdCounter,
          name: directions,
        },
      ],
    }));
    setDirIdCounter((prev) => prev + 1);
    setDirections("");
  };

  const handleSaveRecipeClick = () => {
    setIngIdCounter(1);
    setDirIdCounter(1);

    setFoods((prevFoods) => {
      const updatedFoods = [
        ...prevFoods,
        { id: prevFoods.length + 1, ...recipe },
      ];
      console.log("Saved: ", updatedFoods);
      return updatedFoods;
    });
  };

  const handleUpdateRecipeClick = () => {};

  return (
    <Box>
      <div className="recipe__bg">
        {showHeader && (
          <div className="headers">
            <h1>What's Cooking in Your Mind?</h1>
            <h3>Add a new recipe to your collection!</h3>
          </div>
        )}

        {showEditName && <h1>Edit Recipe: {newRecipe.title}</h1>}

        <div className="form__container">
          {showRecipeNameField && (
            <TextField
              sx={fieldStyle}
              id="outlined-basic"
              label="Recipe Name"
              variant="outlined"
              onChange={handleRecipeNameChange}
              value={recipe.title}
            />
          )}

          {showNewRecipeNameField && (
            <TextField
              sx={fieldStyle}
              id="outlined-basic"
              label="Recipe Name"
              variant="outlined"
              onChange={handleRecipeNameChange}
              value={newRecipe.title}
            />
          )}

          <FormControl className="recipe__form">
            <InputLabel id="recipe__select" className="recipe__select">
              Category
            </InputLabel>
            {showRecipeCategory && (
              <Select
                sx={fieldStyle}
                label="Category"
                onChange={handleReciCatChange}
                value={recipe.category}
              >
                <MenuItem value={"desserts"}>Desserts</MenuItem>
                <MenuItem value={"main-course"}>Main Course</MenuItem>
                <MenuItem value={"appetizers"}>Appetizers</MenuItem>
                <MenuItem value={"beverages"}>Beverages</MenuItem>
                <MenuItem value={"vegetarian"}>Vegetarian</MenuItem>
              </Select>
            )}

            {showNewRecipeCategory && (
              <Select
                sx={fieldStyle}
                label="Category"
                onChange={handleReciCatChange}
                value={newRecipe.category}
              >
                <MenuItem value={"desserts"}>Desserts</MenuItem>
                <MenuItem value={"main-course"}>Main Course</MenuItem>
                <MenuItem value={"appetizers"}>Appetizers</MenuItem>
                <MenuItem value={"beverages"}>Beverages</MenuItem>
                <MenuItem value={"vegetarian"}>Vegetarian</MenuItem>
              </Select>
            )}

            {showRecipeDescription && (
              <TextField
                sx={fieldStyle}
                id="outlined-basic"
                label="Description"
                variant="outlined"
                onChange={handleReciDescChange}
                value={recipe.description}
              />
            )}

            {showNewRecipeDescription && (
              <TextField
                sx={fieldStyle}
                id="outlined-basic"
                label="Description"
                variant="outlined"
                onChange={handleReciDescChange}
                value={newRecipe.description}
              />
            )}

            {showRecipeImage && (
              <TextField
                sx={fieldStyle}
                id="outlined-basic"
                label="Image URL"
                variant="outlined"
                onChange={handleReciUrlChange}
                value={recipe.image}
              />
            )}

            {showNewRecipeImage && (
              <TextField
                sx={fieldStyle}
                id="outlined-basic"
                label="Image URL"
                variant="outlined"
                onChange={handleReciUrlChange}
                value={newRecipe.image}
              />
            )}

            <div>
              <h4 className="create__headers">Ingredients</h4>
              <TextField
                sx={fieldStyle}
                id="outlined-basic"
                label="Ingredient"
                variant="outlined"
                value={ingredients}
                onChange={handleAddIngredientsChange}
              />

              <button onClick={handleAddIngredientClick}>Add Ingredient</button>
            </div>
            <div className="freakingJson">
              {showRecipeIngredient && (
                <ul>
                  {recipe.ingredients.map((ingredient) => (
                    <li key={ingredient.id}>{ingredient.name}</li>
                  ))}
                </ul>
              )}

              {showNewRecipeIngredient && (
                <ul>
                  {newRecipe.ingredients.map((ingredient) => (
                    <li key={ingredient.id}>{ingredient.name}</li>
                  ))}
                </ul>
              )}
            </div>
            <div>
              <h4 className="create__headers">Directions</h4>
              <TextField
                sx={fieldStyle}
                id="outlined-basic"
                label="Direction"
                variant="outlined"
                value={directions}
                onChange={handleReciGuideChange}
              />

              <button onClick={handleAddDirectionClick}>Add Direction</button>
              <div className="freakingJson">
                {showRecipeDirection && (
                  <ul>
                    {newRecipe.directions.map((direction) => (
                      <li key={direction.id}>{direction.name}</li>
                    ))}
                  </ul>
                )}

                {showNewRecipeDirection && (
                  <ul>
                    {newRecipe.directions.map((direction) => (
                      <li key={direction.id}>{direction.name}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <div className="recipe__save">
              {showSaveButton && (
                <button onClick={handleSaveRecipeClick}>Save</button>
              )}

              {showUpdateButton && (
                <button onClick={handleUpdateRecipeClick}>Update</button>
              )}
            </div>
          </FormControl>
        </div>
      </div>
    </Box>
  );
};

export default Add;
