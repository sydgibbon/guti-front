import SearchForm from "../../components/dashboard/SearchForm";
import TableComputers from "../../components/dashboard/Tables/Computers/TableComputers";

const Computers = () => {
  return (
    <div className="computers">
      <SearchForm />
      <TableComputers />
    </div>
  );
};

export default Computers;
