import { useCallback, useState } from "react";
import { cablesService } from "../../../domain/services/api/Cable.service";

export const useGetCablestrandsSelect = () => {
  const [data, setData] = useState<any>(undefined);
  const [error, setError] = useState<undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const get = useCallback(async () => {
    setIsLoading(true);
    try {
      const cablestrands = await cablesService.getCablestrandsSelect();

      setData(cablestrands);
    } catch (e: any) {
      setError(e);
      console.error(e);
    }
    setIsLoading(false);
  }, [setData, setIsLoading]);

  return { data, error, isLoading, get };
};
