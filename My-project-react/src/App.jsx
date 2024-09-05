import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Login from "./components/Login";
import Authentication from "./components/Authentication";
import Basket from "./components/Basket";
import Product from "./components/Product";
import Decoration from "./components/Decoration";

function App() {
  return (
    <>
      <NavBar />
      {
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
            <Route path="decoration" element={<Decoration />} />
            <Route path="login" element={<Login />} />
            <Route path="authentocation" element={<Authentication />} />
            <Route path="basket" element={<Basket />} />
            <Route path="products" element={<Product />} />
          </Route>
        </Routes>
      }
    </>
  );
}

export default App;
