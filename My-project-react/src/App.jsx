import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar.jsx";

import Authentication from "./components/Registration/Authentication.jsx";
import Basket from "./components/Basket";
import Product from "./components/Product";
import Decoration from "./components/About us/Decoration.jsx";

function App() {
  return (
    <>
      <NavBar />
      {
        <Routes>
          <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="/decoration" element={<Decoration />} />
          <Route path="/authentocation" element={<Authentication />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/products" element={<Product />} />
        </Routes>
      }
    </>
  );
}

export default App;
