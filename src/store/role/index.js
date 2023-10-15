// userRoleSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  role: null,
};

const userRoleSlice = createSlice({
  name: "userRole",
  initialState,
  reducers: {
    setUserRole: (state, action) => {
      state.role = action.payload;
    },
  },
});

export const { setUserRole } = userRoleSlice.actions;
export const selectUserRole = (state) => state.userRole.role;
export default userRoleSlice.reducer;
