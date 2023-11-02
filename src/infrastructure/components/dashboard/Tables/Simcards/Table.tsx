import { useEffect } from "react";
import useShowError from "../../../../hooks/useShowError";
import { MessageError } from "../../../../utils/MessagesErrors";
import TableComponent from "../../../Table/Table";
import { columns } from "./TableData";
import { useGetAllSimcards } from "../../../../hooks/Simcards/useGetAllSimcards";
import SearchCard from "../../assets/SearchCard";
import { useTranslation } from 'react-i18next';

export default function TableSimcards() {
  const simcards = useGetAllSimcards();
  const { t } = useTranslation('TableTitles', { keyPrefix: 'Simcards' });

  const showError = useShowError();

  useEffect(() => {
    simcards.get();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (simcards.error) {
      showError.get(MessageError.FETCH_FAILED);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [simcards.error]);

  const translatedColumns = columns?.map((column) => {
    return {...column,
    name: t(column.name)}
  })

  return (
    <div className="mx-4 my-4 border rounded search-card border-secondary-dark">
      <SearchCard />
      <TableComponent
        progressPending={simcards.isLoading}
        columns={translatedColumns}
        rows={simcards.data}
      />
    </div>
  );
}
