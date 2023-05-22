import { useCallback, useState } from "react";
import { racksService } from "../../../domain/services/api/Racks.service";

export const useGetDcroomsSelect = () => {
  const [data, setData] = useState<any>(undefined);
  const [error, setError] = useState<undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const get = useCallback(async () => {
    setIsLoading(true);
    try {
      const dcRooms = await racksService.getDcroomsSelect();

      setData(dcRooms);
    } catch (e: any) {
      setError(e);
      console.error(e);
    }
    setIsLoading(false);
  }, [setData, setIsLoading]);

  return { data, error, isLoading, get };
};
