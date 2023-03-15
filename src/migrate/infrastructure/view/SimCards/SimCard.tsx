import SearchForm from "../../components/dashboard/SearchForm";
import TableSimcards from "../../components/dashboard/Tables/Simcards/Table";

const Monitors = () => {
  return (
    <div className="monitors">
      <SearchForm />
      <TableSimcards />
    </div>
  );
};

export default Monitors;
