import { ColumnSearch } from "../../../domain/models/Others";
import SearchCard from "../../components/dashboard/assets/SearchCard";
import SearchForm from "../../components/dashboard/SearchForm";

const PDUsView = () => {
  const columns: ColumnSearch[] = [
    {
      name: "NAME",
      sortable: true,
      selector: (row) => row?.name,
    },
  ];
  return (
    <div className="pdus">
      <SearchForm />
      <SearchCard asset="pdus" columns={columns} />
    </div>
  );
};

export default PDUsView;
