import { useEffect } from "react";
import TableComponent from "../../../Table/Table";
import { columns } from "./TableData";
import { useGetAllCables } from "../../../../hooks/Cables/useGetAllCables";
import SearchCard from "../../assets/SearchCard";

export default function TableCables() {
  const cables = useGetAllCables();

  useEffect(() => {
    cables.get();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mx-4 my-4 border rounded search-card border-secondary-dark">
      <SearchCard />
      <TableComponent
        progressPending={cables.isLoading}
        columns={columns}
        rows={cables.data}
      />
    </div>
  );
}
