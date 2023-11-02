import { useEffect } from "react";
import useShowError from "../../../../hooks/useShowError";
import { MessageError } from "../../../../utils/MessagesErrors";
import TableComponent from "../../../Table/Table";
import { columns } from "./TableData";
import { useGetAllNetworkDevices } from "../../../../hooks/NetworksDevices/useGetAllNetworkDevices";
import SearchCard from "../../assets/SearchCard";
import { useTranslation } from 'react-i18next';

export default function TableNetworkDevices() {
  const networkDevices = useGetAllNetworkDevices();
  const { t } = useTranslation('TableTitles', { keyPrefix: 'NetworkDevices' });

  const showError = useShowError();

  useEffect(() => {
    networkDevices.get();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (networkDevices.error) {
      showError.get(MessageError.FETCH_FAILED);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [networkDevices.error]);

  const translatedColumns = columns?.map((column) => {
    return {...column,
    name: t(column.name)}
  })

  return (
    <div className="mx-4 my-4 border rounded search-card border-secondary-dark">
      <SearchCard />
      <TableComponent
        progressPending={networkDevices.isLoading}
        columns={translatedColumns}
        rows={networkDevices.data}
      />
    </div>
  );
}
