import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

const RecipePage = () => {
  const { id } = useParams();
  const [foods] = useState([
    {
      id: 1,
      title: "Spaghetti and Meatballs",
      category: "main-course",
      image:
        "https://cookingmatters.org/wp-content/uploads/2021/11/Cooking-Matters-Recipe-SpghttiMtballs.png",
    },
    {
      id: 2,
      title: "Fruit Smoothies",
      category: "beverages",
      image:
        "https://cookingmatters.org/wp-content/uploads/2021/11/Cooking-Matters-Recipe-FruitSmoothie.png",
    },
    {
      id: 3,
      title: "Spinach Salad with Eggs",
      category: "vegetarian",
      image:
        "https://cookingmatters.org/wp-content/uploads/2021/11/Cooking-Matters-Recipe-SpinachSalad.png",
    },
    {
      id: 4,
      title: "Squash and Orzo",
      category: "appetizers",
      image:
        "https://cookingmatters.org/wp-content/uploads/2021/11/Cooking-Matters-Recipe-SquashOrzo.png",
    },
    {
      id: 5,
      title: "Italian Stuffed Peppers",
      category: "desserts",
      image:
        "https://cookingmatters.org/wp-content/uploads/2021/11/Cooking-Matters-Recipe-StffPeppers.png",
    },
    {
      id: 6,
      title: "Tabbouleh",
      category: "appetizers",
      image:
        "https://cookingmatters.org/wp-content/uploads/2021/11/Cooking-Matters-Recipe-Tabbouleh.png",
    },
    {
      id: 7,
      title: "Herb Roasted Chicken with Vegetables",
      category: "main-course",
      image:
        "https://cookingmatters.org/wp-content/uploads/2021/11/Cooking-Matters-Recipe-HerbRstdChic.png",
    },
  ]);

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
