import { useCallback, useState } from "react";
import { simcardsService } from "../../../domain/services/Simcards.service";

export const useGetAllSimcards = () => {
  const [data, setData] = useState<any>(undefined);
  const [error, setError] = useState<undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const get = useCallback(async () => {
    setIsLoading(true);
    try {
      const newSimcards = await simcardsService.getAllSimcards();

      setData(newSimcards);
    } catch (e: any) {
      setError(e);
      console.error(e);
    }
    setIsLoading(false);
  }, [setData, setIsLoading]);

  return { data, error, isLoading, get };
};
