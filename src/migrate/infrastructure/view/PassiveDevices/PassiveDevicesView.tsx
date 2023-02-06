import { ColumnSearch } from "../../../domain/models/Others";
import SearchCard from "../../components/dashboard/assets/SearchCard";
import SearchForm from "../../components/dashboard/SearchForm";

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
      <SearchCard asset="passivedcequipments" columns={columns} />
    </div>
  );
};

export default PassiveDevices;
