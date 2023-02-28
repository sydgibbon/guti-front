import { AlertColor } from "@mui/material";

export interface GlobalsData {
  notification: Notification;
}

export interface GlobalsStatus {}
export interface Notification {
  status: boolean;
  message: string;
  type: AlertColor;
}

export interface GlobalsIndexProps {
  status: GlobalsStatus;
  data: GlobalsData;
}
