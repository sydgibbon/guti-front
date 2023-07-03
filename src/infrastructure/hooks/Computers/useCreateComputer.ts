import { useCallback, useState } from "react";
import { computersService } from "../../../domain/services/api/Computers.service"; 
import { ComputerData } from "../../../domain/models/forms/ComputerData";

const useCreateComputer = () => {
  const [data, setData] = useState<any>(undefined);
  const [error, setError] = useState<undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const post = useCallback(
    async (computerData: ComputerData) => {
      setIsLoading(true);
      try {
        const newComputer = await computersService.createComputer(computerData);

        setData(newComputer);
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

export default useCreateComputer;
