import { TableColumn } from "react-data-table-component";
import { DataRow } from "./types";

export const columns: TableColumn<DataRow>[] = [
  {
    name: "name",
    sortable: true,
    selector: (row) => row.name,
  },
  {
    name: "contact",
    sortable: true,
    selector: (row) => row.contact,
  },
  {
    name: "contact_num",
    sortable: true,
    selector: (row) => row.contact_num,
  },
  {
    name: "comment",
    sortable: true,
    selector: (row) => row.comment,
  },
  {
    name: "serial",
    sortable: true,
    selector: (row) => row.serial,
  },
  {
    name: "brand",
    sortable: true,
    selector: (row) => row.brand,
  },
  {
    name: "number_line",
    sortable: true,
    selector: (row) => row.number_line,
  },
  {
    name: "last_inventory_update",
    sortable: true,
    selector: (row) => row.last_inventory_update,
  },
];
