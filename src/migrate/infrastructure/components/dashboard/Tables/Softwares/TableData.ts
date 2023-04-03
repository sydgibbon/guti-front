import { TableColumn } from "react-data-table-component";
import { DataRow } from "./types";

export const columns: TableColumn<DataRow>[] = [
  {
    name: "NAME",
    sortable: true,
    selector: (row) => row.softwares.name,
  },
  {
    name: "PUBLISHER",
    sortable: true,
    selector: (row) => row.softwares.manufacturers?.name,
  },
  {
    name: "VERSIONS - NAME",
    sortable: true,
    selector: (row) => row.name, //hay que trabajar la logica de versions
  },
  {
    name: "VERSION - OPERATING SYSTEMS",
    sortable: true,
    selector: (row) => row.operatingsystems?.name, //hay que trabajar la logica de versions
  },
  {
    name: "NUMBER OF INSTALLATIONS",
    sortable: true,
    selector: (row) => row.softwares.manufacturers?.name, //hay que trabajar la logica de versions
  },
  {
    name: "LICENSES - NUMBER OF LICESNSES",
    sortable: true,
    selector: (row) => row.softwares.licenses?.name, //hay que trabajar la logica de licenses
  },
];
