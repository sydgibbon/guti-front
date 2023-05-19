import { useCallback, useState } from "react";
import { monitorsService } from "../../../domain/services/api/Monitors.service";

export const useGetMonitorsByManufacturers = () => {
  const [data, setData] = useState<any>(undefined);
  const [error, setError] = useState<undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const get = useCallback(async () => {
    setIsLoading(true);
    try {
      const MonitorsByManufacturers = await monitorsService.getMonitorsByManufacturers();

      setData(MonitorsByManufacturers);
    } catch (e: any) {
      setError(e);
      console.error(e);
    }
    setIsLoading(false);
  }, [setData, setIsLoading]);

  return { data, error, isLoading, get };
};