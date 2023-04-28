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

const Cart = () => {
  const items = useSelector((state) => state.cart.value);
  const Cartproducts = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();
  return (
    <Container>
      <Col style={{ backgroundColor: "white", padding: "30px" }}>
        {/* <h1>Shopping Cart</h1> */}
        {/* {items.length == 0 ? <h1>Your Redux Cart is Empty</h1> : ""} */}
        {Cartproducts.map((product) => (
          <>
            <Card style={{ width: "18rem" }} key={product.id}>
              <Card.Img
                variant="top"
                src={product.image}
                width={286}
                height={286}
              />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
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
