import { configureStore } from "@reduxjs/toolkit";
import userReducer, { userActions } from "./user";
import historyReducer, { historyActions } from "./history";

export const store = configureStore({
  reducer: {
    user: userReducer,
    history: historyReducer,
  },
});

export { userActions, historyActions };
