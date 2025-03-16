import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import MainLayout from "./layouts/MainLayout.jsx";
import Menu from "./pages/Menu.jsx";
import Edit from "./pages/Edit.jsx";
import Fav from "./pages/Fav.jsx";
import Add from "./pages/Add.jsx";

function App() {
  return (
    <Router>
      <section>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<Menu />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/edit" element={<Edit />} />
            <Route path="/fav" element={<Fav />} />
            <Route path="/add" element={<Add />} />
          </Route>
        </Routes>
      </section>
    </Router>
  );
}

export default App;
