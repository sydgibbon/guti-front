import { useCallback, useState } from "react";
import { pdusService } from "../../../domain/services/api/Pdus.service";

export const useGetPdutypesSelect = () => {
  const [data, setData] = useState<any>(undefined);
  const [error, setError] = useState<undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const get = useCallback(async () => {
    setIsLoading(true);
    try {
      const pdutypes = await pdusService.getPdutypesSelect();

      setData(pdutypes);
    } catch (e: any) {
      setError(e);
      console.error(e);
    }
    setIsLoading(false);
  }, [setData, setIsLoading]);

  return { data, error, isLoading, get };
};
