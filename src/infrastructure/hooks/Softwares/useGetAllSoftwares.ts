import { useCallback, useState } from "react";
import { softwaresService } from "../../../domain/services/api/Softwares.service";


export const useGetAllSoftwares = () => {
  const [data, setData] = useState<any>(undefined);
  const [error, setError] = useState<undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const get = useCallback(async () => {
    setIsLoading(true);
    try {
      const newSoftwares = await softwaresService.getAllSoftwares();

      setData(newSoftwares);
    } catch (e: any) {
      setError(e);
      console.error(e);
    }
    setIsLoading(false);
  }, [setData, setIsLoading]);

  return { data, error, isLoading, get };
};
