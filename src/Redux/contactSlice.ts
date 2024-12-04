import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ContactFormState {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  website: string;
  details: string;
}

const initialState: ContactFormState = {
  name: "",
  email: "",
  projectType: "",
  budget: "",
  website: "",
  details: "",
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    updateField: (
      state,
      action: PayloadAction<{ field: keyof ContactFormState; value: string }>
    ) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    resetForm: () => initialState,
  },
});

export const { updateField, resetForm } = contactSlice.actions;
export default contactSlice.reducer;
