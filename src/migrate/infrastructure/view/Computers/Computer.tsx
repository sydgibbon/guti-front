import { Row } from "../../../domain/models/Others";
import SearchCard from "../../components/dashboard/assets/SearchCard";
import SearchForm from "../../components/dashboard/SearchForm";
import TableComputers from "../../components/dashboard/Tables/TableComputers";
import { columns } from "./Table";

const Computers = () => {
  return (
    <div className="computers">
      <SearchForm />
      {/* <SearchCard asset="computers" columns={columns} /> */}
      <TableComputers columns={columns} />
    </div>
  );
};

export default Computers;
