import React from "react";
import Cards from "../components/Cards";

const Menu = ({ foods, favorites, toggleFavorite }) => {
  return (
    <div>
      <h1>Explore the Menu</h1>
      <h3>Discover recipes to spark your culinary creativity!</h3>

      <div>
        <Cards
          foods={foods}
          favorites={favorites}
          fromFavorites={false}
          toggleFavorite={toggleFavorite}
        />
      </div>
    </div>
  );
};

export default Menu;
