import { useCallback, useState } from "react";
import { PassiveDevicesService } from "../../../domain/services/api/PassiveDevices.service";

export const useGetAllPassiveDevices = () => {
  const [data, setData] = useState<any>(undefined);
  const [error, setError] = useState<undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const get = useCallback(async () => {
    setIsLoading(true);
    try {
      const passiveDevices = await PassiveDevicesService.getAllPassiveDevices();
      setData(passiveDevices);
    } catch (e: any) {
      setError(e);
      console.error(e);
    }
    setIsLoading(false);
  }, [setData, setIsLoading]);

  return { data, error, isLoading, get };
};
