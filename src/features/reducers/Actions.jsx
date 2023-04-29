import { createSlice } from "@reduxjs/toolkit";
// import { useState, useEffect } from "react";

export const cartSlice = createSlice({
    name:"cart",
    initialState: {value:[],},
    reducers: {
        addItemToCart: (state,action) =>{
            const itemquantity = state.value.findIndex((item)=>item.id===action.payload.id)
            if(itemquantity>=0){
                state.value[itemquantity].cartQuantity+=action.payload.quantity;
            }
            else{
                const temp = {...action.payload,cartQuantity:action.payload.quantity}
                state.value.push(temp);
            }
           
        },
        removeItemFromCart: (state,{payload})=>{
            return {
                ...state.value,
                value: state.value.filter((item) => item.id !== payload.id),
              };
        },
    }
})


export const {addItemToCart, removeItemFromCart, calculateTotal} = cartSlice.actions
export default cartSlice.reducer;