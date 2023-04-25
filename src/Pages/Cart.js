import React from "react";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container, Stack } from "react-bootstrap";
import Row from "react-bootstrap/Row";

const Cart = () => {
  const Cartproducts = useSelector((state) => state.cart.value);
  return (
    <Container>
      <Row>
        {Cartproducts.map((product) => (
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={product.image}
              width={286}
              height={286}
            />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>${product.price}</Card.Text>
              <Button>Remove</Button>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Container>
  );
};

export default Cart;
