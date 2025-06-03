import { createContext, useState } from "react";
import FoodList from "./../helpers/FoodList";

const FoodContext = createContext(null);

export { FoodContext };

export const FoodProvider = ({ children }) => {
  const [foods, setFoods] = useState(FoodList);
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
      value={{ foods, setFoods, favorites, setFavorites, toggleFavorite }}
    >
      {children}
    </FoodContext.Provider>
  );
};
