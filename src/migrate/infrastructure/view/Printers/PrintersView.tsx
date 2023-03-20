import SearchForm from "../../components/dashboard/SearchForm";
import TablePrinters from "../../components/dashboard/Tables/Printers/Table";

const PrintersView = () => {
  return (
    <div className="printers">
      <SearchForm />
      <TablePrinters></TablePrinters>
    </div>
  );
};

export default PrintersView;
