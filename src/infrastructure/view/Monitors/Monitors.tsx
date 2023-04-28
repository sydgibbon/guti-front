import SearchForm from "../../components/dashboard/SearchForm";
import TableMonitors from "../../components/dashboard/Tables/Monitors/Table";

const Monitors = () => {
  return (
    <div className="monitors">
      <SearchForm />
      <TableMonitors />
    </div>
  );
};

export default Monitors;
