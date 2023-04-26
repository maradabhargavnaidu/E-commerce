import { createSlice } from "@reduxjs/toolkit";




export const cartSlice = createSlice({
    name:"cart",
    initialState: {value:[],},
    reducers: {
        addItemToCart: (state, {payload}) =>{
            // const {id} = payload
            // console.log(payload);
            // const doesItemExist = state.value.find((item) => item===id)
            // console.log(id);
            // if(doesItemExist){
                state.value.push(payload);
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
            // const {id} = payload
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
        // calculateTotal: (state)=>{
        //     let amount = 0;
        //     let total = 0;
        //     state.cart.forEach((item)=>{
        //         amount+=item.amount;
        //         total+=item.amount * item.price;
        //     });
        //     state.amount = amount;
        //     state.total = total;
        // }
    }
})
export const {addItemToCart, removeItemFromCart, calculateTotal} = cartSlice.actions
export default cartSlice.reducer;