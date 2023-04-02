import { TableColumn } from "react-data-table-component";
import { DataRow } from "./types";

export const columns: TableColumn<DataRow>[] = [
  {
    name: "name",
    sortable: true,
    selector: (row) => row.name
  },
  {
    name: "reference",
    sortable: true,
    selector: (row) => row.reference
  },
  {
    name: "manufacturers",
    sortable: true,
    selector: (row) => row.manufacturers
  },
  {
    name: "type",
    sortable: true,
    selector: (row) => row.type,
  },
  {
    name: "cartridges",
    sortable: true,
    selector: (row) => row.cartridges // codigo de momento hasta que se puedan relacionar sistemas operativos con computers
  },
  {
    name: "locations",
    sortable: true,
    selector: (row) => row.locations
  },
];
