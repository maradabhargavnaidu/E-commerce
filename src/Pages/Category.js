import React from "react";
import { Container, Card, Row } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";

const Category = () => {
  const { product } = useParams();
  const [categoryProduct, setCategoryProduct] = React.useState([]);
  const Navigate = useNavigate();
  const fetchCategoryWise = async () => {
    const productData = await fetch(
      "https://fakestoreapi.com/products/category/" + product,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => setCategoryProduct(data));
  };
  React.useEffect(() => {
    fetchCategoryWise();
  });
  return (
    <Container>
      <Row style={{ margin: "auto" }}>
        {categoryProduct.map((product) => (
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
              width={286}
              height={286}
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
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Container>
  );
};

export default Category;
