import { TableColumn } from "react-data-table-component";
import { PhoneAdapter } from "../../../../../domain/adapter/PhoneAdapter";

export const columns: TableColumn<PhoneAdapter>[] = [
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
    name: "PHONE TYPES",
    sortable: true,
    selector: (row) => row.phonetypes,
  },
  {
    name: "PHONE MODELS",
    sortable: true,
    selector: (row) => row.phonemodels,
  },
  {
    name: "LAST INVENTORY UPDATE",
    sortable: true,
    selector: (row) => row.last_inventory_update,
  },
];
