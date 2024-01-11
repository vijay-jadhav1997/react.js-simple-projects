import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import productReducer from "./slices/productSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
  },
});

export default appStore;
