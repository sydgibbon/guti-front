import SearchForm from "../../components/dashboard/SearchForm";
import TablePdus from "../../components/dashboard/Tables/Pdus/Table";

const PDUsView = () => {
  return (
    <div className="pdus">
      <SearchForm />
      <TablePdus/>
    </div>
  );
};

export default PDUsView;
