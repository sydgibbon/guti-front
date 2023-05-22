import { useCallback, useState } from "react";
import { computersService } from "../../../domain/services/api/Computers.service";

export const useGetComputersByStates = () => {
  const [data, setData] = useState<any>(undefined);
  const [error, setError] = useState<undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const get = useCallback(async () => {
    setIsLoading(true);
    try {
      const ComputersByStates = await computersService.getComputersByStates();

      setData(ComputersByStates);
    } catch (e: any) {
      setError(e);
      console.error(e);
    }
    setIsLoading(false);
  }, [setData, setIsLoading]);

  return { data, error, isLoading, get };
};