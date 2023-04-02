import { TableColumn } from "react-data-table-component";
import { DataRow } from "./types";

export const columns: TableColumn<DataRow>[] = [
  {
    name: "id",
    sortable: true,
    selector: (row) => row.id,
  },
  {
    name: "name",
    sortable: true,
    selector: (row) => row.name,
  },
  {
    name: "color",
    sortable: true,
    selector: (row) => row.color,
  },
  {
    name: "comment",
    sortable: true,
    selector: (row) => row.comment,
  },
  {
    name: "date_mod",
    sortable: true,
    selector: (row) => row.date_mod,
  },
  {
    name: "date_creation",
    sortable: true,
    selector: (row) => row.date_creation, // codigo de momento hasta que se puedan relacionar sistemas operativos con computers
  },
];
