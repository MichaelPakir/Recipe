import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import React from "react";
import { Link, useParams } from "react-router";
import "../styles/create/create.css";

const EditRecipe = ({ foods, fieldStyle }) => {
  const { id } = useParams();

  const recipe = foods.find((food) => food.id === parseInt(id));
  const selectedFood = foods.find((food) => food.id === parseInt(id));

  console.log(selectedFood.ingredients);
  return (
    <section className="editform__section">
      <Link to="/edit" className="recipe__btn">
        Go Back
      </Link>
      <div>
        <h1>Edit Recipe: {recipe.title}</h1>
      </div>

      <div className="form__container">
        <div className="form__content">
          <Stack>
            <div className="form__upper">
              <div className="form__category">
                <TextField
                  className="form-recipe__name"
                  sx={fieldStyle}
                  id="filled-hidden-label-small"
                  defaultValue={recipe.title}
                  variant="outlined"
                  label="Recipe Name"
                />

                <FormControl className="form-recipe__category">
                  <InputLabel id="recipe__select" className="recipe__select">
                    Category
                  </InputLabel>
                  <Select
                    sx={fieldStyle}
                    label="Category"
                    value={recipe.category}
                  >
                    <MenuItem value={"desserts"}>Desserts</MenuItem>
                    <MenuItem value={"main-course"}>Main Course</MenuItem>
                    <MenuItem value={"appetizers"}>Appetizers</MenuItem>
                    <MenuItem value={"beverages"}>Beverages</MenuItem>
                    <MenuItem value={"vegetarian"}>Vegetarian</MenuItem>
                  </Select>
                </FormControl>
              </div>

              <TextField
                id="outlined-multiline-static"
                label="Description"
                multiline
                rows={2}
                defaultValue={recipe.description}
              />

              <TextField
                sx={fieldStyle}
                id="filled-hidden-label-small"
                defaultValue={recipe.image}
                variant="outlined"
                label="Image URL"
              />
            </div>
            <h3>Ingredients</h3>
            <div className="form__lower">
              {selectedFood.ingredients.map((ingredient) => (
                <TextField
                  id="outlined-multiline-static"
                  multiline
                  rows={1}
                  defaultValue={ingredient.name}
                />
              ))}
            </div>

            <h3>Directions</h3>

            {selectedFood.directions.map((direction) => (
              <TextField
                id="outlined-multiline-static"
                label="Recipe Name"
                multiline
                rows={3}
                defaultValue={direction.name}
              />
            ))}
          </Stack>
        </div>
        <button>Save</button>
      </div>
    </section>
  );
};

export default EditRecipe;
