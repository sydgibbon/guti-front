import { useEffect } from "react";
import useShowError from "../../../../hooks/useShowError";
import { MessageError } from "../../../../utils/MessagesErrors";
import TableComponent from "../../../Table/Table";
import { columns } from "./TableData";
import { useGetAllSimcards } from "../../../../hooks/Simcards/useGetAllSimcards";
import SearchCard from "../../assets/SearchCard";

export default function TableSimcards() {
  const simcards = useGetAllSimcards();

  const showError = useShowError();

  useEffect(() => {
    simcards.get();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (simcards.error) {
      showError.get(MessageError.FETCH_FAILED);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [simcards.error]);

  return (
    <div className="mx-4 my-4 border rounded search-card border-secondary-dark">
      <SearchCard />
      <TableComponent
        progressPending={simcards.isLoading}
        columns={columns}
        rows={simcards.data}
      />
    </div>
  );
}
