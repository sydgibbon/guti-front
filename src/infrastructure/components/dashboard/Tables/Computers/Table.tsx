import { useEffect } from "react";
import { useGetAllComputers } from "../../../../hooks/Computers/useGetAllComputers";
import TableComponent from "../../../Table/Table";
import { columns } from "./TableData";
import SearchCard from "../../assets/SearchCard";

export default function TableComputers() {
  const computers = useGetAllComputers();

  useEffect(() => {
    computers.get();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mx-4 my-4 border rounded search-card border-secondary-dark">
      <SearchCard />
      <TableComponent
        progressPending={computers.isLoading}
        columns={columns}
        rows={computers.data}
      />
    </div>
  );
}
