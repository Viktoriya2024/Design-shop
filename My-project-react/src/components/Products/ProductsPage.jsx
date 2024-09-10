import React from "react";
import products from "./Products.js";
import ProductCard from "./ProductCard";
import "./productsPage.css";
import Basket from "../Basket/Basket.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

const ProductPage = () => {
  return (
    <>
      <Container style={{ padding: "20px" }}>
        <h1 className="mb-4">Home Decor Products</h1>
        <Row>
          {products.map((product) => (
            <Col md={4} key={product.id} className="mb-4">
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </Container>
      <div className="basket-container">
        <Basket />
      </div>
    </>
  );
};

export default ProductPage;
