import SearchCard from "../../../../component/dashboard/assets/SearchCard";
import SearchForm from "../../../../component/dashboard/SearchForm";
import { ColumnSearch, Row } from "../../../domain/models/Others";

const NetworkDevices = () => {
  const columns: ColumnSearch[] = [
    {
      name: "NAME",
      sortable: true,
      selector: (row: Row) => row?.name,
    },
    {
      name: "STATUS",
      sortable: true,
      selector: (row: Row) => row?.states?.name, // hace referencia al objeto que contiene states dentro (mirar consola chrome)
    },
    {
      name: "MANUFACTURERS",
      sortable: true,
      selector: (row: Row) => row?.manufacturers?.name,
    },
    {
      name: "LOCATIONS",
      sortable: true,
      selector: (row: Row) => row?.locations?.name, // hace referencia al objeto que contiene states dentro (mirar consola chrome)
    },
    {
      name: "TYPES",
      sortable: true,
      selector: (row: Row) => row?.networkequipmenttypes?.name, // hace referencia al objeto que contiene states dentro (mirar consola chrome)
    },
    {
      name: "MODEL",
      sortable: true,
      selector: (row: Row) => row?.serial,
    },
    {
      name: "FIRMWARE",
      sortable: true,
      selector: (row: Row) => row?.serial,
    },
    {
      name: "LAST UPDATE",
      sortable: true,
      selector: (row: Row) => row?.date_mod,
    },
  ];
  return (
    <div className="networkdevices">
      <SearchForm />
      <SearchCard asset="networkequipments" columns={columns} />
    </div>
  );
};

export default NetworkDevices;
