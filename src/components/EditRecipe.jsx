import { Stack, TextField } from "@mui/material";
import React from "react";
import { Link, useParams } from "react-router";

const EditRecipe = ({ foods }) => {
  const { id } = useParams();

  const recipe = foods.find((food) => food.id === parseInt(id));
  const selectedFood = foods.find((food) => food.id === parseInt(id));

  console.log(selectedFood.ingredients);
  return (
    <section>
      <Link to="/edit" className="recipe__btn">
        Go Back
      </Link>
      <div>
        <h1>Edit Recipe: {recipe.title}</h1>
      </div>

      <Stack>
        <TextField
          hiddenLabel
          id="filled-hidden-label-small"
          defaultValue={recipe.title}
          variant="filled"
          size="small"
        />
        <TextField
          hiddenLabel
          id="filled-hidden-label-small"
          defaultValue={recipe.category}
          variant="filled"
          size="small"
        />
        <TextField
          hiddenLabel
          id="filled-hidden-label-small"
          defaultValue={recipe.description}
          variant="filled"
          size="small"
        />
        <TextField
          hiddenLabel
          id="filled-hidden-label-small"
          defaultValue={recipe.image}
          variant="filled"
          size="small"
        />

        <h3>Ingredients</h3>
        {selectedFood.ingredients.map((ingredient) => (
          <TextField
            hiddenLabel
            id="filled-hidden-label-small"
            defaultValue={ingredient.name}
            variant="filled"
            size="small"
          />
        ))}

        <h3>Directions</h3>

        {selectedFood.directions.map((direction) => (
          <TextField
            hiddenLabel
            id="filled-hidden-label-small"
            defaultValue={direction.name}
            variant="filled"
            size="small"
          />
        ))}
      </Stack>
    </section>
  );
};

export default EditRecipe;
