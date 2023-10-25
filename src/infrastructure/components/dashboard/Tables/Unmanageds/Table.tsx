import { useEffect } from "react";
import useShowError from "../../../../hooks/useShowError";
import { MessageError } from "../../../../utils/MessagesErrors";
import TableComponent from "../../../Table/Table";
import { columns } from "./TableData";
import { useGetAllUnmanageds } from "../../../../hooks/Unmanageds/useGetAllUnmanageds";
import SearchCard from "../../assets/SearchCard";

export default function TableUnmanaged() {
const unmanageds = useGetAllUnmanageds();

  const showError = useShowError();

  useEffect(() => {
    unmanageds.get();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (unmanageds.error) {
      showError.get(MessageError.FETCH_FAILED);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [unmanageds.error]);

  return (
    <div className="mx-4 my-4 border rounded search-card border-secondary-dark">
      <SearchCard />
      <TableComponent
        progressPending={unmanageds.isLoading}
        columns={columns}
        rows={unmanageds.data}
        assetPath="unmanageds"
      />
    </div>
  );
}
