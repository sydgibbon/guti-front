import { PayloadAction } from "@reduxjs/toolkit";
import { ComputersIndexProps, ComputersStatus } from "../types";

export const computersStatus: ComputersStatus = {
  popupIsOpen: false
};

export const computersStatusReducer = {
  setPopupIsOpen: (
    state: ComputersIndexProps,
    action: PayloadAction<boolean>
  ) => {
    state.status.popupIsOpen = action.payload
  },
};