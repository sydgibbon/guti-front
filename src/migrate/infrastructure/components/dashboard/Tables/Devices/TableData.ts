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
    selector: (row) => row.status,
  },
  {
    name: "Manufacturers",
    sortable: true,
    selector: (row) => row.manufacturers?.name,
  },
  {
    name: "Locations",
    sortable: true,
    selector: (row) => row.locations?.name,
  },
  {
    name: "Type",
    sortable: true,
    selector: (row) => row.devicestype?.name,
  },
  {
    name: "Model",
    sortable: true,
    selector: (row) => row.devicesmodel?.name,
  },
  {
    name: "Last Update",
    sortable: true,
    selector: (row) => row.date_mod,
  },
  {
    name: "Alternate Username",
    sortable: true,
    selector: (row) => row.alternateusername,
  },
];
