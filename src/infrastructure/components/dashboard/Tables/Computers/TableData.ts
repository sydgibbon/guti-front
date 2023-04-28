import { TableColumn } from "react-data-table-component";
import { DataRow } from "./types";

export const columns: TableColumn<DataRow>[] = [
  {
    name: "Name",
    sortable: true,
    selector: (row) => row.name,
  },
  {
    name: "Status",
    sortable: true,
    selector: (row) => row.states, // hace referencia al objeto que contiene states dentro (mirar consola chrome)
  },
  {
    name: "Manufacturers",
    sortable: true,
    selector: (row) => row.manufacturers,
  },
  {
    name: "Serial Number",
    sortable: true,
    selector: (row) => row.serial,
  },
  {
    name: "Type",
    sortable: true,
    selector: (row) => row.computertypes, // hace referencia al objeto que contiene states dentro (mirar consola chrome)
  },
  {
    name: "Model",
    sortable: true,
    selector: (row) => row.computermodels, // hace referencia al objeto que contiene states dentro (mirar consola chrome)
  },
  {
    name: "Operating System-Name",
    sortable: true,
    selector: (row) => row.computertypes, // codigo de momento hasta que se puedan relacionar sistemas operativos con computers
  },
  {
    name: "Locations",
    sortable: true,
    selector: (row) => row.locations, // hace referencia al objeto que contiene states dentro (mirar consola chrome)
  },
  {
    name: "LastUpdate",
    sortable: true,
    selector: (row) => row.date_mod, // hace referencia al objeto que contiene states dentro (mirar consola chrome)
  },
  {
    name: "ComponentsProcessors",
    sortable: true,
    selector: (row) => row.computertypes, // No anda en el GLPI, se verá como arreglar mas tarde
  },
];
