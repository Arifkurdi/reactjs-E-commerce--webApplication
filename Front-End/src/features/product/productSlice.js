import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    total: 0,
    seeProduct: {},
    wishlist: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.products.map((product) => {
        product.id == action.payload
          ? state.products.splice(state.products.indexOf(product), 1)
          : (product.id = product.id);
      });
    },
    calcPrice: (state, info) => {
      state.products.findIndex((product) => {
        if (product.id == info.payload.id) {
          if (info.payload.method == "plus") {
            state.products[state.products.indexOf(product)].price =
              state.products[state.products.indexOf(product)].orgPrice *
              info.payload.quan;
          } else {
            state.products[state.products.indexOf(product)].price -=
              state.products[state.products.indexOf(product)].orgPrice;
          }
        }
      });
    },
    allPrices: (state) => {
      state.total = 0;
      state.products.map((product) => {
        state.total += state.products[state.products.indexOf(product)].price;
      });
    },
    sendProduct: (state, action) => {
      state.seeProduct = { ...action.payload };
    },
    sendToWish: (state, action) => {
      state.wishlist.push(action.payload);
    },
  },
});

export const {
  addProduct,
  removeProduct,
  calcPrice,
  allPrices,
  sendProduct,
  sendToWish,
} = productSlice.actions;

export default productSlice.reducer;

export const selectProducts = (state) => state.product.products;
export const selectTotal = (state) => state.product.total;
export const selectSeeProduct = (state) => state.product.seeProduct;
export const selectWished = (state) => state.product.wishlist;
