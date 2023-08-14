import { useCallback, useState } from "react";
import { CartridgeData } from "../../../domain/models/forms/CartridgesData";
import { cartridgesService } from "../../../domain/services/api/Cartridges.service";

const useCreateCartridge = () => {
  const [data, setData] = useState<any>(undefined);
  const [error, setError] = useState<undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const post = useCallback(
    async (cartridgeData: CartridgeData) => {
      setIsLoading(true);
      try {
        const newCartridge = await cartridgesService.createCartridge(cartridgeData);

        setData(newCartridge);
      } catch (e: any) {
        setError(e);
        console.error(e);
      }
      setIsLoading(false);
    },
    [setData, setIsLoading]
  );

  return { data, error, isLoading, post };
};

export default useCreateCartridge;