import { ColumnSearch } from "../../../domain/models/Others";
import SearchCard from "../../components/dashboard/assets/SearchCard";
import SearchForm from "../../components/dashboard/SearchForm";

const SimCardView = () => {
  const columns: ColumnSearch[] = [
    {
      name: "ID",
      sortable: true,
      selector: (row) => row?.id,
    },
  ];
  return (
    <div className="simcard">
      <SearchForm />
      <SearchCard asset="devicesimcards" columns={columns} />
    </div>
  );
};

export default SimCardView;
