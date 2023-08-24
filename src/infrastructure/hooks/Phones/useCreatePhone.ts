import { useCallback, useState } from "react";
import { PhoneData } from "../../../domain/models/forms/PhoneData";
import { phonesService } from "../../../domain/services/api/Phones.service";

const useCreatePhone = () => {
  const [data, setData] = useState<any>(undefined);
  const [error, setError] = useState<undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const post = useCallback(
    async (phoneData: PhoneData) => {
      setIsLoading(true);
      try {
        const newPhone = await phonesService.createPhone(phoneData);

        setData(newPhone);
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

export default useCreatePhone;