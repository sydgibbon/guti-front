import { AlertColor } from "@mui/material";

export interface GlobalsData {}

export interface GlobalsStatus {
  notification: Notification;
}
export interface Notification {
  status: boolean;
  message: string;
  type: AlertColor;
}

export interface GlobalsIndexProps {
  status: GlobalsStatus;
  data: GlobalsData;
}
