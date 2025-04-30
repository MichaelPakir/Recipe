import React from "react";
import Box from "@mui/material/Box";
import Cardsv3 from "../components/Cardsv3";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Fav = ({ favorites, toggleFavorite }) => {
  return (
    <div>
      <h1>Your Favorite Recipes</h1>
      <h3>All your beloved creations in one place!</h3>
      <div>
        <Cardsv3
          foods={favorites}
          toggleFavorite={toggleFavorite}
          fromFavorites={true}
        />
      </div>
    </div>
  );
};

export default Fav;
