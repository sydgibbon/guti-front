import { TableColumn } from "react-data-table-component";
import { DataRow } from "./types";

export const columns: TableColumn<DataRow>[] = [
  {
    name: "NAME",
    sortable: true,
    selector: (row) => row.name,
  },
  {
    name: "PUBLISHER",
    sortable: true,
    selector: (row) => row.manufacturers,
  },
  {
    name: "VERSIONS - NAME",
    sortable: true,
    selector: (row) => row.softwareversions,
  },
  {
    name: "VERSION - OPERATING SYSTEMS",
    sortable: true,
    selector: (row) => row.operatingsystems,
  },
  {
    name: "NUMBER OF INSTALLATIONS",
    sortable: true,
    selector: (row) => row.installations,
  },
  {
    name: "NUMBEROFLICENSES",
    sortable: true,
    selector: (row) => row.softwarelicenses,
  },
];
