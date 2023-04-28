import SearchForm from "../../components/dashboard/SearchForm";
import TableCartridges from "../../components/dashboard/Tables/Cartridges/Table";

export default function Cartridges () {
  return (
    <div className="cartridges">
      <SearchForm />
      <TableCartridges />
    </div>
  );
};

