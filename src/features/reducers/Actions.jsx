import { createSlice } from "@reduxjs/toolkit";




export const cartSlice = createSlice({
    name:"cart",
    initialState: {value:[],},
    reducers: {
        addItemToCart: (state, {payload}) =>{
            const {id} = payload
            console.log(payload)
            // const doesItemExist = state.value.find((item) => item===id)
            console.log(id);
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
            const {id} = payload
            return state.map((item) => {
                if(item.id===id)
                {
                    return {
                        ...item,
                        quantity: item.quantity - 1
                    }
                }
                return item;
            })
        }
    }
})
export const {addItemToCart, removeItemFromCart} = cartSlice.actions
export default cartSlice.reducer;