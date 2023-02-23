import { AlertType } from "../../domain/models/AlertsTypes"
import { setNotification } from "../redux/Global"
import { useAppDispatch } from "../redux/hooks"

const useShowError = () => {
  const dispatch = useAppDispatch()

  const get = (messageError : string) => {
    dispatch( 
      setNotification({
        status: true,
        message: messageError ,
        type: AlertType.ERROR
      })
    )
  }

  return { get }

}

export default useShowError;
