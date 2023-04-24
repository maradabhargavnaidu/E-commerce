import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const items = useSelector((state) => state.cart);
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">REDUX</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/cart">Cart</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <span className="cartCount">Cart items: {items.length}</span>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
