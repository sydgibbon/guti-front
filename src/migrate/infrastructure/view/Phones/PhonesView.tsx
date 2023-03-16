import SearchForm from "../../components/dashboard/SearchForm";
import TablePhones from "../../components/dashboard/Tables/Phones/Table";

export default function Phones() {
  return (
    <div className="phones">
      <SearchForm />
      <TablePhones />
    </div>
  );
}
