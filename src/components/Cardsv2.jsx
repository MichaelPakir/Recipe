import React, { useState } from "react";
import { Link } from "react-router-dom";

const Cardsv2 = ({ foods }) => {
  const [filter, setFilter] = useState("all");

  const handleFilterChange = (category) => {
    setFilter(category);
  };

  const filteredFoods = foods.filter(
    (food) => filter === "all" || food.category === filter
  );

  return (
    <section>
      <div className="filter__container">
        <span
          className={`food__item ${filter === "all" ? "active__work" : ""}`}
          onClick={() => handleFilterChange("all")}
        >
          All
        </span>
        <span
          className={`food__item ${
            filter === `desserts` ? "active__work" : ""
          }`}
          onClick={() => handleFilterChange("desserts")}
        >
          <img src="/desserts.webp" className="filterImages" /> Desserts
        </span>
        <span
          className={`food__item ${
            filter === "main-course" ? "active__work" : ""
          }`}
          onClick={() => handleFilterChange("main-course")}
        >
          <img src="/main.webp" className="filterImages" />
          Main Course
        </span>
        <span
          className={`food__item ${
            filter === "appetizers" ? "active__work" : ""
          }`}
          onClick={() => handleFilterChange("appetizers")}
        >
          <img src="/appetizers.webp" className="filterImages" />
          Appetizers
        </span>
        <span
          className={`food__item ${
            filter === "beverages" ? "active__work" : ""
          }`}
          onClick={() => handleFilterChange("beverages")}
        >
          <img src="/beverages.webp" className="filterImages" /> Beverages
        </span>
        <span
          className={`food__item ${
            filter === "vegetarian" ? "active__work" : ""
          }`}
          onClick={() => handleFilterChange("vegetarian")}
        >
          <img src="/vegetarian.webp" className="filterImages" /> Vegetarian
        </span>
      </div>

      <div className="food__container container">
        <div className="flex wrap">
          {filteredFoods.map((food) => (
            <div key={food.id} className={`food__card mix${food.category}`}>
              <div className="food_img__wrapper">
                <Link to={`/edit/recipe/${food.id}`} className="food__link">
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

export default Cardsv2;
