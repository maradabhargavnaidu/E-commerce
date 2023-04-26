import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
// import { calculateTotal } from "../features/reducers/Actions";

import { useDispatch, useSelector } from "react-redux";
const Header = () => {
  const dispatch = useDispatch();
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
          <Navbar.Brand href="/">REDUX</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link style={{color:'white'}} className="cartCount">
                Cart items: {items.length}
              </Nav.Link>
              {/* <Nav.Link style={{color:'white'}} className="cartCount">
                Total Price: {calculateTotal}
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
