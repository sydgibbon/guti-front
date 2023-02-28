import { Alert } from "@mui/material";
import { useEffect } from "react";
import { getNotification, setNotification } from "../../redux/Global";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

export default function Notification() {
  const notification = useAppSelector(getNotification);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (notification.status) {
      setTimeout(() => {
        dispatch(
          setNotification({ ...notification, status: !notification.status })
        );
      }, 4000);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [notification.status]);

  return (
    <Alert
      className={`fixed !transition-all !ease-in-out !duration-700 px-8 py-3 text-white bg-green-500 top-16 ${
        notification.status ? "right-8" : "-right-full"
      } `}
      severity={notification.type}
    >
      {notification.message}
    </Alert>
  );
}
