import { createContext, useState } from "react";
import { Recipes } from "../helpers/Recipes";

const FoodContext = createContext(null);

export { FoodContext };

export const FoodContextProvider = ({ children }) => {
  const [foods, setFoods] = useState(Recipes);

  return (
    <FoodContextProvider.Provider value={{ foods, setFoods }}>
      {children}
    </FoodContextProvider.Provider>
  );
};
