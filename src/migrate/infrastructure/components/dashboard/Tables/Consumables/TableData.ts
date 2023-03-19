import { TableColumn } from "react-data-table-component";
import { DataRow } from "./types";

export const columns: TableColumn<DataRow>[] = [
  
  {
    name: "reference",
    sortable: true,
    selector: (row) => row.ref,
  },
  {
    name: "name",
    sortable: true,
    selector: (row) => row.name,
  },
  {
    name: "type",
    sortable: true,
    selector: (row) => row.consumableitemtypes?.name,
  },
  {
    name: "manufacturers",
    sortable: true,
    selector: (row) => row.manufacturers?.name,
  },
  {
    name: "locations",
    sortable: true,
    selector: (row) => row.locations?.name,
  },
  {
    name: "consumables",
    sortable: true,
    selector: (row) => row.id,
  },
];
