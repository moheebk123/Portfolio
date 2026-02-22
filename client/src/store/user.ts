import { createSlice } from "@reduxjs/toolkit";

const initialState: number | null = null;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (_, action) => (action.payload ? action.payload : null),
  },
});

export const userActions = userSlice.actions;

const userReducer = userSlice.reducer;
export default userReducer;
