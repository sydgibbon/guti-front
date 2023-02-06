import { ColumnSearch } from "../../../domain/models/Others";
import SearchCard from "../../components/dashboard/assets/SearchCard";
import SearchForm from "../../components/dashboard/SearchForm";

const EnclosuresView = () => {
  const columns: ColumnSearch[] = [
    {
      name: "NAME",
      sortable: true,
      selector: (row) => row?.name,
    },
  ];
  return (
    <div className="enclosures">
      <SearchForm />
      <SearchCard asset="enclosures" columns={columns} />
    </div>
  );
};

export default EnclosuresView;
