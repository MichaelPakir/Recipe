import React from "react";
import { Link, useParams } from "react-router-dom";

const RecipePage = () => {
  const { id } = useParams();

  const foods = [
    {
      id: 1,
      title: "Tomato Bomb",
      category: "desserts",
      image: "/popular-1.png",
    },
    {
      id: 2,
      title: "Nagasaki Mushroom",
      category: "main-course",
      image: "/popular-2.png",
    },
    {
      id: 3,
      title: "Yamashita Pepperoni",
      category: "appetizers",
      image: "/popular-3.png",
    },
    {
      id: 4,
      title: "Nazi Pizza",
      category: "vegetarian",
      image: "/popular-2.png",
    },
    {
      id: 5,
      title: "Pizza de Cartel",
      category: "main-course",
      image: "/pizza.png",
    },
    {
      id: 6,
      title: "Yamashita Pepperoni",
      category: "beverages",
      image: "/popular-1.png",
    },
    {
      id: 6,
      title: "Yamashita Pepperoni",
      category: "appetizers",
      image: "/popular-1.png",
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
