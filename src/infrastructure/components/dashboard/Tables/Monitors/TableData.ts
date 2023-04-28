import { TableColumn } from "react-data-table-component";
import { DataRow } from "./types";

export const columns: TableColumn<DataRow>[] = [
  {
    name: "name",
    sortable: true,
    selector: (row) => row.name,
  },
  {
    name: "status",
    sortable: true,
    selector: (row) => row.states,
  },
  {
    name: "manufacturers",
    sortable: true,
    selector: (row) => row.manufacturers,
  },
  {
    name: "locations",
    sortable: true,
    selector: (row) => row.locations,
  },
  {
    name: "types",
    sortable: true,
    selector: (row) => row.monitortypes,
  },
  {
    name: "model",
    sortable: true,
    selector: (row) => row.monitortypes,
  },
  {
    name: "lastUpdate",
    sortable: true,
    selector: (row) => row.date_mod,
  },
  {
    name: "alternateUsername",
    sortable: true,
    selector: (row) => row.contact,
  },
];
