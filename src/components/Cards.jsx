import React, { useState } from "react";
import { Link } from "react-router-dom";

const Cards = () => {
  const [foods] = useState([
    {
      id: 1,
      title: "Tomato Bomb",
      image: "/popular-1.png",
    },
    {
      id: 2,
      title: "Nagasaki Mushroom",
      image: "/popular-2.png",
    },
    {
      id: 3,
      title: "Yamashita Pepperoni",
      image: "/popular-3.png",
    },
    {
      id: 4,
      title: "Nazi Pizza",
      image: "/popular-1.png",
    },
    {
      id: 5,
      title: "Nazi Pizza",
      image: "/popular-2.png",
    },
  ]);
  return (
    <section>
      <div className="food__container container flex">
        {foods.map((food) => (
          <div className="food_img__wrapper" key={food.id}>
            <Link to={`/recipe/${food.id}`} className="food__link">
              <div className="food__card">
                <img className="food__img" src={food.image} alt={food.title} />
                <h3 className="food__title">{food.title}</h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;
