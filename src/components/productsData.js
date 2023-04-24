import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { setProducts } from "../features/Products";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../features/reducers/Actions";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";

const ProductsData = () => {
  const products = useSelector((state) => state.products.value);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const productData = await fetch("https://fakestoreapi.com/products", {
      method: "GET",
    }).then((res) => res.json());
    dispatch(setProducts(productData));
  };
  useEffect(() => {
    fetchProducts();
    console.log(products);
  }, []);
  return (
    <Container>
      <Row>
        {products.map((product) => (
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={product.image}
              width={286}
              height={180}
            />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>${product.price}</Card.Text>
              <div key={product.id}>
                <Button
                  variant="primary"
                  onClick={() => {
                    dispatch(addItemToCart(product));
                  }}
                >
                  Add Product
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Container>
  );
};

export default ProductsData;
