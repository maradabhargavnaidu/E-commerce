import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { setProducts } from "../features/Products";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../features/reducers/Actions";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container, Stack } from "react-bootstrap";
import Row from "react-bootstrap/Row";

const ProductsData = () => {
  const products = useSelector((state) => state.products.value);
  console.log(products);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const productData = await fetch("https://fakestoreapi.com/products", {
      method: "GET",
    }).then((res) => res.json());
    dispatch(setProducts(productData));
  };
  useEffect(() => {
    fetchProducts();
    // console.log(products);
  }, []);
  return (
    <Container>
      <Row style={{ margin: "auto" }}>
        {products.map((product) => (
          <Card
            style={{
              width: "18rem",
              marginLeft: "30px",
              marginBottom: "30px",
              marginTop: "20px",
            }}
          >
            <Card.Img
              variant="top"
              src={product.image}
              width={286}
              height={286}
            />
            <Card.Body>
              <Card.Title style={{ color: "blue" }}>{product.title}</Card.Title>
              <Card.Text style={{ fontWeight: "500" }}>
                ${product.price}
              </Card.Text>
              <Card.Text>{product.rating.rate}</Card.Text>
              {/* <Stack direction="horizontal" gap={5}>
                
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
              </Stack> */}
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Container>
  );
};

export default ProductsData;
