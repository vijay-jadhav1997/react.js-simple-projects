import { createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
  SUCCESS: "success",
  ERROR: "error",
  Loading: "loading",
});

const productSlice = createSlice({
  name: "pruducts",
  initialState: {
    data: [],
    status: STATUSES.SUCCESS,
  },
  reducers: {
    setProducts(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setProducts, setStatus } = productSlice.actions;

export default productSlice.reducer;

export function fetchProducts() {
  return async function fetchProductsThunk(dispatch) {
    dispatch(setStatus(STATUSES.Loading));
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const productsData = await response.json();
      dispatch(setProducts(productsData));
      dispatch(setStatus(STATUSES.SUCCESS));
    } catch (error) {
      console.log(error);
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
