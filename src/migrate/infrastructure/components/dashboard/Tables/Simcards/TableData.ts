import { TableColumn } from "react-data-table-component";
import { DataRow } from "./types";

export const columns: TableColumn<DataRow>[] = [
  {
    name: "designation",
    sortable: true,
    selector: (row) => row.designation,
  },
  {
    name: "status",
    sortable: true,
    selector: (row) => row.comment,
  },
  {
    name: "entities",
    sortable: true,
    selector: (row) => row.entities,
  },
  {
    name: "manufacturers",
    sortable: true,
    selector: (row) => row.manufacturers,
  },
  {
    name: "devicesimcardtypes",
    sortable: true,
    selector: (row) => row.devicesimcardtypes,
  },
  {
    name: "is_recursive",
    sortable: true,
    selector: (row) => row.is_recursive,
  },
  {
    name: "is_deleted",
    sortable: true,
    selector: (row) => row.is_deleted,
  },
  {
    name: "voltage",
    sortable: true,
    selector: (row) => row.voltage,
  },
  {
    name: "allow_voip",
    sortable: true,
    selector: (row) => row.allow_voip,
  },
  {
    name: "date_mod",
    sortable: true,
    selector: (row) => row.date_mod,
  },
  {
    name: "date_creation",
    sortable: true,
    selector: (row) => row.date_creation,
  },
];
