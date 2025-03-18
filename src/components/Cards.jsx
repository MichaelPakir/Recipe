import React, { useState } from "react";
import { Link } from "react-router-dom";

const Cards = () => {
  const [filter, setFilter] = useState("all");
  const [foods] = useState([
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
