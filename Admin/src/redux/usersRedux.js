import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    isFetching: false,
    error: false,
  },
  reducers : {
    getUserStart: (state) => {
        state.isFetching = true;
        state.error = false;
      },
      getUserSuccess: (state, action) => {
        state.isFetching = false;
        state.products = action.payload;
      },
      getUserFailure: (state) => {
        state.isFetching = false;
        state.error = true;
      },
  }
});
export const {
    getUserStart,
    getUserSuccess,
    getUserFailure
} = usersSlice.actions;

export default usersSlice.reducer;