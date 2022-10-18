import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    isLoading: false,
  },

  reducers: {
    getUsersFetch: (state) => {
      state.isLoading = true;
    },

    getUsersSuccess: (state, action) => {
      state.users = action.payload;
      state.isLoading = false;
    },

    deleteUser: (state, action) => {
      const itemId = action.payload;
      state.users = state.users.filter((user) => user.id !== itemId);
    },
  },
});

export const { getUsersFetch, getUsersSuccess, deleteUser } =
  usersSlice.actions;

export default usersSlice.reducer;
