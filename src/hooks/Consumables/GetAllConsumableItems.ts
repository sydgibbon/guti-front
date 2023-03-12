import { useCallback, useState } from "react";
import { consumableItemsService } from "../../migrate/domain/services/ConsumableItems.service";

export const useGetAllConsumableItems = () => {
  const [data, setData] = useState<any>(undefined);
  const [error, setError] = useState<undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const get = useCallback(async () => {
    setIsLoading(true);
    try {
      const newConsumableItems =
        await consumableItemsService.getAllConsumableItems();

      setData(newConsumableItems);
    } catch (e: any) {
      setError(e);
      console.error(e);
    }
    setIsLoading(false);
  }, [setData, setIsLoading]);

  return { data, error, isLoading, get };
};
