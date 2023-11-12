import { useEffect } from "react";
import useShowError from "../../../../hooks/useShowError";
import { MessageError } from "../../../../utils/MessagesErrors";
import TableComponent from "../../../Table/Table";
import { columns } from "./TableData";
import { useGetAllPassiveDevices } from "../../../../hooks/PassiveDevices/useGetAllPassiveDevices";
import SearchCard from "../../assets/SearchCard";

export default function TablePassiveDevices() {
  const passiveDevices = useGetAllPassiveDevices();

  const showError = useShowError();

  useEffect(() => {
    passiveDevices.get();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (passiveDevices.error) {
      showError.get(MessageError.FETCH_FAILED);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [passiveDevices.error]);

  return (
    <div className="mx-4 my-4 border rounded search-card border-secondary-dark">
      <SearchCard />
      <TableComponent
        progressPending={passiveDevices.isLoading}
        columns={columns}
        rows={passiveDevices.data}
        assetPath="passivedevices"
      />
    </div>
  );
}
