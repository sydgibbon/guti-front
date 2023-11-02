import { useEffect } from "react";
import useShowError from "../../../../hooks/useShowError";
import { MessageError } from "../../../../utils/MessagesErrors";
import TableComponent from "../../../Table/Table";
import { columns } from "./TableData";
import { useGetAllDevices } from "../../../../hooks/Devices/GetAllDevices";
import SearchCard from "../../assets/SearchCard";
import { useTranslation } from 'react-i18next';

export default function TableDevices() {
  const devices = useGetAllDevices();
  const { t } = useTranslation('TableTitles', { keyPrefix: 'Devices' });

  const showError = useShowError();

  useEffect(() => {
    devices.get();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (devices.error) {
      showError.get(MessageError.FETCH_FAILED);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [devices.error]);

  const translatedColumns = columns?.map((column) => {
    return {...column,
    name: t(column.name)}
  })

  return (
    <div className="mx-4 my-4 border rounded search-card border-secondary-dark">
      <SearchCard />
      <TableComponent
        progressPending={devices.isLoading}
        columns={translatedColumns}
        rows={devices.data}
      />
    </div>
  );
}
