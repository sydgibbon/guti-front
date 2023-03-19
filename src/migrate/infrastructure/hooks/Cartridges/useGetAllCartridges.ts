import { useCallback, useState } from "react";
import { cartridgesService } from "../../../domain/services/Cartridges.service";

export const useGetAllCartridges = () => {
  const [data, setData] = useState<any>(undefined);
  const [error, setError] = useState<undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const get = useCallback(async () => {
    setIsLoading(true);
    try {
      const cartridges = await cartridgesService.getAllCartrdiges();

      setData(cartridges);
    } catch (e: any) {
      setError(e);
      console.error(e);
    }
    setIsLoading(false);
  }, [setData, setIsLoading]);

  return { data, error, isLoading, get };
};
