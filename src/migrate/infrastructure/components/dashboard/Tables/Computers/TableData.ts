import { TableColumn } from "react-data-table-component";
import { DataRow } from "./types";

export const columns: TableColumn<DataRow>[] = [
  {
    name: "name",
    sortable: true,
    selector: (row) => row?.name,
  },
  {
    name: "status",
    sortable: true,
    selector: (row) => row.states?.name, // hace referencia al objeto que contiene states dentro (mirar consola chrome)
  },
  {
    name: "manufacturers",
    sortable: true,
    selector: (row) => row.manufacturers?.name,
  },
  {
    name: "serialNumber",
    sortable: true,
    selector: (row) => row?.serial,
  },
  {
    name: "types",
    sortable: true,
    selector: (row) => row.computertypes?.name, // hace referencia al objeto que contiene states dentro (mirar consola chrome)
  },
  {
    name: "operatingSystemName",
    sortable: true,
    selector: (row) => row.computertypes?.name, // codigo de momento hasta que se puedan relacionar sistemas operativos con computers
  },
  {
    name: "locations",
    sortable: true,
    selector: (row) => row?.locations, // hace referencia al objeto que contiene states dentro (mirar consola chrome)
  },
  {
    name: "lastUpdate",
    sortable: true,
    selector: (row) => row?.date_mod, // hace referencia al objeto que contiene states dentro (mirar consola chrome)
  },
  {
    name: "componentsProcessors",
    sortable: true,
    selector: (row) => row.computertypes?.name, // No anda en el GLPI, se verá como arreglar mas tarde
  },
];
