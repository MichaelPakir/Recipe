import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Cards = ({ foods, favorites, toggleFavorite }) => {
  const [filter, setFilter] = useState("all");

  // const togL = () => {
  //   console.log("Clicked");
  // };

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
          className={`food__item nav ${
            filter === `desserts` ? "active__work" : ""
          }`}
          onClick={() => handleFilterChange("desserts")}
        >
          <img src="/desserts.webp" className="filterImages" /> <p>Desserts</p>
        </span>
        <span
          className={`food__item nav ${
            filter === "main-course" ? "active__work" : ""
          }`}
          onClick={() => handleFilterChange("main-course")}
        >
          <img src="/main.webp" className="filterImages" />
          <p>Main Course</p>
        </span>
        <span
          className={`food__item nav ${
            filter === "appetizers" ? "active__work" : ""
          }`}
          onClick={() => handleFilterChange("appetizers")}
        >
          <img src="/appetizers.webp" className="filterImages" />
          <p>Appetizers</p>
        </span>
        <span
          className={`food__item nav ${
            filter === "beverages" ? "active__work" : ""
          }`}
          onClick={() => handleFilterChange("beverages")}
        >
          <img src="/beverages.webp" className="filterImages" />{" "}
          <p>Beverages</p>
        </span>
        <span
          className={`food__item nav ${
            filter === "vegetarian" ? "active__work" : ""
          }`}
          onClick={() => handleFilterChange("vegetarian")}
        >
          <img src="/vegetarian.webp" className="filterImages" />{" "}
          <p>Vegetarian</p>
        </span>
      </div>

      <div className="food__container container">
        <div className="flex wrap">
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
                <span
                  className="food__card-heart"
                  onClick={() => toggleFavorite(food)}
                >
                  {favorites.some((item) => item.id === food.id) ? (
                    <FaHeart size={24} color="red" />
                  ) : (
                    <FaRegHeart size={24} />
                  )}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;
