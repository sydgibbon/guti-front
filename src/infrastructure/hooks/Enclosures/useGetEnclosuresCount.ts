import { useCallback, useState } from "react";
import { enclosuresService } from "../../../domain/services/api/Enclosures.service";

export const useGetEnclosuresCount = () => {
  const [data, setData] = useState<any>(undefined);
  const [error, setError] = useState<undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const get = useCallback(async () => {
    setIsLoading(true);
    try {
      const enclosures = await enclosuresService.getEnclosuresCount();

      setData(enclosures);
    } catch (e: any) {
      setError(e);
      console.error(e);
    }
    setIsLoading(false);
  }, [setData, setIsLoading]);

  return { data, error, isLoading, get };
};