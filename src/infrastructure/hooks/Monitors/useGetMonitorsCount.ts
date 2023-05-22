import { useCallback, useState } from "react";
import { monitorsService } from "../../../domain/services/api/Monitors.service";

export const useGetMonitorsCount = () => {
  const [data, setData] = useState<any>(undefined);
  const [error, setError] = useState<undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const get = useCallback(async () => {
    setIsLoading(true);
    try {
      const MonitorsCount = await monitorsService.getMonitorsCount();

      setData(MonitorsCount);
    } catch (e: any) {
      setError(e);
      console.error(e);
    }
    setIsLoading(false);
  }, [setData, setIsLoading]);

  return { data, error, isLoading, get };
};