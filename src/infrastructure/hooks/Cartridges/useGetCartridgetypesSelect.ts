import { useCallback, useState } from "react";
import { cartridgesService } from "../../../domain/services/api/Cartridges.service";

export const useGetCartridgetypesSelect = () => {
  const [data, setData] = useState<any>(undefined);
  const [error, setError] = useState<undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const get = useCallback(async () => {
    setIsLoading(true);
    try {
      const cartridgetypes = await cartridgesService.getCartridgetypesSelect();

      setData(cartridgetypes);
    } catch (e: any) {
      setError(e);
      console.error(e);
    }
    setIsLoading(false);
  }, [setData, setIsLoading]);

  return { data, error, isLoading, get };
};
