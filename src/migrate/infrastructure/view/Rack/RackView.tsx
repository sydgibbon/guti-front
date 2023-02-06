import { ColumnSearch } from "../../../domain/models/Others";
import SearchCard from "../../components/dashboard/assets/SearchCard";
import SearchForm from "../../components/dashboard/SearchForm";

const RackView = () => {
  const columns: ColumnSearch[] = [
    {
      name: "NAME",
      sortable: true,
      selector: (row) => row?.name,
    },
  ];
  return (
    <div className="racks">
      <SearchForm />
      <SearchCard asset="racks" columns={columns} />
    </div>
  );
};

export default RackView;
