import { useEffect } from "react";
import useShowError from "../../../../hooks/useShowError";
import { MessageError } from "../../../../utils/MessagesErrors";
import TableComponent from "../../../Table/Table";
import { columns } from "./TableData";
import { useGetAllPdus } from "../../../../hooks/Pdus/useGetAllPdus";
import SearchCard from "../../assets/SearchCard";

export default function TablePdus() {
  const pdus = useGetAllPdus();

  const showError = useShowError();

  useEffect(() => {
    pdus.get();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (pdus.error) {
      showError.get(MessageError.FETCH_FAILED);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pdus.error]);

  return (
    <div className="mx-4 my-4 border rounded search-card border-secondary-dark">
      <SearchCard />
      <TableComponent
        progressPending={pdus.isLoading}
        columns={columns}
        rows={pdus.data}
        assetPath="pdu"
      />
    </div>
  );
}
