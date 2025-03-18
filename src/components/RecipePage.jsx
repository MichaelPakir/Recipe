import React from "react";
import { Link, useParams } from "react-router-dom";

const RecipePage = () => {
  const { id } = useParams();

  const foods = [
    {
      id: 1,
      title: "Tomato Bomb",
      description: "A delicious tomato-filled dish.",
      image: "/popular-1.png",
    },
    {
      id: 2,
      title: "Nagasaki Mushroom",
      description: "Savory mushrooms from Nagasaki.",
      image: "/popular-2.png",
    },
    {
      id: 3,
      title: "Yamashita Pepperoni",
      description: "Spicy and flavorful pepperoni.",
      image: "/popular-3.png",
    },
    {
      id: 4,
      title: "Nazi Pizza",
      description: "Nazilicious Pizza",
      image: "/popular-1.png",
    },
    {
      id: 5,
      title: "Nazi Pizza",
      description: "Nazilicious Pizza",
      image: "/popular-2.png",
    },
  ];

  const food = foods.find((item) => item.id === parseInt(id));

  if (!food) {
    return <h2>Recipe not found!</h2>;
  }

  return (
    <section className="recipe__container">
      <Link to={"/menu"}>Go Back</Link>
      <img src={food.image} alt={food.title} className="recipe__image" />
      <h1 className="recipe__title">{food.title}</h1>
      <p className="recipe__description">{food.description}</p>
    </section>
  );
};

export default RecipePage;
