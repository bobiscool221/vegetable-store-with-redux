import { createAsyncThunk } from "@reduxjs/toolkit";

const url =
  "https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json";

export const fetchVegetables = createAsyncThunk(
  "vegetables/fetchVegetables",
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Server Error!");
      }

      const data = await response.json();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
