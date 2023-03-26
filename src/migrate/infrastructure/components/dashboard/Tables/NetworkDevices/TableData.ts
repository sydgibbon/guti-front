import { TableColumn } from "react-data-table-component";
import { DataRow } from "./types";

export const columns: TableColumn<DataRow>[] = [
  {
    name: "NAME",
    sortable: true,
    selector: (row) => row.name,
  },
  {
    name: "STATUS",
    sortable: true,
    selector: (row) => row.states?.name,
  },
  {
    name: "MANUFACTURERS",
    sortable: true,
    selector: (row) => row.manufacturers?.name,
  },
  {
    name: "LOCATIONS",
    sortable: true,
    selector: (row) => row.locations?.name,
  },
  {
    name: "TYPE",
    sortable: true,
    selector: (row) => row.networkequipmenttypes?.name,
  },
  {
    name: "MODEL",
    sortable: true,
    selector: (row) => row.networkequipmentmodels?.name,
  },
  {
    name: "FIRMWARE",
    sortable: true,
    selector: (row) => row.date_mod,
  },
  {
    name: "LAST UPDATE",
    sortable: true,
    selector: (row) => row.date_mod,
  },
];
