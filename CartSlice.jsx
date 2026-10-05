import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: []
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addItem: (state, action) => {
      // Find if the item already exists in the cart based on its unique id
      const existingItem = state.items.find(item => item.id === action.payload.id);
      
      if (existingItem) {
        // If it exists, increment its quantity
        existingItem.quantity += 1;
      } else {
        // Otherwise, add the new item to the array with a starting quantity of 1
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    removeItem: (state, action) => {
      // Filter out the item whose id matches action.payload (or action.payload.id if an object is passed)
      // Supporting both patterns for flexibility; here matching your specific comment: action.payload.id
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      
      if (existingItem) {
        // Update the item's quantity directly
        existingItem.quantity = quantity;
      }
    }
  }
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
