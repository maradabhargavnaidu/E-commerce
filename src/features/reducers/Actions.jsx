import { createSlice } from "@reduxjs/toolkit";




export const cartSlice = createSlice({
    name:"cart",
    initialState: [],
    reducers: {
        addItemToCart: (state, {payload}) =>{
            const {id} = payload
            const doesItemExist = state.find((item) => item.id===id)
            console.log(id);
            if(doesItemExist){
                return state.map((item)=>{
                        return {
                            ...item,
                            quantity: item.quantity+1
                        }
                })
            }
            else{
                state.push({
                    ...payload, quantity:1
                })
            }
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