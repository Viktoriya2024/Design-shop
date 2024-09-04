import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import AboutUs from "./components/AboutUs";
import Login from "./components/Login";
import Authentication from "./components/Authentication";
import Basket from "./components/Basket";
import Product from "./components/Product";

function App() {
  return (
    <>
      <NavBar />
      {
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
            <Route path="about-us" element={<AboutUs />} />
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
