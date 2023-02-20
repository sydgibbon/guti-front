import { TableColumn } from "react-data-table-component";
import { ComputerDTO } from "../../../domain/http/dto/ComputerDTO";

export const columns: TableColumn<ComputerDTO>[] = [
  {
    name: "NAME",
    sortable: true,
    selector: (row) => row?.name,
  },
  {
    name: "STATUS",
    sortable: true,
    selector: (row) => row.states?.name, // hace referencia al objeto que contiene states dentro (mirar consola chrome)
  },
  {
    name: "MANUFACTURERS",
    sortable: true,
    selector: (row) => row.manufacturers?.name,
  },
  {
    name: "SERIAL NUMBER",
    sortable: true,
    selector: (row) => row?.serial,
  },
  {
    name: "TYPES",
    sortable: true,
    selector: (row) => row.computertypes?.name, // hace referencia al objeto que contiene states dentro (mirar consola chrome)
  },
  {
    name: "OPERATING SYSTEM - NAME",
    sortable: true,
    selector: (row) => row.computertypes?.name, // codigo de momento hasta que se puedan relacionar sistemas operativos con computers
  },
  {
    name: "LOCATIONS",
    sortable: true,
    selector: (row) => row?.locations, // hace referencia al objeto que contiene states dentro (mirar consola chrome)
  },
  {
    name: "LAST UPDATE",
    sortable: true,
    selector: (row) => row?.date_mod, // hace referencia al objeto que contiene states dentro (mirar consola chrome)
  },
  {
    name: "COMPONENTS - PROCESSORS",
    sortable: true,
    selector: (row) => row.computertypes?.name, // No anda en el GLPI, se verá como arreglar mas tarde
  },
];


