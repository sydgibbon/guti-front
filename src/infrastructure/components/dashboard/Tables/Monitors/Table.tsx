import { useEffect } from "react";
import { useGetAllMonitors } from "../../../../hooks/Monitors/useGetAllMonitors";
import useShowError from "../../../../hooks/useShowError";
import { MessageError } from "../../../../utils/MessagesErrors";
import TableComponent from "../../../Table/Table";
import { columns } from "./TableData";
import SearchCard from "../../assets/SearchCard";

export default function TableMonitors() {
  const monitors = useGetAllMonitors();

  const showError = useShowError();

  useEffect(() => {
    monitors.get();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (monitors.error) {
      showError.get(MessageError.FETCH_FAILED);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [monitors.error]);

  return (
    <div className="mx-4 my-4 border rounded search-card border-secondary-dark">
      <SearchCard />
      <TableComponent
        progressPending={monitors.isLoading}
        columns={columns}
        rows={monitors.data}
        assetPath="monitors"
      />
    </div>
  );
}
