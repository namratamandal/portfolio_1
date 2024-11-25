import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./blogSlice"; // Import the blog slice reducer

// Configure the Redux store with the blog reducer
export const store = configureStore({
  reducer: {
    blog: blogReducer, // Key for the blog state in the Redux store
  },
});

// Define types for RootState and AppDispatch for TypeScript support
// RootState: Represents the overall state of the Redux store
export type RootState = ReturnType<typeof store.getState>;
// AppDispatch: Represents the type of the Redux store's dispatch method
export type AppDispatch = typeof store.dispatch;
