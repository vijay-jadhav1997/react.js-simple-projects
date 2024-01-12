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
      return {
        users: state.users.filter((user) => user.id !== action.payload),
      };
    },
    clearAllUsers: () => {
      return { users: [] };
    },
  },
});

export const { addUser, removeUser, clearAllUsers } = userSlice.actions;

export default userSlice.reducer;
