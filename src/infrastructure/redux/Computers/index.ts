import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { ComputersIndexProps } from "../types";
import { computersData, computersDataReducer } from "./data";
import { computersStatus, computersStatusReducer } from "./status";

const initialState: ComputersIndexProps = {
  status: computersStatus,
  data: computersData,
};

export const computersStatusSlice = createSlice({
  name: "computersStatus",
  initialState,
  reducers: {
    ...computersStatusReducer,
    ...computersDataReducer,
  },
});

export const { setModalIsOpen } = computersStatusSlice.actions;

export const getModalIsOpen = (state: RootState) =>
  state.computersStatus.status.modalIsOpen
