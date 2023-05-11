import { useCallback, useState } from "react";
import { monitorsService } from "../../../domain/services/api/Monitors.service";

export const useCreateMonitors = () => {
  const [data, setData] = useState<any>(undefined);
  const [error, setError] = useState<undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const post = useCallback(async ( body: object ) => {
    setIsLoading(true);
    try {
      const newMonitors = await monitorsService.createMonitors(body)

      setData(newMonitors);
    } catch (e: any) {
      setError(e);
      console.error(e);
    }
    setIsLoading(false);
  }, [setData, setIsLoading]);

  return { data, error, isLoading, post };
};