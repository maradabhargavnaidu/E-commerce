import { createSlice } from "@reduxjs/toolkit";
import { useState, useEffect } from "react";

const initialCart = localStorage.getItem('cart') 
    ? JSON.parse(localStorage.getItem('cart')) : [];

export const cartSlice = createSlice({
    name:"cart",
    initialState: {value:[],},
    reducers: {
        addItemToCart: (state, {payload}) =>{
            const {id} = payload
            // console.log(payload);
            // const doesItemExist = state.value.find((item) => item===id)
            // console.log(id);
            // if(doesItemExist){
            state.value.push(payload);
            localStorage.setItem('cart', JSON.stringify(state.value))
            //     // return state.value.map((item)=>{
            //     //         return {
            //     //             ...item,
            //     //             item
            //     //         }
            //     // })
            // }
            // // else{
            //     state.value.push({
            //         ...payload, quantity:1
            //     })
            // }
        },
        removeItemFromCart: (state,{payload})=>{
            const {id} = payload
            state.value.pop();
            // const updateCart = state.value.map((item) => {
            //     console.log(item);
            //     if(item.id===id && item.quantity>0)
            //     {
            //         return {
            //             ...item,
            //             quantity: item.quantity - 1
            //         }
            //     }
            //     return item;
            // })
            // return updateCart
        },
    }
})


export const {addItemToCart, removeItemFromCart, calculateTotal} = cartSlice.actions
export default cartSlice.reducer;