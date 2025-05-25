import { createContext, useState } from "react";
import Recipes from "../helpers/Recipes";

const FoodContext = createContext(null);

export { FoodContext };

export const FoodContextProvider = ({ children }) => {
  const [foods, setFoods] = useState(Recipes);
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (food) => {
    const favored = favorites.find((fav) => fav.id === food.id);

    if (favored) {
      setFavorites(favorites.filter((fav) => fav.id !== food.id));
    } else {
      setFavorites([...favorites, food]);
    }
  };

  return (
    <FoodContext.Provider
      value={{ foods, setFoods, favorites, toggleFavorite }}
    >
      {children}
    </FoodContext.Provider>
  );
};
