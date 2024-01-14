import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
  },
  reducers: {
    addUser(state, action) {
      state.users.push(action.payload);
    },
    removeUser: function (state, action) {
      state.users.splice(action.payload, 1);
      // return {
      //   users: state.users.filter((user) => user !== action.payload),
      // };
    },
    clearAllUsers: (state) => {
      state.users.length = 0;
      // return { users: [] };
    },
  },
});

export const { addUser, removeUser, clearAllUsers } = userSlice.actions;

export default userSlice.reducer;
