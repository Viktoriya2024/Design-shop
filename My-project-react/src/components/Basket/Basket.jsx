import React, { useContext, useEffect, useState } from "react";
import { BasketContext } from "./BasketProvider";
import { Button } from "react-bootstrap";
import "./Basket.css";

const Basket = () => {
  const { basket, setBasket } = useContext(BasketContext);

  const [cartSummary, setCartSummary] = useState({
    quantity: 0,
    price: 0,
  });

  useEffect(() => {
    const reducedValues = basket.reduce(
      (acc, currentProduct) => {
        return {
          quantity: acc.quantity + currentProduct.quantity,
          price: acc.price + currentProduct.price * currentProduct.quantity,
        };
      },
      { quantity: 0, price: 0 }
    );
    setCartSummary(reducedValues);
  }, [basket]);

  const handleRemove = (index) => {
    setBasket((state) =>
      state.filter((_, filteredIndex) => index !== filteredIndex)
    );
  };
  const handleClearCart = () => {
    setBasket([]);
  };

  const quantityChangeHandler = (event, productId) => {
    setBasket((prevCartState) => {
      const newCartArr = prevCartState.map((item) => {
        if (item.id === productId) {
          item.quantity = +event.target.value;
        }
        return item;
      });
      return newCartArr;
    });
  };

  return (
    <div className="basket-container">
      <h2 className="basket-header">Shopping Cart</h2>
      {basket.length === 0 ? (
        <p>The cart is empty</p>
      ) : (
        <ul>
          {basket.map((product, index) => (
            <li key={index}>
              {product.name} - ${product.price} - Quantity:{" "}
              <select
                name="quantity"
                value={product.quantity}
                onChange={(event) => quantityChangeHandler(event, product.id)}
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
              - Subtotal: ${product.price * product.quantity}
              <Button variant="danger" onClick={() => handleRemove(index)}>
                Remove
              </Button>
            </li>
          ))}
        </ul>
      )}
      {basket.length > 0 && (
        <>
          <Button variant="warning" onClick={handleClearCart}>
            Clear Cart
          </Button>
        </>
      )}
      <h4>Total Items: {cartSummary.quantity}</h4>
      <h4>Total Price: ${cartSummary.price.toFixed(2)}</h4>
    </div>
  );
};

export default Basket;
