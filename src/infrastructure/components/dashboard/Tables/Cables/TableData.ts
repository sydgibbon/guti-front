import { TableColumn } from "react-data-table-component";
import { DataRow } from "./types";

export const columns: TableColumn<DataRow>[] = [
  {
    name: "NAME",
    sortable: true,
    selector: (row) => row.name,
  },
  {
    name: "TYPES",
    sortable: true,
    selector: (row) => row.cabletypes
  },
  {
    name: "STATUS",
    sortable: true,
    selector: (row) => row.states
  },
  {
    name: "INVENTORYNUMBER",
    sortable: true,
    selector: (row) => row.otherserial,
  },
  {
    name: "COLOR",
    sortable: true,
    selector: (row) => row.color,
  },
  {
    name: "TECHNICIAN",
    sortable: true,
    selector: (row) => row.users_tech
  },
  {
    name: "ASSOCIATEDB",
    sortable: true,
    selector: (row) => row.items_endpoint_b
  },
  {
    name: "ASSOCIATEDA",
    sortable: true,
    selector: (row) => row.items_endpoint_a
  },
  {
    name: "SOCKETB",
    sortable: true,
    selector: (row) => row.sockets_endpoint_b,
  },
  {
    name: "SOCKETA",
    sortable: true,
    selector: (row) => row.sockets_endpoint_a,
  },
];
