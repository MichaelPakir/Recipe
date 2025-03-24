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

const App = () => {
  const [navLinks] = useState([
    { label: "Menu", path: "/menu" },
    { label: "Edit", path: "/edit" },
    { label: "Favorites", path: "/fav" },
    { label: "Add", path: "/add" },
  ]);

  const [foods] = useState([
    {
      id: 1,
      title: "Sinigang",
      description: "Sinigang is a sour soup native to the Philippines.",
      category: "main-course",
      image:
        "https://fiarecipes.com/wp-content/uploads/2024/12/sinigang-recipe%E2%80%8Bs.webp",
    },
    {
      id: 2,
      title: "Filipino Macaroni Salad",
      description:
        "When we say macaroni salad, what’s the first thing that comes to your mind?",
      category: "beverages",
      image:
        "https://yummykitchentv.com/wp-content/uploads/2022/04/chicken-macaroni-salad-recipe.jpg",
    },
    {
      id: 3,
      title: "Pancit",
      category: "vegetarian",
      description:
        "Pancit is a popular Filipino dish made from noodles, vegetables, and various proteins like chicken, pork, or shrimp.",
      image:
        "https://panlasangpinoy.com/wp-content/uploads/2024/11/Filipino-Pancit-Recipe-1024x681.jpg",
    },
    {
      id: 4,
      title: "Squash and Orzo",
      category: "appetizers",
      image:
        "https://cookingmatters.org/wp-content/uploads/2021/11/Cooking-Matters-Recipe-SquashOrzo.png",
    },
    {
      id: 5,
      title: "Italian Stuffed Peppers",
      category: "desserts",
      image:
        "https://cookingmatters.org/wp-content/uploads/2021/11/Cooking-Matters-Recipe-StffPeppers.png",
    },
    {
      id: 6,
      title: "Tabbouleh",
      category: "appetizers",
      image:
        "https://cookingmatters.org/wp-content/uploads/2021/11/Cooking-Matters-Recipe-Tabbouleh.png",
    },
    {
      id: 7,
      title: "Herb Roasted Chicken with Vegetables",
      category: "main-course",
      image:
        "https://cookingmatters.org/wp-content/uploads/2021/11/Cooking-Matters-Recipe-HerbRstdChic.png",
    },
  ]);

  return (
    <Router>
      <section>
        <Routes>
          <Route element={<MainLayout navLinks={navLinks} />}>
            <Route index element={<Menu foods={foods} />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/edit" element={<Edit />} />
            <Route path="/fav" element={<Fav />} />
            <Route path="/add" element={<Add />} />
            <Route path="/" element={<Cards />} />
            <Route path="/recipe/:id" element={<RecipePage foods={foods} />} />
          </Route>
        </Routes>
      </section>
    </Router>
  );
};

export default App;
