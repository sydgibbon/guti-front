import { AlertType } from "../../domain/models/AlertsTypes";
import { setNotification } from "../redux/Global";
import { useAppDispatch } from "../redux/hooks";

const useShowNotification = () => {
  const dispatch = useAppDispatch();

  const get = (message: string, alertType?: AlertType) => {
    dispatch(
      setNotification({
        status: true,
        message,
        type: alertType ?? AlertType.ERROR,
      })
    );
  };

  return { get };
};

export default useShowNotification;
