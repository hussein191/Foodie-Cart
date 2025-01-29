import {configureStore} from "@reduxjs/toolkit"
import CartSlice from "./CartSlice"
import FavoritesSlice from "./FavoritesSlice"

const Store = configureStore({
    reducer:{
        Cart:CartSlice,
        Favorites:FavoritesSlice
    }
})

export default Store