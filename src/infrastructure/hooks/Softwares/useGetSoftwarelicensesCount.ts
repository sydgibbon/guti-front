import { useCallback, useState } from "react";
import { softwaresService } from "../../../domain/services/api/Softwares.service";

export const useGetSoftwarelicensesCount = () => {
  const [data, setData] = useState<any>(undefined);
  const [error, setError] = useState<undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const get = useCallback(async () => {
    setIsLoading(true);
    try {
      const softwarelicenses = await softwaresService.getSoftwarelicensesCount();

      setData(softwarelicenses);
    } catch (e: any) {
      setError(e);
      console.error(e);
    }
    setIsLoading(false);
  }, [setData, setIsLoading]);

  return { data, error, isLoading, get };
};