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
    { label: "Fav", path: "/fav" },
    { label: "Add", path: "/add" },
  ]);

  return (
    <Router>
      <section>
        <Routes>
          <Route element={<MainLayout navLinks={navLinks} />}>
            <Route index element={<Menu />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/edit" element={<Edit />} />
            <Route path="/fav" element={<Fav />} />
            <Route path="/add" element={<Add />} />
            <Route path="/" element={<Cards />} />
            <Route path="/recipe/:id" element={<RecipePage />} />
          </Route>
        </Routes>
      </section>
    </Router>
  );
};

export default App;
