import { useCallback, useState } from "react";
import { softwaresService } from "../../../domain/services/api/Softwares.service";
import { SoftwareData } from "../../../domain/models/forms/SoftwareData";

export const useCreateSoftware = () => {
  const [data, setData] = useState<any>(undefined);
  const [error, setError] = useState<undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const post = useCallback(
    async (softwareData: SoftwareData) => {
      setIsLoading(true);
      try {
        const newSoftware = await softwaresService.createSoftware(softwareData)

        setData(newSoftware);
      } catch (e: any) {
        setError(e);
        console.error(e);
      }
      setIsLoading(false);
    }, [setData, setIsLoading]);

  return { data, error, isLoading, post };
};