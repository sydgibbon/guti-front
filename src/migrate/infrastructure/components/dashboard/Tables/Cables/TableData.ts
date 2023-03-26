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
    selector: (row) => row.cabletypes.name
  },
  {
    name: "STATUS",
    sortable: true,
    selector: (row) => row.states.name,
  },
  {
    name: "INVENTORY NUMBER",
    sortable: true,
    selector: (row) => row.otherserial,
  },
  {
    name: "COLOR",
    sortable: true,
    selector: (row) => row.color,
  },
  {
    name: "TECHNICIAN IN CHARGE OF THE HARDWARE",
    sortable: true,
    selector: (row) => row.users_tech?.name,
  },
  {
    name: "ASSOCIATED ITEM (ENDPOINT B)",
    sortable: true,
    selector: (row) => row.items_endpoint_b
  },
  {
    name: "ASSOCIATED ITEM (ENDPOINT A)",
    sortable: true,
    selector: (row) => row.items_endpoint_a
  },
  {
    name: "SOCKET (ENDPOINT B)",
    sortable: true,
    selector: (row) => row.sockets_endpoint_b,
  },
  {
    name: "SOCKET (ENDPOINT A)",
    sortable: true,
    selector: (row) => row.sockets_endpoint_a,
  },
];
