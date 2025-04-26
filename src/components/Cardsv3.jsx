import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const Cards = ({ foods }) => {
  const [filter, setFilter] = useState("all");

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

      <div className="food__container container">
        <div className="flex wrap">
          {filteredFoods.map((food) => (
            <div key={food.id} className={`food__card mix${food.category}`}>
              <div className="food_img__wrapper">
                <Link
                  to={
                    fromFavorites
                      ? `/fav/recipe/${food.id}`
                      : `/recipe/${food.id}`
                  }
                  className="food__link"
                >
                  <div className="food__card">
                    <img
                      className="food__img"
                      src={food.image}
                      alt={food.title}
                    />

                    <h3 className="food__title">{food.title}</h3>
                    <p className="food__description">{food.description}</p>
                    <p></p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;
