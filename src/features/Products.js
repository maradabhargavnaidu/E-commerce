import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    value: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.value.push(...action.payload);
    },
  },
});
export default productSlice.reducer;
export const { setProducts } = productSlice.actions;
