import SearchForm from "../../components/dashboard/SearchForm";
import TableRacks from "../../components/dashboard/Tables/Racks/Table";

const Computers = () => {
  return (
    <div className="computers">
      <SearchForm />
      <TableRacks />
    </div>
  );
};

export default Computers;
