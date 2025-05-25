import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import MainLayout from "./layouts/MainLayout.jsx";
import Menu from "./pages/Menu.jsx";
import Edit from "./pages/Edit.jsx";
import Fav from "./pages/Fav.jsx";
import Add from "./pages/Add.jsx";
import Cards from "./components/Cards.jsx";
import RecipePage from "./components/RecipePage.jsx";
import EditRecipe from "./components/EditRecipe";
import { MdRestaurantMenu } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { IoMdAddCircleOutline } from "react-icons/io";
import Recipes from "./helpers/Recipes.jsx";
import NavLinks from "./helpers/NavLinks.jsx";
import { FoodContextProvider } from "./context/FoodProvider.jsx";

const fieldStyle = {
  ".MuiInputLabel-root": {
    color: "grey",
  },
  fieldset: {
    border: "1px solid #484f4f",
  },
};

const App = () => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (food) => {
    const favored = favorites.find((fav) => fav.id === food.id);

    if (favored) {
      setFavorites(favorites.filter((fav) => fav.id !== food.id));
    } else {
      setFavorites([...favorites, food]);
    }
  };

  const [navLinks] = useState(NavLinks);

  const [foods, setFoods] = useState(Recipes);

  const addRecipe = (newRecipe) => {
    setFoods((prevFoods) => [
      ...prevFoods,
      {
        ...newRecipe,
        id: prevFoods.length + 1,
      },
    ]);
  };

  return (
    <FoodContextProvider>
      <Router>
        <section>
          <Routes>
            <Route element={<MainLayout navLinks={navLinks} />}>
              <Route
                index
                element={
                  <Menu
                    foods={foods}
                    favorites={favorites}
                    toggleFavorite={toggleFavorite}
                  />
                }
              />
              <Route
                path="/menu"
                element={
                  <Menu
                    foods={foods}
                    favorites={favorites}
                    toggleFavorite={toggleFavorite}
                  />
                }
              />
              <Route path="/edit" element={<Edit foods={foods} />}>
                <Route
                  path=":id"
                  element={<RecipePage setFoods={setFoods} foods={foods} />}
                />
              </Route>
              <Route
                path="/fav"
                element={
                  <Fav favorites={favorites} toggleFavorite={toggleFavorite} />
                }
              />
              <Route
                path="/fav/recipe/:id"
                element={
                  <RecipePage
                    foods={foods}
                    toggleFavorite={toggleFavorite}
                    favorites={favorites}
                  />
                }
              />
              <Route
                path="/add"
                element={
                  <Add
                    fieldStyle={fieldStyle}
                    addRecipe={addRecipe}
                    setFoods={setFoods}
                    foods={foods}
                  />
                }
              />
              <Route
                path="/:filter"
                element={
                  <Cards
                    foods={foods}
                    favorites={favorites}
                    toggleFavorite={toggleFavorite}
                  />
                }
              />
              <Route
                path="/recipe/:id"
                element={
                  <RecipePage
                    foods={foods}
                    setFoods={setFoods}
                    favorites={favorites}
                    toggleFavorite={toggleFavorite}
                  />
                }
              />
            </Route>

            <Route
              path="/edit/recipe/:id"
              element={
                <EditRecipe
                  foods={foods}
                  setFoods={setFoods}
                  navLinks={navLinks}
                  fieldStyle={fieldStyle}
                />
              }
            />
          </Routes>
        </section>
      </Router>
    </FoodContextProvider>
  );
};

export default App;
