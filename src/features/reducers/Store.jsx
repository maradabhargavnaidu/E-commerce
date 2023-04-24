import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../../features/Products"
import CartReducer from "../reducers/Actions"
// const ProductReducer = require('../../features/Products')

const store = configureStore({
    reducer: {
      products: ProductReducer,
      cart:CartReducer,
    },
  });

// module.exports = store
export default store