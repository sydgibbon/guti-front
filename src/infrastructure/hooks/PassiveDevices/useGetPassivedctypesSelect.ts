import { useCallback, useState } from "react";
import { PassiveDevicesService } from "../../../domain/services/api/PassiveDevices.service";

export const useGetPassivedctypesSelect = () => {
  const [data, setData] = useState<any>(undefined);
  const [error, setError] = useState<undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const get = useCallback(async () => {
    setIsLoading(true);
    try {
      const passivedctypes = await PassiveDevicesService.getPassivedctypesSelect();

      setData(passivedctypes);
    } catch (e: any) {
      setError(e);
      console.error(e);
    }
    setIsLoading(false);
  }, [setData, setIsLoading]);

  return { data, error, isLoading, get };
};
