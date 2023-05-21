import { useCallback, useState } from "react";
import { printersService } from "../../../domain/services/api/Printers.service";

export const useGetPrintertypesSelect = () => {
  const [data, setData] = useState<any>(undefined);
  const [error, setError] = useState<undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const get = useCallback(async () => {
    setIsLoading(true);
    try {
      const printertypes = await printersService.getPrintertypesSelect();

      setData(printertypes);
    } catch (e: any) {
      setError(e);
      console.error(e);
    }
    setIsLoading(false);
  }, [setData, setIsLoading]);

  return { data, error, isLoading, get };
};
