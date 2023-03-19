import { TableColumn } from "react-data-table-component";
import { DataRow } from "./types";

export const columns: TableColumn<DataRow>[] = [
  {
    name: "Name",
    sortable: true,
    selector: (row) => row.name,
  },
  {
    name: "Reference",
    sortable: true,
    selector: (row) => row.ref,
  },
  {
    name: "Type",
    sortable: true,
    selector: (row) => row.consumableitemtypes?.name,
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
    name: "Consumables",
    sortable: true,
    selector: (row) => row.id,
  },
];
