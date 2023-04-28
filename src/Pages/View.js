import React, { useEffect, useState } from "react";
import { Button, Container, Stack } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../features/reducers/Actions";
import { useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "../App.css";
const View = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const fetchSelected = async () => {
    await fetch("https://fakestoreapi.com/products/" + id, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setProduct(data));
  };
  useEffect(() => {
    fetchSelected();
  });
  return (
    <Container className="bg-white mt-3 rounded-lg md:px-32 py-10">
      <Stack direction="vertical" gap={5}>
        <img src={product.image} alt="product_image" className="md:w-[50%]" />
        <Stack gap={2}>
          <p className="text-2xl font-semibold">
            {product.title}
            <hr />
          </p>
          <h4>
            <Badge bg="secondary">Deal</Badge>
          </h4>
          <h2>$ {product.price}</h2>
          <h5>
            <Badge bg="dark">Full Filled</Badge>
          </h5>
          <h3>Inclusive of all taxes</h3>
          <hr />
          <h6>{product.description}</h6>
          <Stack direction="horizontal" gap={3}>
            <div key={product.id}>
              <Button
                variant="outline-danger"
                onClick={() => {
                  dispatch(addItemToCart(product));
                }}
              >
                Add to cart
              </Button>
            </div>
            <div>
              <Button
                className="bg-green-600 border-none"
                onClick={() => Navigate("/cart")}
              >
                <AiOutlineShoppingCart />
              </Button>
            </div>
            <div>
              <Button
                variant="outline-dark"
                onClick={() => Navigate("/category/" + product.category)}
              >
                {product.category}
              </Button>{" "}
            </div>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default View;
