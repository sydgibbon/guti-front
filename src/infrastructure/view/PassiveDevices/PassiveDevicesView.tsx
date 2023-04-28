import { ColumnSearch } from "../../../domain/models/Others";
import SearchForm from "../../components/dashboard/SearchForm";
import TablePassiveDevices from "../../components/dashboard/Tables/PassiveDevices/Table";

const PassiveDevices = () => {
  const columns: ColumnSearch[] = [
    {
      name: "NAME",
      sortable: true,
      selector: (row) => row?.name,
    },
  ];
  return (
    <div className="passivedevices">
      <SearchForm />
      <TablePassiveDevices />
    </div>
  );
};

export default PassiveDevices;
