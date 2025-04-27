import React, { useEffect, useState } from "react";
// import "../styles/create/create.css";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { Trash2, Delete, X } from "lucide-react";
import Sidebar from "../components/Sidebar";

const Add = ({ fieldStyle, setFoods, foods }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  const isEditMode = pathname.startsWith("/edit/recipe/");
  const id = isEditMode ? pathname.split("/").pop() : "";

  const newRecipe = isEditMode
    ? foods.find((food) => food.id === parseInt(id))
    : "";

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

  useEffect(() => {
    if (isEditMode && newRecipe) {
      setRecipe(newRecipe);
    }
  }, [isEditMode, newRecipe]);

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
    if (ingredients.trim() === "") return;

    const latestId = Math.max(0, ...recipe.ingredients.map((i) => i.id));
    const nextId = latestId + 1;

    setRecipe((prevState) => ({
      ...prevState,
      ingredients: [
        ...prevState.ingredients,
        {
          id: nextId,
          name: ingredients,
        },
      ],
    }));

    setIngredients("");
  };

  const handleDeleteIngredients = (ingredientToRemove) => {
    setRecipe((prev) => ({
      ...prev,
      ingredients: prev.ingredients.filter(
        (ingredient) => ingredient.id !== ingredientToRemove
      ),
    }));
  };

  const handleReciGuideChange = (e) => {
    setDirections(e.target.value);
  };

  const handleAddDirectionClick = (e) => {
    e.preventDefault();
    if (directions.trim() === "") return;

    const latestId = Math.max(0, ...recipe.directions.map((i) => i.id));
    const nextId = latestId + 1;

    setRecipe((prevState) => ({
      ...prevState,
      directions: [
        ...prevState.directions,
        {
          id: nextId,
          name: directions,
        },
      ],
    }));

    setDirections("");
  };

  const handleDeleteDirections = (directionToRemove) => {
    setRecipe((prev) => ({
      ...prev,
      directions: prev.directions.filter(
        (direction) => direction.id !== directionToRemove
      ),
    }));
  };

  const handleSaveRecipeClick = () => {
    setFoods((prevFoods) => {
      const updatedFoods = [
        ...prevFoods,
        { id: prevFoods.length + 1, ...recipe },
      ];
      console.log("Saved: ", updatedFoods);
      return updatedFoods;
    });
    setRecipe({
      title: "",
      category: "",
      description: "",
      image: "",
      ingredients: [],
      directions: [],
    });
    setIngredients("");
    setDirections("");

    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  const handleUpdateRecipeClick = () => {
    setFoods((prevFoods) => {
      const updatedFoods = prevFoods.map((food) =>
        food.id === parseInt(id) ? { ...food, ...recipe } : food
      );
      return updatedFoods;
    });

    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  return (
    <Box
      component="form"
      sx={{ "& .MuiTextField-root": { m: 1, width: "100%" } }}
      noValidate
      autoComplete="off"
    >
      <FormControl>
        <div className="form__section">
          <div className="form__wrapper">
            <div className="form__left">
              <img src="/cheff.webp" alt="Chef" className="form__image" />
            </div>

            <div className="form__right">
              <div className="form__header">
                {isEditMode ? (
                  <>
                    <h1>{recipe.title}</h1>
                    <p>Update your recipe details below</p>
                  </>
                ) : (
                  <>
                    <h1>What's Cooking in Your Mind?</h1>
                    <p>Add a new masterpiece to your collection!</p>
                  </>
                )}
              </div>

              <div className="form__fields">
                <TextField
                  label="Recipe Name"
                  size="small"
                  variant="outlined"
                  value={recipe.title}
                  onChange={handleRecipeNameChange}
                />

                <FormControl size="small" fullWidth>
                  <InputLabel>Category</InputLabel>
                  <Select
                    label="Category"
                    value={recipe.category}
                    onChange={handleReciCatChange}
                  >
                    <MenuItem value={"desserts"}>Desserts</MenuItem>
                    <MenuItem value={"main-course"}>Main Course</MenuItem>
                    <MenuItem value={"appetizers"}>Appetizers</MenuItem>
                    <MenuItem value={"beverages"}>Beverages</MenuItem>
                    <MenuItem value={"vegetarian"}>Vegetarian</MenuItem>
                  </Select>
                </FormControl>

                <TextField
                  label="Description"
                  size="small"
                  multiline
                  rows={4}
                  variant="outlined"
                  value={recipe.description}
                  onChange={handleReciDescChange}
                />
                <TextField
                  label="Image URL"
                  size="small"
                  variant="outlined"
                  value={recipe.image}
                  onChange={handleReciUrlChange}
                />

                <div className="section">
                  <h3>Ingredients</h3>
                  <div className="input-group">
                    <TextField
                      label="Ingredient"
                      size="small"
                      value={ingredients}
                      onChange={handleAddIngredientsChange}
                    />
                    <button
                      className="add-btn"
                      onClick={handleAddIngredientClick}
                    >
                      Add
                    </button>
                  </div>

                  <ul className="list">
                    {recipe.ingredients.map((ingredient) => (
                      <li key={ingredient.id}>
                        {ingredient.name}
                        <Trash2
                          className="deleteIcon"
                          onClick={() => handleDeleteIngredients(ingredient.id)}
                        />
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="section">
                  <h3>Directions</h3>
                  <div className="input-group">
                    <TextField
                      label="Direction"
                      size="small"
                      value={directions}
                      onChange={handleReciGuideChange}
                    />
                    <button
                      className="add-btn"
                      onClick={handleAddDirectionClick}
                    >
                      Add
                    </button>
                  </div>

                  <ul className="list">
                    {recipe.directions.map((direction) => (
                      <li key={direction.id}>
                        {direction.name}
                        <Trash2
                          className="deleteIcon"
                          onClick={() => handleDeleteDirections(direction.id)}
                        />
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="submit-btn">
                  {isEditMode ? (
                    <button onClick={handleUpdateRecipeClick}>
                      Update Recipe
                    </button>
                  ) : (
                    <button onClick={handleSaveRecipeClick}>Save Recipe</button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </FormControl>
    </Box>
  );
};

export default Add;
