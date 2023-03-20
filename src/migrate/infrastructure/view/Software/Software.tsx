import SearchForm from "../../../../component/dashboard/SearchForm";
import TableSoftwares from "../../components/dashboard/Tables/Softwares/Table";

const Software = () => {
  return (
    <div className="softwares">
      <SearchForm />
      <TableSoftwares />
    </div>
  );
};

export default Software;
