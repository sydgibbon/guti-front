import { ColumnSearch } from "../../../domain/models/Others";
import SearchCard from "../../components/dashboard/assets/SearchCard";
import SearchForm from "../../components/dashboard/SearchForm";

const UnmanagedDevicesView = () => {
  const columns: ColumnSearch[] = [
    {
      name: "NAME",
      sortable: true,
      selector: (row) => row?.name,
    },
  ];
  return (
    <div className="unmanaged-devices">
      <SearchForm />
      <SearchCard asset="unmanageds" columns={columns} />
    </div>
  );
};

export default UnmanagedDevicesView;
