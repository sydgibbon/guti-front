import { useCallback, useState } from "react";
import { DevicesData } from "../../../domain/models/forms/DevicesData";
import { devicesService } from "../../../domain/services/api/Devices.service";

const useCreateDevice = () => {
  const [data, setData] = useState<any>(undefined);
  const [error, setError] = useState<undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const post = useCallback(
    async (deviceData: DevicesData) => {
      setIsLoading(true);
      try {
        const newDevice = await devicesService.createDevices(deviceData);

        setData(newDevice);
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

export default useCreateDevice;
