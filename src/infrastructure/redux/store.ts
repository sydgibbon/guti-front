import { configureStore } from "@reduxjs/toolkit";
import { computersStatusSlice } from "./Computers";
import { globalStatusSlice } from "./Global";

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  reducer: {
    globalStatus: globalStatusSlice.reducer,
    computersStatus: computersStatusSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
