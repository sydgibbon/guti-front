import { useEffect } from "react";
import useShowError from "../../../../hooks/useShowError";
import { MessageError } from "../../../../utils/MessagesErrors";
import TableComponent from "../../../Table/Table";
import { columns } from "./TableData"; 
import { useGetAllUnmanageds } from "../../../../hooks/Unmanageds/useGetAllUnmanageds";
import SearchCard from "../../assets/SearchCard";
import { useTranslation } from 'react-i18next';

export default function TableUnmanaged() {
const unmanageds = useGetAllUnmanageds();
const { t } = useTranslation('TableTitles', { keyPrefix: 'Unmanageds' });

  const showError = useShowError();

  useEffect(() => {
    unmanageds.get();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (unmanageds.error) {
      showError.get(MessageError.FETCH_FAILED);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [unmanageds.error]);

  const translatedColumns = columns?.map((column) => {
    return {...column,
    name: t(column.name)}
  })

  return (
    <div className="mx-4 my-4 border rounded search-card border-secondary-dark">
      <SearchCard />
      <TableComponent
        progressPending={unmanageds.isLoading}
        columns={translatedColumns}
        rows={unmanageds.data}
      />
    </div>
  );
}
