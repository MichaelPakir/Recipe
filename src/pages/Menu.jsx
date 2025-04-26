import React from "react";
import Cards from "../components/Cards";

const Menu = ({ foods }) => {
  return (
    <div>
      <h1>Explore the Menu</h1>
      <h3>Discover recipes to spark your culinary creativity!</h3>

      <div>
        <Cards foods={foods} fromFavorites={false} />
      </div>
    </div>
  );
};

export default Menu;
