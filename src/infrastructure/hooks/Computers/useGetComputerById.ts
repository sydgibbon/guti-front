import { useCallback, useState } from "react";
import { computersService } from "../../../domain/services/api/Computers.service";

export const useGetComputerById = () => {
  const [data, setData] = useState<any>(undefined);
  const [error, setError] = useState<undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const get = useCallback(async (id: number) => {
    setIsLoading(true);
    try {
      const computertypes = await computersService.getComputerById(id);

      setData(computertypes);
    } catch (e: any) {
      setError(e);
      console.error(e);
    }
    setIsLoading(false);
  }, [setData, setIsLoading]);

  return { data, error, isLoading, get };
};
