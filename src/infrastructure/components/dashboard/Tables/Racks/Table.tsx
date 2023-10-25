import { useEffect } from "react";
import useShowError from "../../../../hooks/useShowError";
import { MessageError } from "../../../../utils/MessagesErrors";
import TableComponent from "../../../Table/Table";
import { columns } from "./TableData";
import { useGetAllRacks } from "../../../../hooks/Racks/useGetAllRacks";
import SearchCard from "../../assets/SearchCard";

export default function TableRacks() {
  const racks = useGetAllRacks();

  const showError = useShowError();

  useEffect(() => {
    racks.get();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (racks.error) {
      showError.get(MessageError.FETCH_FAILED);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [racks.error]);

  return (
    <div className="mx-4 my-4 border rounded search-card border-secondary-dark">
      <SearchCard />
      <TableComponent
        progressPending={racks.isLoading}
        columns={columns}
        rows={racks.data}
        assetPath="racks"
      />
    </div>
  );
}
