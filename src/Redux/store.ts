import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./blogSlice";
import contactReducer from "./contactSlice"; 

export const store = configureStore({
  reducer: {
    blog: blogReducer,
    contact: contactReducer, 
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
