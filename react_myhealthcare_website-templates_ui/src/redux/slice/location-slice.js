import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  pincode: "",
  lat: "",
  long: "",
};

export const locationSlice = createSlice({
  name: "location",
  initialState: {
    value: initialStateValue,
  },
  reducers: {
    locationReducer: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { locationReducer } = locationSlice.actions;
export default locationSlice.reducer;
