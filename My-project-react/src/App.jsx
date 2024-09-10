import { Route, Routes } from "react-router-dom";
import { BasketProvider } from "./components/Basket/BasketProvider.jsx";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar.jsx";
import Authentication from "./components/Registration/Authentication.jsx";
import Basket from "./components/Basket/Basket.jsx";
import ProductsPage from "./components/Products/ProductsPage.jsx";
import Decoration from "./components/About us/Decoration.jsx";
import PopupComponent from "./components/Popup/PopupComponent.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <BasketProvider>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="/decoration" element={<Decoration />} />
          <Route path="/authentocation" element={<Authentication />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
        <PopupComponent />
      </BasketProvider>
    </>
  );
}

export default App;
