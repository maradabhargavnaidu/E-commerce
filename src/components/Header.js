import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
const Header = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const items = useSelector((state) => state.cart.value);

  // useEffect(()=>{
  //   dispatch(calculateTotal());
  // },[items])

  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        sticky="top"
        style={{ padding: "20px 0" }}
      >
        <Container>
          <Navbar.Brand
            onClick={() => Navigate("/")}
            style={{ cursor: "pointer" }}
          >
            REDUX.in
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link style={{ color: "white" }} className="cartCount">
                Cart items: {items.length}
              </Nav.Link>
              {/* <Nav.Link style={{color:'white'}} className="cartCount">
                Total Price: {calculateTotal}
              </Nav.Link> */}
              <Nav.Link>Accounts</Nav.Link>
              <NavDropdown title="Categories" id="navbarScrollingDropdown">
                <NavDropdown.Item
                  onClick={() => Navigate("category/men's clothing")}
                >
                  Men's Clothing
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => Navigate("category/jewelery")}>
                  Jewellery
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => Navigate("category/electronics")}
                >
                  Electronics
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => Navigate("category/women's clothing")}
                >
                  Women's Clothing
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
