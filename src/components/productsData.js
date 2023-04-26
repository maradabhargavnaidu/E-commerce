import React from "react";
import { useEffect } from "react";
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
    <Container>
      <Row>
        {products.map((product) => (
          <Card
            style={{
              width: "18rem",
              marginLeft: "30px",
              marginBottom: "30px",
              marginTop: "20px",
              cursor: "pointer",
            }}
            onClick={() => Navigate("/product/" + product.id)}
          >
            <Card.Img
              variant="top"
              src={product.image}
              style={{ padding: "30px", width: "286px", height: "286px" }}
            />
            <Card.Body>
              <Card.Title style={{ color: "blue" }}>{product.title}</Card.Title>
              <Card.Text style={{ fontWeight: "500" }}>
                ${product.price}
              </Card.Text>
              <Card.Text style={{ fontWeight: "700" }}>
                Rating:{product.rating.rate}
              </Card.Text>
              <Card.Text style={{ fontWeight: "700" }}>
                {product.category}
              </Card.Text>
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
