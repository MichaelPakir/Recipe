import React from "react";
import Box from "@mui/material/Box";
import Cardsv3 from "../components/Cardsv3";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Fav = ({ favorites, toggleFavorite }) => {
  return (
    <div>
      <h1>Your Favorite Recipes</h1>
      <h3>
        All your beloved creations in one place! <FaHeart />
      </h3>
      <div>
        <Cardsv3 foods={favorites} toggleFavorite={toggleFavorite} />
      </div>
    </div>
  );
};

export default Fav;
