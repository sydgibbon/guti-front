import { useEffect } from "react";
import useShowError from "../../../../hooks/useShowError";
import { MessageError } from "../../../../utils/MessagesErrors";
import TableComponent from "../../../Table/Table";
import { columns } from "./TableData";
import { useGetAllRacks } from "../../../../hooks/Racks/useGetAllRacks";
import SearchCard from "../../assets/SearchCard";
import { useTranslation } from 'react-i18next';

export default function TableRacks() {
  const racks = useGetAllRacks();
  const { t } = useTranslation('TableTitles', { keyPrefix: 'Racks' });

  const showError = useShowError();

  useEffect(() => {
    racks.get();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (racks.error) {
      showError.get(MessageError.FETCH_FAILED);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [racks.error]);

  const translatedColumns = columns?.map((column) => {
    return {...column,
    name: t(column.name)}
  })

  return (
    <div className="mx-4 my-4 border rounded search-card border-secondary-dark">
      <SearchCard />
      <TableComponent
        progressPending={racks.isLoading}
        columns={translatedColumns}
        rows={racks.data}
      />
    </div>
  );
}
