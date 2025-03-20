import React, { useState } from "react";
import { Link } from "react-router-dom";

const Cards = () => {
  const [filter, setFilter] = useState("all");

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
