import { createSlice } from "@reduxjs/toolkit";

interface History {
  user?: string;
  response?: string;
}

const initialState: History[] = [];

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    setHistory: (_, action) => (action.payload ? action.payload : []),
    addHistory: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const historyActions = historySlice.actions;

const historyReducer = historySlice.reducer;
export default historyReducer;
