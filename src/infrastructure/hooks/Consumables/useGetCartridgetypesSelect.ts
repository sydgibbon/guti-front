import { useCallback, useState } from "react";
import { consumablesService } from "../../../domain/services/api/Consumables.service";

export const useGetConsumabletypesSelect = () => {
  const [data, setData] = useState<any>(undefined);
  const [error, setError] = useState<undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const get = useCallback(async () => {
    setIsLoading(true);
    try {
      const consumabletypes = await consumablesService.getConsumabletypesSelect();

      setData(consumabletypes);
    } catch (e: any) {
      setError(e);
      console.error(e);
    }
    setIsLoading(false);
  }, [setData, setIsLoading]);

  return { data, error, isLoading, get };
};
