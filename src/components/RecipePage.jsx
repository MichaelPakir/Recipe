import React from "react";
import { Link, useParams } from "react-router-dom";

const RecipePage = ({ foods }) => {
  const { id } = useParams();

  const food = foods.find((item) => item.id === parseInt(id));

  if (!food) {
    return <h2>Recipe not found!</h2>;
  }

  return (
    <section className="recipe__container">
      <Link to={"/"} className="recipe__btn">
        Go Back
      </Link>
      <h1 className="recipe__title">{food.title}</h1>
      <img src={food.image} alt={food.title} className="recipe__image" />
      <p className="recipe__description">{food.description}</p>

      <h2>Ingredients:</h2>
      {food.ingredients.map((ingredient) => (
        <p key={ingredient.id}>{ingredient.name}</p>
      ))}

      <h2>Directions:</h2>
      {food.directions.map((direction) => (
        <div key={direction.id}>
          <h4>{direction.title}</h4>
          <p>{direction.name}</p>
        </div>
      ))}
    </section>
  );
};

export default RecipePage;
