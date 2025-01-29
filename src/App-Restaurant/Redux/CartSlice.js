import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    ShopingCart:[]
}

const Cart = createSlice({
    name:"ShopingCart",
    initialState,
    reducers:{
        AddItem(state,action){
            state.ShopingCart.push(action.payload)
        },
        UpdeteCount(state,action){
            const item = state.ShopingCart.find((e) => e.id === action.payload.id)
            item.CountItem = action.payload.Count
            item.TotalPrice = item.CountItem * item.Price
        },
        DeletItem(state,action){
            state.ShopingCart = state.ShopingCart.filter(e =>e.id !== action.payload)
        },
        ClearCart(state){
            state.ShopingCart = []
        }
    }
})

export const {AddItem,UpdeteCount,DeletItem,ClearCart} = Cart.actions

export default Cart.reducer