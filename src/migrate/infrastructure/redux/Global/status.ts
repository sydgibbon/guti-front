import { PayloadAction } from "@reduxjs/toolkit";
import { GlobalsIndexProps, GlobalsStatus, Notification } from "../types";

const initialNotification: Notification = {
  status: false,
  message: "string",
  type: "success",
};

export const globalsStatus: GlobalsStatus = {
  notification: initialNotification,
};

export const globalsStatusReducer = {
  setNotification: (
    state: GlobalsIndexProps,
    action: PayloadAction<Notification>
  ) => {
    state.status.notification = action.payload;
  },
};
