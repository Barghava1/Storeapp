import { createSlice } from "@reduxjs/toolkit";

const cartslice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    additem: (state, action) => {
        if (!action.payload || !action.payload.id) {
          console.error("Invalid product dispatched:", action.payload);
          return;
        }
        state.items.push(action.payload);
      },
      
    removeitems: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearcart: (state) => {
      state.items = [];
    },
  },
});

export const { additem, removeitems, clearcart } = cartslice.actions;
export default cartslice.reducer;
