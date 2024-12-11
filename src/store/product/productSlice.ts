import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "../../App";
// import { RootState } from "../store";

// Define a type for the slice state
interface ProductState {
  productList: ProductType[];
  sepet: ProductType[];
}

// Define the initial state using that type
const initialState: ProductState = {
  productList: [],
  sepet: [],
};

export const productSlice = createSlice({
  name: "product",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setProductList: (state, action: PayloadAction<ProductType[]>) => {
      state.productList = action.payload;
    },
    sepeteEkle: (state, action: PayloadAction<ProductType>) => {
      state.sepet.push(action.payload);
    },
    sepettenCikar: (state, action: PayloadAction<string>) => {
      state.sepet = state.sepet.filter((sp) => sp.id !== action.payload);
    },
  },
});

export const { setProductList, sepeteEkle, sepettenCikar } =
  productSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.product.value;

export default productSlice.reducer;
