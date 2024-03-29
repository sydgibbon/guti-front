import { useCallback, useState } from "react";
import { simcardsService } from "../../../domain/services/api/Simcards.service";

export const useGetLinesSelect = () => {
  const [data, setData] = useState<any>(undefined);
  const [error, setError] = useState<undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const get = useCallback(async () => {
    setIsLoading(true);
    try {
      const lineselect = await simcardsService.getLinesSelect();

      setData(lineselect);
    } catch (e: any) {
      setError(e);
      console.error(e);
    }
    setIsLoading(false);
  }, [setData, setIsLoading]);

  return { data, error, isLoading, get };
};
