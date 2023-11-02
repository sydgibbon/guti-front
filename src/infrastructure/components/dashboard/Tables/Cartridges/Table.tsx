import { useEffect } from "react";
import TableComponent from "../../../Table/Table";
import { columns } from "./TableData";
import { useGetAllCartridges } from "../../../../hooks/Cartridges/useGetAllCartridges";
import SearchCard from "../../assets/SearchCard";
import { useTranslation } from 'react-i18next';

export default function TableCartridges() {
  const cartridges = useGetAllCartridges();
  const { t } = useTranslation('TableTitles', { keyPrefix: 'Cartridges' });

  useEffect(() => {
    cartridges.get();
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
        progressPending={cartridges.isLoading}
        columns={translatedColumns}
        rows={cartridges.data}
      />
    </div>
  );
}
