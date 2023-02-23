import { ColumnSearch, Row } from "../../../domain/models/Others";
import SearchForm from "../../components/dashboard/SearchForm";
import TableMonitors from "../../components/dashboard/Tables/Monitors/TableMonitors";

const Monitors = () => {
  const columns:ColumnSearch[]  = [
    {
      name: "NAME",
      sortable: true,
      selector: (row: Row) => row?.name,
    },
    {
      name: "STATUS",
      sortable: true,
      selector: (row: Row) => row?.states?.name,
    },
    {
      name: "MANUFACTURERS",
      sortable: true,
      selector: (row: Row) => row?.manufacturers?.name,
    },
    {
      name: "LOCATIONS",
      sortable: true,
      selector: (row: Row) => row?.locations?.name,
    },
    {
      name: "TYPES",
      sortable: true,
      selector: (row: Row) => row?.monitortypes?.name,
    },
    {
      name: "MODEL",
      sortable: true,
      selector: (row: Row) => row?.monitortypes?.name,
    },
    {
      name: "LAST UPDATE",
      sortable: true,
      selector: (row: Row) => row?.date_mod,
    },
    {
      name: "ALTERNATE USERNAME",
      sortable: true,
      selector: (row: Row) => row?.contact,
    },
  ];
  return (
    <div className="monitors">
      <SearchForm />
      <TableMonitors columns={columns} />
    </div>
  );
};

export default Monitors;
