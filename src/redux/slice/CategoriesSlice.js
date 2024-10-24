import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BaseUrl } from "../../config";

export const fetchCategories = createAsyncThunk("fetchCategories", async () => {
  try {
    const response = await axios.get(`${BaseUrl}/api/getall/categories`);
    return response.data;
  } catch (error) {
    // console.log("error",error)
    throw error;
  }
});

export const fetchCategoriesById = createAsyncThunk(
  "getAllCategoriesById",
  async (id) => {
    try {
      const response = await axios.get(
        `${BaseUrl}/get/specific/categories/${id}`
      );
      
      return response.data;
    } catch (error) {
      // console.log(error)
      throw error;
    }
  }
);

const CategoriesSlice = createSlice({
  name: "Categories",
  initialState: {
    data: null,
    isLoading: false,
    isError: false,
    singleCategory: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchCategories.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });
    builder.addCase(fetchCategoriesById.fulfilled, (state, action) => {
      state.singleCategory = action.payload;
    });
  },
});

export default CategoriesSlice.reducer;
