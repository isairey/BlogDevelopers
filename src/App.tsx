import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Articles from "./pages/Articles";
import Categories from "./pages/Categories";
import Tutorials from "./pages/Tutorials";
import Newsletter from "./pages/Newsletter";

import Frontend from "./pages/category/Frontend";
import Backend from "./pages/category/Backend";
import Devops from "./pages/category/Devops";
import IA from "./pages/category/IA";
import ArticleDetail from "./pages/ArticleDetail";
import TutorialDetail from "./pages/TutorialDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articulos" element={<Articles />} />
        <Route path="/categorias" element={<Categories />} />
        <Route path="/tutoriales" element={<Tutorials />} />
        <Route path="/newsletter" element={<Newsletter />} />

        {/* CATEGORÍAS */}
        <Route path="/frontend" element={<Frontend />} />
        <Route path="/backend" element={<Backend />} />
        <Route path="/devops" element={<Devops />} />
        <Route path="/ia" element={<IA />} />

        <Route path="/articulos/:id" element={<ArticleDetail />} />
        <Route path="/tutoriales/:id" element={<TutorialDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;