import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    ArryFavorites : []
}

const Favorites = createSlice({
    name:"ArryFavorites",
    initialState,
    reducers:{
        AddItemFav(state,action){
            state.ArryFavorites.push(action.payload)
        },
        CrealFav(state){
            state.ArryFavorites = []
        }
    }
})

export const  {AddItemFav,CrealFav} = Favorites.actions

export default Favorites.reducer