import { TableColumn } from "react-data-table-component";
import { DataRow } from "./types";

export const columns: TableColumn<DataRow>[] = [
  {
    name: "name",
    sortable: true,
    selector: (row) => row.name,
  },
  {
    name: "entities",
    sortable: true,
    selector: (row) => row.entities,
  },
  {
    name: "locations",
    sortable: true,
    selector: (row) => row.locations,
  },
  {
    name: "states",
    sortable: true,
    selector: (row) => row.states,
  },
  {
    name: "updated_at",
    sortable: true,
    selector: (row) => row.date_mod,
  },
  {
    name: "created_at",
    sortable: true,
    selector: (row) => row.date_creation,
  },
];
