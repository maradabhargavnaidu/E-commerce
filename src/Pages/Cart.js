// <<<<<<< HEAD
import React from "react";

// =======
import { useEffect, useState } from "react";
// >>>>>>> 508d318543a02910b020bd7a1bec5a87b95436f7
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Col, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import { removeItemFromCart } from "../features/reducers/Actions";
// import "../App.css";

const Cart = () => {
  const items = useSelector((state) => state.cart.value);
  const Cartproducts = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();
  return (
    <Container className="mt-3">
      <Col
        style={{ backgroundColor: "white", padding: "30px" }}
        className="rounded-md"
      >
        <h1 className="text-3xl">Shopping Cart</h1>
        {items?.length == 0 ? (
          <h1 className="text-2xl text-gray-700">Your Redux Cart is Empty</h1>
        ) : (
          ""
        )}
        {Cartproducts.map((product) => (
          <>
            <Card
              style={{
                // width: "18rem",
                marginLeft: "30px",
                marginBottom: "30px",
                marginTop: "20px",
                cursor: "pointer",
              }}
              key={product.id}
            >
              <Card.Img
                variant="top"
                src={product.image}
                style={{ padding: "30px", width: "286px", height: "286px" }}
              />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
                <Card.Text>Quantity:{product.cartQuantity}</Card.Text>
                <div key={product.id}>
                  <Button
                    variant="outline-danger"
                    onClick={() => {
                      dispatch(removeItemFromCart(product));
                    }}
                  >
                    Remove
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </>
        ))}
      </Col>
    </Container>
  );
};

export default Cart;
