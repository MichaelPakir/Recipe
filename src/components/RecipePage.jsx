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
      <img src={food.image} alt={food.title} className="recipe__image" />
      <h1 className="recipe__title">{food.title}</h1>
      <p className="recipe__description">{food.description}</p>
    </section>
  );
};

export default RecipePage;
