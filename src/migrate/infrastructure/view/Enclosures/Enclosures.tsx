import SearchForm from "../../components/dashboard/SearchForm";
import TableEnclosures from "../../components/dashboard/Tables/Enclosures/Table";

const Enclosures = () => {
  return (
    <div className="enclosures">
      <SearchForm />
      <TableEnclosures />
    </div>
  );
};

export default Enclosures;
