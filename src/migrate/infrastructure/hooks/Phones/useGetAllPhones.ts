import { useCallback, useState } from "react";
import { phonesService } from "../../../domain/services/Phones.service";

export const useGetAllPhones = () => {
  const [data, setData] = useState<any>();
  const [error, setError] = useState<undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const get = useCallback(async () => {
    setIsLoading(true);
    try {
      const phones = await phonesService.getAllphones();
      console.log("🚀 ~ file: useGetAllPhones.ts:13 ~ get ~ phones:", phones)

      setData(phones);
    } catch (e: any) {
      setError(e);
      console.error(e);
    }
    setIsLoading(false);
  }, [setData, setIsLoading]);

  return { data, error, isLoading, get };
};
