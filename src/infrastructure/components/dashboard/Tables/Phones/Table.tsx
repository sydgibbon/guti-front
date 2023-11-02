import { useEffect } from "react";
import useShowError from "../../../../hooks/useShowError";
import { MessageError } from "../../../../utils/MessagesErrors";
import TableComponent from "../../../Table/Table";
import { columns } from "./TableData";
import { useGetAllPhones } from "../../../../hooks/Phones/useGetAllPhones";
import SearchCard from "../../assets/SearchCard";
import { useTranslation } from 'react-i18next';

export default function TablePhones() {
  const phones = useGetAllPhones();
  const { t } = useTranslation('TableTitles', { keyPrefix: 'Phones' });

  const showError = useShowError();

  useEffect(() => {
    phones.get();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (phones.error) {
      showError.get(MessageError.FETCH_FAILED);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phones.error]);

  const translatedColumns = columns?.map((column) => {
    return {...column,
    name: t(column.name)}
  })

  return (
    <div className="mx-4 my-4 border rounded search-card border-secondary-dark">
      <SearchCard />
      <TableComponent
        progressPending={phones.isLoading}
        columns={translatedColumns}
        rows={phones.data}
      />
    </div>
  );
}
