import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { setProducts } from "../features/Products";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";

const ProductsData = () => {
  // FOR SHOWING PRODUCTS WHICH ARE PRESENT IN STORE
  const products = useSelector((state) => state.products.value);
  const Navigate = useNavigate();
  // console.log(products);
  // DISPATCH
  const dispatch = useDispatch();
  // FETCHING PRODUCTS
  const fetchProducts = async () => {
    const productData = await fetch("https://fakestoreapi.com/products", {
      method: "GET",
    }).then((res) => res.json());
    dispatch(setProducts(productData));
  };
  // SIDE EFFECTS
  useEffect(() => {
    fetchProducts();
    // console.log(products);
  }, []);

  return (
    <Container fluid>
      <Row className="">
        {products.map((product) => (
          <Card
            style={{
              marginLeft: "30px",
              marginBottom: "30px",
              marginTop: "20px",
              cursor: "pointer",
            }}
            className=" w-[330px]"
            onClick={() => Navigate("/product/" + product.id)}
          >
            <Card.Img
              variant="top"
              src={product.image}
              style={{ padding: "30px", width: "286px", height: "286px" }}
            />
            <Card.Body>
              <Card.Title className="text-black">{product.title}</Card.Title>
              <Card.Text className="text-gray-800 font-semibold">
                ${product.price}
              </Card.Text>
              <Card.Text className="text-orange-600 font-semibold">
                Rating:{product.rating.rate}
              </Card.Text>
              <Card.Text className="text-blue-800 font-medium">
                {product.category}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Container>
  );
};

export default ProductsData;
