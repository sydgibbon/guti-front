import { useState } from "react";
import { computersService } from "../../../domain/services/Computers.service";
import { ComputerDTO } from "../../http/dto/ComputerDTO";
import { CreateComputerProps } from "./types";

export const useCreateComputer = () => {
  const [data, setData] = useState<ComputerDTO | null>(null);
  const [error, setError] = useState<undefined>();
  const [isLoading, setIsLoading] = useState(false);

  const post = async (createComputerProps: CreateComputerProps) => {
    console.log("useCallback");
    const { data } = createComputerProps;

    setIsLoading(true);
    try {
      const newComputer = await computersService.createComputer(data);

      setData(newComputer);
    } catch (e: any) {
      setError(e);
      console.error(e);
    }
    setIsLoading(false);
  };

  return { data, error, isLoading, post };
};
