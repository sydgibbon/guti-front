import SearchForm from "../../components/dashboard/SearchForm";
import TableSimcards from "../../components/dashboard/Tables/Simcards/Table";

export default function Simcards() {
  return (
    <div className="monitors">
      <SearchForm />
      <TableSimcards />
    </div>
  );
}
