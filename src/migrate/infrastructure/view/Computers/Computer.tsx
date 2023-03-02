import SearchForm from "../../components/dashboard/SearchForm";
import TableComputers from "../../components/dashboard/Tables/Computers/Table";

export default function Computers() {
  return (
    <div className="computers">
      <SearchForm />
      <TableComputers />
    </div>
  );
}
