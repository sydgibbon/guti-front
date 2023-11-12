import { useEffect } from "react";
import TableComponent from "../../../Table/Table";
import { columns } from "./TableData";
import { useGetAllCartridges } from "../../../../hooks/Cartridges/useGetAllCartridges";
import SearchCard from "../../assets/SearchCard";

export default function TableCartridges() {
  const cartridges = useGetAllCartridges();

  useEffect(() => {
    cartridges.get();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mx-4 my-4 border rounded search-card border-secondary-dark">
      <SearchCard />
      <TableComponent
        progressPending={cartridges.isLoading}
        columns={columns}
        rows={cartridges.data}
        assetPath="cartridges"
      />
    </div>
  );
}
