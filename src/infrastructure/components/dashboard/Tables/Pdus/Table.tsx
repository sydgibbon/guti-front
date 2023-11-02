import { useEffect } from "react";
import useShowError from "../../../../hooks/useShowError";
import { MessageError } from "../../../../utils/MessagesErrors";
import TableComponent from "../../../Table/Table";
import { columns } from "./TableData";
import { useGetAllPdus } from "../../../../hooks/Pdus/useGetAllPdus";
import SearchCard from "../../assets/SearchCard";
import { useTranslation } from 'react-i18next';

export default function TablePdus() {
  const pdus = useGetAllPdus();
  const { t } = useTranslation('TableTitles', { keyPrefix: 'Pdus' });

  const showError = useShowError();

  useEffect(() => {
    pdus.get();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (pdus.error) {
      showError.get(MessageError.FETCH_FAILED);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pdus.error]);

  const translatedColumns = columns?.map((column) => {
    return {...column,
    name: t(column.name)}
  })

  return (
    <div className="mx-4 my-4 border rounded search-card border-secondary-dark">
      <SearchCard />
      <TableComponent
        progressPending={pdus.isLoading}
        columns={translatedColumns}
        rows={pdus.data}
      />
    </div>
  );
}
