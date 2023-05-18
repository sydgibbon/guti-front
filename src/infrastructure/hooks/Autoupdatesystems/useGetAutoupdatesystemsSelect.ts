import { useCallback, useState } from "react";
import { autoupdatesystemsService } from "../../../domain/services/api/Autoupdatesystems.service";

export const useGetAutoupdatesystemsSelect = () => {
  const [data, setData] = useState<any>(undefined);
  const [error, setError] = useState<undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const get = useCallback(async () => {
    setIsLoading(true);
    try {
      const autoupdatesystems = await autoupdatesystemsService.getAutoupdatesystemsSelect();

      setData(autoupdatesystems);
    } catch (e: any) {
      setError(e);
      console.error(e);
    }
    setIsLoading(false);
  }, [setData, setIsLoading]);

  return { data, error, isLoading, get };
};
