import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { setProducts } from "../features/Products";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../features/reducers/Actions";

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
    <>
      <div className="">
        <div className="">
          {products.map((product) => (
            <div
              style={{ width: 18 + "rem" }}
              className="border-gray-500 border-2 rounded-lg"
            >
              <img
                src={product.image}
                alt="..."
                width={150 + "px"}
                height={300 + "px"}
              />
              <div>
                <h5 className="">{product.title}</h5>
                <p className="">${product.price}</p>
                <div className="">
                  <div key={product.id}>
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        dispatch(addItemToCart(product));
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default ProductsData;
