import { useEffect } from "react";
import { useGetAllComputers } from "../../../../hooks/Computers/useGetAllComputers";
import TableComponent from "../../../Table/Table";
import { columns } from "./TableData";
import SearchCard from "../../assets/SearchCard";
import { useTranslation } from 'react-i18next';

export default function TableComputers() {
  const computers = useGetAllComputers();
  const { t } = useTranslation('TableTitles', { keyPrefix: 'Computers' });

  useEffect(() => {
    computers.get();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const translatedColumns = columns?.map((column) => {
    return {...column,
    name: t(column.name)}
  })


  return (
    <div className="mx-4 my-4 border rounded search-card border-secondary-dark">
      <SearchCard />
      <TableComponent
        progressPending={computers.isLoading}
        columns={translatedColumns}
        rows={computers.data}
      />
    </div>
  );
}
