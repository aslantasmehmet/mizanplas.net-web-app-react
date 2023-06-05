import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import Dashboard from "./layout/Dashboard";
import Login from "./pages/Login";
import Recipe from "./pages/Recipe";
import NewsDetail from "./pages/NewsDetail";
import BlogDetail from "./pages/BlogDetail";
import About from "./pages/About";
import Shop from "./pages/Shop";
import CartDetail from "./pages/CartDetail";
import CategoriesPages from "./pages/CategoriesPages";
import CategoriesRecipe from "./pages/CategoriesRecipe";
import TopFlavors from "./component/TopFlavors";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <div className="loading">
          <div className="dot dot-1"></div>
          <div className="dot dot-2"></div>
          <div className="dot dot-3"></div>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/tarif/:title" element={<Recipe />} />
          <Route path="/haber/:title" element={<NewsDetail />} />
          <Route path="/blog/:title" element={<BlogDetail />} />
          <Route
            path="/kategori/:categoryName"
            element={<CategoriesRecipe />}
          />
          <Route path="/hakkımızda" element={<About />} />
          <Route path="/sepet" element={<CartDetail />} />
          <Route path="/market" element={<Shop />} />
          <Route path="/kategoriler" element={<CategoriesPages />} />
          <Route path="/top" element={<TopFlavors />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
