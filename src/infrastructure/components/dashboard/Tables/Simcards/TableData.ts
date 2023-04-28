import { TableColumn } from "react-data-table-component";
import { DataRow } from "./types";

export const columns: TableColumn<DataRow>[] = [
  {
    name: "ID",
    sortable: true,
    selector: (row) => row.id,
  }
]
