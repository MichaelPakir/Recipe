import React, { useState } from "react";

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
  ]);
  return (
    <section>
      <div className="food__container container flex">
        {foods.map((food) => (
          <div className="food_img__wrapper">
            <div className="food__card">
              <img className="food__img" src={food.image} />
              <h3 className="food__title">{food.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;
