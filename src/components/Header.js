import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
const Header = () => {
  // const dispatch = useDispatch();
  const Navigate = useNavigate();
  const items = useSelector((state) => state.cart.value);

  const [showItem, setShowItem] = useState(true);
  useEffect(() => {
    const data = window.localStorage.getItem("item");
    if (data !== null) {
      setShowItem(JSON.parse(data));
    }
  }, []);

  return (
    <>
      <Navbar
        bg="light"
        variant="light"
        expand="lg"
        sticky="top"
        style={{ padding: "20px 0" }}
      >
        <Container fluid>
          <Navbar.Brand
            onClick={() => Navigate("/")}
            style={{ cursor: "pointer" }}
          >
            REDUX.in
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                className="flex items-center"
                onClick={() => Navigate("/cart")}
              >
                <AiOutlineShoppingCart />
                &nbsp;&nbsp;{items?.length}
              </Nav.Link>
              {/* <Nav.Link style={{color:'white'}} className="cartCount">
                Total Price: {calculateTotal}
              </Nav.Link> */}
              <NavDropdown title="Lists" id="navbarScrollingDropdown">
                <NavDropdown.Item onClick={() => Navigate("/shoppinglist")}>
                  Shopping List
                </NavDropdown.Item>
                <NavDropdown.Item>Create a Wish List</NavDropdown.Item>
              </NavDropdown>
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
