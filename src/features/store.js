import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movies/movieSlice";
import cartSlice from "./movies/cartSlice";
import searchSlice from "./movies/searchSlice";

export const store = configureStore({
    reducer:{
        movie:movieReducer,
        cart:cartSlice,
        search:searchSlice
    }
})