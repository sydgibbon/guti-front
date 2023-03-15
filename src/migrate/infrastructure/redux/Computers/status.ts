import { PayloadAction } from "@reduxjs/toolkit";
import { ComputersIndexProps, ComputersStatus } from "../types";

export const computersStatus: ComputersStatus = {
  modalIsOpen: false
};

export const computersStatusReducer = {
  setModalIsOpen: (
    state: ComputersIndexProps,
    action: PayloadAction<boolean>
  ) => {
    state.status.modalIsOpen = action.payload
  },
};