import { useEffect } from "react";
import useShowError from "../../../../hooks/useShowError";
import { MessageError } from "../../../../utils/MessagesErrors";
import TableComponent from "../../../Table/Table";
import { columns } from "./TableData";
import { useGetAllSoftwares } from "../../../../hooks/Softwares/useGetAllSoftwares";
import SearchCard from "../../assets/SearchCard";

export default function TableSoftwares() {
  const softwares = useGetAllSoftwares();

  const showError = useShowError();

  useEffect(() => {
    softwares.get();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (softwares.error) {
      showError.get(MessageError.FETCH_FAILED);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [softwares.error]);

  return (
    <div className="mx-4 my-4 border rounded search-card border-secondary-dark">
      <SearchCard />
      <TableComponent
        progressPending={softwares.isLoading}
        columns={columns}
        rows={softwares.data}
      />
    </div>
  );
}
