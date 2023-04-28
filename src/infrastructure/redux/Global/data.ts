import { PayloadAction } from "@reduxjs/toolkit";
import { GlobalsData, GlobalsIndexProps, Notification } from "../types";

const initialNotification: Notification = {
  status: false,
  message: "string",
  type: "success",
};

export const globalsData: GlobalsData = {
  notification: initialNotification,
};

export const globalsDataReducer = {
  setNotification: (
    state: GlobalsIndexProps,
    action: PayloadAction<Notification>
  ) => {
    state.data.notification = action.payload
  },
};
