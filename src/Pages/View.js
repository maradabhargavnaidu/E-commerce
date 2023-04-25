import React, { useEffect, useState } from "react";
import { Button, Container, Stack } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../features/reducers/Actions";
import { useNavigate } from "react-router-dom";
const View = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const fetchSelected = async () => {
    const productData = await fetch("https://fakestoreapi.com/products/" + id, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setProduct(data));
  };
  useEffect(() => {
    fetchSelected();
  });
  // const rating = product.rating;
  return (
    <Container>
      <Stack direction="horizontal" gap={5}>
        <img src={product.image} width="50%" height="650px" />
        <Stack>
          <h3>{product.title}</h3>
          <h4>
            {/* Rating: {product.rating.rate} | {product.rating.count} ratings */}
          </h4>
          <hr />
          <h4>
            <Badge bg="secondary">Deal</Badge>
          </h4>
          <h2>$ {product.price}</h2>
          <h5>
            <Badge bg="dark">Full Filled</Badge>
          </h5>
          <h3>Inclusive of all taxes</h3>
          <Button variant="outline-secondary">{product.category}</Button>{" "}
          <Stack direction="horizontal" gap={3}>
            <div key={product.id}>
              <Button
                variant="danger"
                onClick={() => {
                  dispatch(addItemToCart(product));
                }}
              >
                Add To Cart
              </Button>
            </div>
            <div>
              <Button onClick={() => Navigate("/cart")}>Go To Cart</Button>
            </div>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default View;
