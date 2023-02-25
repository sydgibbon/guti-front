import { ColumnSearch, Row } from "../../../domain/models/Others";
import SearchForm from "../../components/dashboard/SearchForm";
import TableMonitors from "../../components/dashboard/Tables/Monitors/TableMonitors";

const Monitors = () => {
  return (
    <div className="monitors">
      <SearchForm />
      <TableMonitors />
    </div>
  );
};

export default Monitors;
