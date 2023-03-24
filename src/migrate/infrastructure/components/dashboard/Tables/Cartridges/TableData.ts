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
    selector: (row) => row.ref
  },
  {
    name: "type",
    sortable: true,
    selector: (row) => row.type,
  },
  {
    name: "manufacturers",
    sortable: true,
    selector: (row) => row.manufacturers.name
  },
  {
    name: "locations",
    sortable: true,
    selector: (row) => row.locations.name
  },
  {
    name: "cartridges",
    sortable: true,
    selector: (row) => row.cartridges
  }
];
