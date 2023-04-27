import React,{useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import {removeItemFromCart} from '../features/reducers/Actions'

const Cart = () => {
  const Cartproducts = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();
  return (
    <Container>
      <Row>
        {Cartproducts.map((product) => (
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
              <Button variant="danger" onClick={() => {dispatch(removeItemFromCart(product))}}>Remove</Button> 
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Container>
  );
};

export default Cart;
