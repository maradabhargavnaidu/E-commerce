import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
const Header = () => {
  const items = useSelector((state) => state.cart.value);
  return (
    <>
      <Navbar
        bg="light"
        variant="light"
        expand="lg"
        sticky="top"
        style={{ padding: "20px 0" }}
      >
        <Container>
          <Navbar.Brand href="#home">REDUX</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="cartCount">
                Cart items: {items.length}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
