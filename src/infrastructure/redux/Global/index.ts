import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { GlobalsIndexProps } from "../types";
import { globalsData, globalsDataReducer } from "./data";
import { globalsStatus, globalsStatusReducer } from "./status";

const initialState: GlobalsIndexProps = {
  status: globalsStatus,
  data: globalsData,
};

export const globalStatusSlice = createSlice({
  name: "globalsStatus",
  initialState,
  reducers: {
    ...globalsStatusReducer,
    ...globalsDataReducer,
  },
});

export const { setNotification } = globalStatusSlice.actions;

export const successNotification =  () =>       
 setNotification({
  status: true,
  type: "success",
  message: "El formulario se ha cargado exitosamente.",
})

export const errorNotification =  () =>       
 setNotification({
  status: true,
  type: "error",
  message: "Error al cargar el formulario, por favor intentalo nuevamente.",
})

export const getNotification = (state: RootState) =>
  state.globalStatus.data.notification;
