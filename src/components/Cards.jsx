import React, { useState } from "react";
import { Link } from "react-router-dom";

const Cards = () => {
  const [filter, setFilter] = useState("all");

  const [foods] = useState([
    {
      id: 1,
      title: "Sinigang",
      description: "Sinigang is a sour soup native to the Philippines.",
      category: "main-course",
      image:
        "https://fiarecipes.com/wp-content/uploads/2024/12/sinigang-recipe%E2%80%8Bs.webp",
    },
    {
      id: 2,
      title: "Filipino Macaroni Salad",
      description:
        "When we say macaroni salad, what’s the first thing that comes to your mind?",
      category: "beverages",
      image:
        "https://yummykitchentv.com/wp-content/uploads/2022/04/chicken-macaroni-salad-recipe.jpg",
    },
    {
      id: 3,
      title: "Pancit",
      category: "vegetarian",
      description:
        "Pancit is a popular Filipino dish made from noodles, vegetables, and various proteins like chicken, pork, or shrimp.",
      image:
        "https://panlasangpinoy.com/wp-content/uploads/2024/11/Filipino-Pancit-Recipe-1024x681.jpg",
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

  const handleFilterChange = (category) => {
    setFilter(category);
  };

  const filteredFoods = foods.filter(
    (food) => filter === "all" || food.category === filter
  );

  return (
    <section>
      <div className="">
        <span
          className={`food__item ${filter === "all" ? "active__work" : ""}`}
          onClick={() => handleFilterChange("all")}
        >
          All
        </span>
        <span
          className={`food__item ${
            filter === "desserts" ? "active__work" : ""
          }`}
          onClick={() => handleFilterChange("desserts")}
        >
          Desserts
        </span>
        <span
          className={`food__item ${
            filter === "main-course" ? "active__work" : ""
          }`}
          onClick={() => handleFilterChange("main-course")}
        >
          Main Course
        </span>
        <span
          className={`food__item ${
            filter === "appetizers" ? "active__work" : ""
          }`}
          onClick={() => handleFilterChange("appetizers")}
        >
          Appetizers
        </span>
        <span
          className={`food__item ${
            filter === "beverages" ? "active__work" : ""
          }`}
          onClick={() => handleFilterChange("beverages")}
        >
          Beverages
        </span>
        <span
          className={`food__item ${
            filter === "vegetarian" ? "active__work" : ""
          }`}
          onClick={() => handleFilterChange("vegetarian")}
        >
          Vegetarian
        </span>
      </div>

      <div className="food__container container flex">
        {filteredFoods.map((food) => (
          <div key={food.id} className={`food__card mix${food.category}`}>
            <div className="food_img__wrapper">
              <Link to={`/recipe/${food.id}`} className="food__link">
                <div className="food__card">
                  <img
                    className="food__img"
                    src={food.image}
                    alt={food.title}
                  />
                  <h3 className="food__title">{food.title}</h3>
                  <p className="food__description">{food.description}</p>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;
