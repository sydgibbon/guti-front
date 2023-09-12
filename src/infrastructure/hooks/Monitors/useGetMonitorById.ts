import { useCallback, useState } from "react";
import { monitorsService } from "../../../domain/services/api/Monitors.service";

export const useGetMonitorById = () => {
  const [data, setData] = useState<any>(undefined);
  const [error, setError] = useState<undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const get = useCallback(async (id: number) => {
    setIsLoading(true);
    try {
      const MonitorById = await monitorsService.getMonitorById(id);

      setData(MonitorById);
    } catch (e: any) {
      setError(e);
      console.error(e);
    }
    setIsLoading(false);
  }, [setData, setIsLoading]);

  return { data, error, isLoading, get };
};