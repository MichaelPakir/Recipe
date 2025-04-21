import React, { useEffect, useState } from "react";
import "../styles/create/create.css";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box } from "@mui/material";
import { useParams } from "react-router";

const Add = ({ fieldStyle, setFoods, foods }) => {
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

  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    if (id && newRecipe) {
      setIsEditMode(true);
      setRecipe(newRecipe);
      setIngIdCounter(newRecipe.ingredients.length + 1);
      setDirIdCounter(newRecipe.directions.length + 1);
    }
  }, [id, newRecipe]);

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

  const handleUpdateRecipeClick = () => {
    setFoods((prevFoods) => {
      const updatedFoods = prevFoods.map((food) =>
        food.id === parseInt(id) ? { ...food, ...recipe } : food
      );
      console.log("Updated: ", updatedFoods);
      return updatedFoods;
    });
  };

  return (
    <Box>
      <div className="recipe__bg">
        <div className="headers">
          {isEditMode ? (
            <div>
              <h1>Edit Your Recipe: {recipe.title}</h1>
              <h3>Update your recipe details.</h3>
            </div>
          ) : (
            <div>
              <h1>What's Cooking in Your Mind?</h1>
              <h3>Add a new recipe to your collection!</h3>
            </div>
          )}
        </div>

        <div className="form__container">
          <TextField
            sx={fieldStyle}
            id="outlined-basic"
            label="Recipe Name"
            variant="outlined"
            onChange={handleRecipeNameChange}
            value={recipe.title}
          />

          <FormControl className="recipe__form">
            <InputLabel id="recipe__select" className="recipe__select">
              Category
            </InputLabel>

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

            <TextField
              sx={fieldStyle}
              id="outlined-basic"
              label="Description"
              variant="outlined"
              onChange={handleReciDescChange}
              value={recipe.description}
            />

            <TextField
              sx={fieldStyle}
              id="outlined-basic"
              label="Image URL"
              variant="outlined"
              onChange={handleReciUrlChange}
              value={recipe.image}
            />

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
              <ul>
                {recipe.ingredients.map((ingredient) => (
                  <li key={ingredient.id}>{ingredient.name}</li>
                ))}
              </ul>
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
                <ul>
                  {recipe.directions.map((direction) => (
                    <li key={direction.id}>{direction.name}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="recipe__save">
              {isEditMode ? (
                <button onClick={handleUpdateRecipeClick}>Update</button>
              ) : (
                <button onClick={handleSaveRecipeClick}>Save</button>
              )}
            </div>
          </FormControl>
        </div>
      </div>
    </Box>
  );
};

export default Add;
