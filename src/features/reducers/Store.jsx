import { configureStore } from "@reduxjs/toolkit";
const ProductReducer = require('../../features/Products')

const store = configureStore({
    reducer: {
      products: ProductReducer,
    },
  });

// module.exports = store
export default store