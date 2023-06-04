import { useCallback, useState } from "react";
import { ComputerDTO } from "../../../domain/dto/ComputerDTO";
import { computersService } from "../../../domain/services/api/Computers.service"; 

const useCreateComputer = () => {
  const [data, setData] = useState<any>(undefined);
  const [error, setError] = useState<undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const post = useCallback(
    async (computerData: ComputerDTO) => {
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
