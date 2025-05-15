import React from "react";
import { Link, useParams } from "react-router-dom";
import Heart from "react-animated-heart";
import Sidebar from "./Sidebar";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const RecipePage = ({ foods, favorites, toggleFavorite }) => {
  const { id } = useParams();
  const food = foods.find((item) => item.id === parseInt(id));
  const isFav = favorites.some((item) => item.id === food.id);

  return (
    <section className="recipe__container">
      <div className="recipe-btn__container">
        <Link to="/menu" className="recipe__btn">
          Go Back
        </Link>
      </div>

      <div className="addToHeart" onClick={() => toggleFavorite(food)}>
        {isFav ? <FaHeart size={35} color="red" /> : <FaRegHeart size={35} />}
      </div>

      <div className="heading">
        <h1 className="recipe__title">{food.title}</h1>
      </div>

      <div className="mobileImage">
        <img src={food.image} alt={food.title} className="recipe__image" />
      </div>

      <p className="recipe__description">{food.description}</p>

      <div className="recipe__info">
        <h2>Ingredients:</h2>
        <ul>
          {food.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient.name}</li>
          ))}
        </ul>

        <h2>Directions:</h2>
        {food.directions.map((direction, index) => (
          <div key={index}>
            <h4 className="recipe__step">{direction.title}</h4>
            <p>{direction.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecipePage;
