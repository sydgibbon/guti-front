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
    selector: (row) => row.states,
  },
  {
    name: "Manufacturers",
    sortable: true,
    selector: (row) => row.manufacturers,
  },
  {
    name: "Locations",
    sortable: true,
    selector: (row) => row.locations,
  },
  {
    name: "Type",
    sortable: true,
    selector: (row) => row.peripheraltypes,
  },
  {
    name: "Model",
    sortable: true,
    selector: (row) => row.peripheralmodels,
  },
  {
    name: "Last Update",
    sortable: true,
    selector: (row) => row.date_mod,
  },
  {
    name: "Alternate Username",
    sortable: true,
    selector: (row) => row.contact,
  },
];
