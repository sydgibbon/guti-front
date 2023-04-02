import { TableColumn } from "react-data-table-component";
import { DataRow } from "./types";

export const columns: TableColumn<DataRow>[] = [
  {
    name: "name",
    sortable: true,
    selector: (row) => row.name,
  },
  {
    name: "serial",
    sortable: true,
    selector: (row) => row.serial,
  },
  {
    name: "state",
    sortable: true,
    selector: (row) => row.states,
  },
  {
    name: "locations",
    sortable: true,
    selector: (row) => row.locations,
  },
  {
    name: "networkequipmenttypes",
    sortable: true,
    selector: (row) => row.networkequipmenttypes,
  },
  {
    name: "manufacturers",
    sortable: true,
    selector: (row) => row.manufacturers,
  },
  {
    name: "date_mod",
    sortable: true,
    selector: (row) => row.date_mod,
  },
];
