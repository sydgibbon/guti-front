import SearchForm from "../../components/dashboard/SearchForm";
import TableCables from "../../components/dashboard/Tables/Cables/Table";

const CablesView = () => {
  return (
    <div className="cables">
      <SearchForm />
      <TableCables />
    </div>
  );
};

export default CablesView;
