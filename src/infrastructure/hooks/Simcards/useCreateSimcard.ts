import { useCallback, useState } from "react";
import { SimCardData } from "../../../domain/models/forms/SimCardData";
import { simcardsService } from "../../../domain/services/api/Simcards.service";

const useCreateSimcard = () => {
  const [data, setData] = useState<any>(undefined);
  const [error, setError] = useState<undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const post = useCallback(
    async (simcardData: SimCardData) => {
      setIsLoading(true);
      try {
        const newSimcard = await simcardsService.createSimcard(simcardData);

        setData(newSimcard);
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

export default useCreateSimcard;