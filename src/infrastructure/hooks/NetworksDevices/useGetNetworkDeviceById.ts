import { useCallback, useState } from "react";
import { networkDevicesService } from "../../../domain/services/api/NetworkDevices.service";

export const useGetNetworkDeviceById = () => {
  const [data, setData] = useState<any>(undefined);
  const [error, setError] = useState<undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const get = useCallback(async (id: number) => {
    setIsLoading(true);
    try {
      const networkequipments = await networkDevicesService.getNetworkDeviceById(id);

      setData(networkequipments);
    } catch (e: any) {
      setError(e);
      console.error(e);
    }
    setIsLoading(false);
  }, [setData, setIsLoading]);

  return { data, error, isLoading, get };
};