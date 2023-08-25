import { useCallback, useState } from "react";
import { CableData } from "../../../domain/models/forms/CableData";
import { cablesService } from "../../../domain/services/api/Cable.service";

const useCreateCable = () => {
  const [data, setData] = useState<any>(undefined);
  const [error, setError] = useState<undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const post = useCallback(
    async (cableData: CableData) => {
      setIsLoading(true);
      try {
        const newCable = await cablesService.createCable(cableData);

        setData(newCable);
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

export default useCreateCable;
