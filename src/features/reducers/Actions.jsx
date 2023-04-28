import { createSlice } from "@reduxjs/toolkit";
import { useState, useEffect } from "react";

export const cartSlice = createSlice({
    name:"cart",
    initialState: {value:[],},
    reducers: {
        addItemToCart: (state, {payload}) =>{
            
            state.value.push(payload);
            
        },
        removeItemFromCart: (state,{payload})=>{
            return {
                ...state.value,
                cart: state.value.filter((item) => item.id !== payload.id),
              };
            
            console.log(payload.id)
            state.value.filter(payload.id)
        },
    }
})


export const {addItemToCart, removeItemFromCart, calculateTotal} = cartSlice.actions
export default cartSlice.reducer;