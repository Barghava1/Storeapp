import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartslice"
import favReducer from "./favslice";

const appStore=configureStore({
    reducer:{
        cart:cartReducer,
        fav:favReducer,
    }
});

export default appStore;