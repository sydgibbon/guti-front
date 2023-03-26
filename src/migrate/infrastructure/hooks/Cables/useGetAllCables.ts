import { useCallback, useState } from "react";
import { cablesService } from "../../../domain/services/Cable.service";

export const useGetAllCables = () => {
  const [data, setData] = useState<any>(undefined);
  const [error, setError] = useState<undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const get = useCallback(async () => {
    setIsLoading(true);
    try {
      const cables = await cablesService.getAllCables();
      console.log("🚀 ~ file: useGetAllCables.ts:13 ~ get ~ cables:", cables)

      setData(cables);
    } catch (e: any) {
      setError(e);
      console.error(e);
    }
    setIsLoading(false);
  }, [setData, setIsLoading]);

  return { data, error, isLoading, get };
};
