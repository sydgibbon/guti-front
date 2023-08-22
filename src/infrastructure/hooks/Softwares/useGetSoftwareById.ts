import { useCallback, useState } from "react";
import { softwaresService } from "../../../domain/services/api/Softwares.service";

export const useGetSoftwareById = () => {
  const [data, setData] = useState<any>(undefined);
  const [error, setError] = useState<undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const get = useCallback(async (id: number) => {
    setIsLoading(true);
    try {
      const softwares = await softwaresService.getSoftwareById(id);

      setData(softwares);
    } catch (e: any) {
      setError(e);
      console.error(e);
    }
    setIsLoading(false);
  }, [setData, setIsLoading]);

  return { data, error, isLoading, get };
};