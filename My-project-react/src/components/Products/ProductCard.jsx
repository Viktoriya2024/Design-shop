import React, { useContext, useEffect, useState } from "react";
import { BasketContext } from "../Basket/BasketProvider";
import { Card, Button } from "react-bootstrap";

const ProductCard = ({ product }) => {
  const { basket, setBasket } = useContext(BasketContext);

  const addToBasket = (product) => {
    const updatedBasket = [...basket];
    const existingProductIndex = updatedBasket.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex >= 0) {
      updatedBasket[existingProductIndex].quantity += 1;
    } else {
      updatedBasket.push({ ...product, quantity: 1 });
    }

    setBasket(updatedBasket);
  };

  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Img variant="top" src={product.imageUrl} alt={product.name} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>${product.price}</Card.Text>
        <Button variant="primary" onClick={() => addToBasket(product)}>
          Add to Basket
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
