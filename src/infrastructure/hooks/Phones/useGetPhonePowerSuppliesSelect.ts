import { useCallback, useState } from "react";
import { phonesService } from "../../../domain/services/api/Phones.service";

export const useGetPhonePowerSuppliesSelect = () => {
  const [data, setData] = useState<any>(undefined);
  const [error, setError] = useState<undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const get = useCallback(async () => {
    setIsLoading(true);
    try {
      const phonepowersupplytypes = await phonesService.getPhonepowersuppliesSelect();

      setData(phonepowersupplytypes);
    } catch (e: any) {
      setError(e);
      console.error(e);
    }
    setIsLoading(false);
  }, [setData, setIsLoading]);

  return { data, error, isLoading, get };
};
