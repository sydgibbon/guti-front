import { useCallback, useState } from "react";
import { simcardsService } from "../../../domain/services/api/Simcards.service";

export const useGetAllSimcards = () => {
  const [data, setData] = useState<any>(undefined);
  const [error, setError] = useState<undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const get = useCallback(async () => {
    setIsLoading(true);
    try {
      const simcards = await simcardsService.getAllSimcards();

      setData(simcards);
    } catch (e: any) {
      setError(e);
      console.error(e);
    }
    setIsLoading(false);
  }, [setData, setIsLoading]);

  return { data, error, isLoading, get };
};
