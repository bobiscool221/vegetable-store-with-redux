import { createSlice } from "@reduxjs/toolkit";

import { fetchVegetables } from "./VegetablesThunks";

interface VegetableType {
  id: number;
  name: string;
  price: number;
  image?: string;
  category?: string;
  amount: number;
}

interface VegetablesState {
  vegetables: VegetableType[];
  isLoading: boolean;
}

const initialState: VegetablesState = {
  vegetables: [],
  isLoading: false,
};

export const vegetablesSlice = createSlice({
  name: "vegetables",
  initialState,
  reducers: {
    findVegetable(state, action) {
      const findedVegetable = state.vegetables.find(
        (item) => item.id === action.payload.id
      );
      console.log(findedVegetable);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchVegetables.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchVegetables.fulfilled, (state, action) => {
        state.isLoading = false;
        state.vegetables = action.payload;
      })
      .addCase(fetchVegetables.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { findVegetable } = vegetablesSlice.actions;
export default vegetablesSlice.reducer;
