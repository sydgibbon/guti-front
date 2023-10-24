import { useEffect } from "react";
import useShowError from "../../../../hooks/useShowError";
import { MessageError } from "../../../../utils/MessagesErrors";
import TableComponent from "../../../Table/Table";
import { columns } from "./TableData";
import { useGetAllConsumables } from "../../../../hooks/Consumables/GetAllConsumable";
import SearchCard from "../../assets/SearchCard";

export default function TableSimcards() {
  const consumables = useGetAllConsumables();

  const showError = useShowError();

  useEffect(() => {
    consumables.get();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (consumables.error) {
      showError.get(MessageError.FETCH_FAILED);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [consumables.error]);

  return (
    <div className="mx-4 my-4 border rounded search-card border-secondary-dark">
      <SearchCard />
      <TableComponent
        progressPending={consumables.isLoading}
        columns={columns}
        rows={consumables.data}
      />
    </div>
  );
}
