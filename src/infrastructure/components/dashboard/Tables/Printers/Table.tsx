import { useEffect } from "react";
import useShowError from "../../../../hooks/useShowError";
import { MessageError } from "../../../../utils/MessagesErrors";
import TableComponent from "../../../Table/Table";
import { columns } from "./TableData";
import { useGetAllPrinters } from "../../../../hooks/Printers/useGetAllPrinters";
import SearchCard from "../../assets/SearchCard";
import { useTranslation } from 'react-i18next';

export default function TablePrinters() {
  const printers = useGetAllPrinters();
  const { t } = useTranslation('TableTitles', { keyPrefix: 'Printers' });

  const showError = useShowError();

  useEffect(() => {
    printers.get();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (printers.error) {
      showError.get(MessageError.FETCH_FAILED);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [printers.error]);

  const translatedColumns = columns?.map((column) => {
    return {...column,
    name: t(column.name)}
  })

  return (
    <div className="mx-4 my-4 border rounded search-card border-secondary-dark">
      <SearchCard />
      <TableComponent
        progressPending={printers.isLoading}
        columns={translatedColumns}
        rows={printers.data}
      />
    </div>
  );
}
