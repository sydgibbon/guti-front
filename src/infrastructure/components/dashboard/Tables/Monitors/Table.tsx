import { useEffect } from "react";
import { useGetAllMonitors } from "../../../../hooks/Monitors/useGetAllMonitors";
import useShowError from "../../../../hooks/useShowError";
import { MessageError } from "../../../../utils/MessagesErrors";
import TableComponent from "../../../Table/Table";
import { columns } from "./TableData";
import SearchCard from "../../assets/SearchCard";
import { useTranslation } from 'react-i18next';

export default function TableMonitors() {
  const monitors = useGetAllMonitors();
  const { t } = useTranslation('TableTitles', { keyPrefix: 'Monitors' });

  const showError = useShowError();

  useEffect(() => {
    monitors.get();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (monitors.error) {
      showError.get(MessageError.FETCH_FAILED);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [monitors.error]);

  const translatedColumns = columns?.map((column) => {
    return {...column,
    name: t(column.name)}
  })

  return (
    <div className="mx-4 my-4 border rounded search-card border-secondary-dark">
      <SearchCard />
      <TableComponent
        progressPending={monitors.isLoading}
        columns={translatedColumns}
        rows={monitors.data}
      />
    </div>
  );
}
