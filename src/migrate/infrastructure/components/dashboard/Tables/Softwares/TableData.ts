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
    selector: (row) => row.manufacturers?.name,
  },
  {
    name: "VERSIONS - NAME",
    sortable: true,
    selector: (row) => row.manufacturers?.name, //hay que trabajar la logica de versions
  },
  {
    name: "VERSION - OPERATING SYSTEMS",
    sortable: true,
    selector: (row) => row.manufacturers?.name, //hay que trabajar la logica de versions
  },
  {
    name: "NUMBER OF INSTALLATIONS",
    sortable: true,
    selector: (row) => row.manufacturers?.name, //hay que trabajar la logica de versions
  },
  {
    name: "LICENSES - NUMBER OF LICESNSES",
    sortable: true,
    selector: (row) => row.manufacturers?.name, //hay que trabajar la logica de licenses
  },
];
