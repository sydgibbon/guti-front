import { useCallback, useState } from "react";
import { unmanagedsService } from "../../../domain/services/Unmanageds.service";

export const useGetAllUnmanageds = () => {
  const [data, setData] = useState<any>(undefined);
  const [error, setError] = useState<undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const get = useCallback(async () => {
    setIsLoading(true);
    try {
      const unmanageds = await unmanagedsService.getAllUnmanageds();

      setData(unmanageds);
    } catch (e: any) {
      setError(e);
      console.error(e);
    }
    setIsLoading(false);
  }, [setData, setIsLoading]);

  return { data, error, isLoading, get };
};
