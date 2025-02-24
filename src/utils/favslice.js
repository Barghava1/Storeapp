import { createSlice } from "@reduxjs/toolkit";
const fav=createSlice({
    name:"fav",
    initialState:{
        items:[],
    },
    reducers: {
        addfav: (state, action) => {
            if (!action.payload || !action.payload.id) {
              console.error("Invalid product dispatched:", action.payload);
              return;
            }
            state.items.push(action.payload);
          },
          
        removefav: (state, action) => {
          state.items = state.items.filter((item) => item.id !== action.payload);
        },
        clearfav: (state) => {
          state.items = [];
        },
      },
    });
export const {addfav,removefav,clearfav}=fav.actions;
export default fav.reducer;
 