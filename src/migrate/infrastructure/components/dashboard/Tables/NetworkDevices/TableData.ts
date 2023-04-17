import { TableColumn } from "react-data-table-component";
import { DataRow } from "./types";

export const columns: TableColumn<DataRow>[] = [
  {
    name: "NAME",
    sortable: true,
    selector: (row) => row.name,
  },
  {
    name: "STATUS",
    sortable: true,
    selector: (row) => row.states,
  },
  {
    name: "MANUFACTURERS",
    sortable: true,
    selector: (row) => row.manufacturers,
  },
  {
    name: "LOCATIONS",
    sortable: true,
    selector: (row) => row.locations,
  },
  {
    name: "TYPE",
    sortable: true,
    selector: (row) => row.networkequipmenttypes,
  },
  {
    name: "MODEL",
    sortable: true,
    selector: (row) => row.networkequipmentmodels,
  },
  {
    name: "FIRMWARE",
    sortable: true,
    selector: (row) => row.devicefirmwares, // Corresponde a una tabla que no esta vinculada a networkequipments de ninguna manera
  },
  {
    name: "LAST UPDATE",
    sortable: true,
    selector: (row) => row.date_mod,
  },
];
