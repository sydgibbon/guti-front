import { TableColumn } from "react-data-table-component";
import { DataRow } from "./types";

export const columns: TableColumn<DataRow>[] = [
  {
    name: "name",
    sortable: true,
    selector: (row) => row.name,
  },
  {
    name: "comment",
    sortable: true,
    selector: (row) => row.comment,
  },
  {
    name: "entities",
    sortable: true,
    selector: (row) => row.entities,
  },
  {
    name: "created_at",
    sortable: true,
    selector: (row) => row.date_creation,
  },
  {
    name: "updated_at",
    sortable: true,
    selector: (row) => row.date_mod,
  },
];
