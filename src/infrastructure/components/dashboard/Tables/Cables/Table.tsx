import { useEffect } from "react";
import TableComponent from "../../../Table/Table";
import { columns } from "./TableData";
import { useGetAllCables } from "../../../../hooks/Cables/useGetAllCables";
import SearchCard from "../../assets/SearchCard";
import { useTranslation } from 'react-i18next';

export default function TableCables() {
  const cables = useGetAllCables();
  const { t } = useTranslation('TableTitles', { keyPrefix: 'Cables' });

  useEffect(() => {
    cables.get();
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
        progressPending={cables.isLoading}
        columns={translatedColumns}
        rows={cables.data}
      />
    </div>
  );
}
