import { useEffect } from "react";
import useShowError from "../../../../hooks/useShowError";
import { MessageError } from "../../../../utils/MessagesErrors";
import TableComponent from "../../../Table/Table";
import { columns } from "./TableData";
import { useGetAllEnclosures } from "../../../../hooks/Enclosures/useGetAllEnclosures";
import SearchCard from "../../assets/SearchCard";

export default function TableEnclosures() {
  const enclosures = useGetAllEnclosures();

  const showError = useShowError();

  useEffect(() => {
    enclosures.get();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (enclosures.error) {
      showError.get(MessageError.FETCH_FAILED);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enclosures.error]);

  return (
    <div className="mx-4 my-4 border rounded search-card border-secondary-dark">
      <SearchCard />
      <TableComponent
        progressPending={enclosures.isLoading}
        columns={columns}
        rows={enclosures.data}
      />
    </div>
  );
}
