import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import userReducer from "./slice/userSlice";
import Categoriesreducer from "./slice/CategoriesSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    categories:Categoriesreducer
  },
});
