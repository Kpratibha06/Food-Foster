import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'

const appStore = configureStore(
    //add slices
 {   
    // here the word is reducer because when we are writing for a store it is a one reducer for whole app and it will contain multiple small reducer for that
    reducer: {
        cart: cartReducer
    },}
);

export default appStore;