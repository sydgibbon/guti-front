import { TableColumn } from "react-data-table-component";
import { DataRow } from "./types";
import i18n from "i18next";

export const columns: TableColumn<DataRow>[] = [
  {
    name: i18n.t("Asset.Name"),
    sortable: true,
    selector: (row) => row.name,
  },
  {
    name: i18n.t("Asset.Status"),
    sortable: true,
    selector: (row) => row.states, // hace referencia al objeto que contiene states dentro (mirar consola chrome)
  },
  {
    name: i18n.t("Asset.Manufacturers"),
    sortable: true,
    selector: (row) => row.manufacturers,
  },
  {
    name: i18n.t("Asset.SerialNumber"),
    sortable: true,
    selector: (row) => row.serial,
  },
  {
    name: i18n.t("Asset.Type"),
    sortable: true,
    selector: (row) => row.computertypes, // hace referencia al objeto que contiene states dentro (mirar consola chrome)
  },
  {
    name: i18n.t("Asset.Model"),
    sortable: true,
    selector: (row) => row.computermodels, // hace referencia al objeto que contiene states dentro (mirar consola chrome)
  },
  {
    name: i18n.t("Asset.OperatingSystem"),
    sortable: true,
    selector: (row) => row.computertypes, // codigo de momento hasta que se puedan relacionar sistemas operativos con computers
  },
  {
    name: i18n.t("Asset.Locations"),
    sortable: true,
    selector: (row) => row.locations, // hace referencia al objeto que contiene states dentro (mirar consola chrome)
  },
  {
    name: i18n.t("Asset.LastUpdate"),
    sortable: true,
    selector: (row) => row.date_mod, // hace referencia al objeto que contiene states dentro (mirar consola chrome)
  },
  {
    name: i18n.t("Asset.ComponentsProcessors"),
    sortable: true,
    selector: (row) => row.computertypes, // No anda en el GLPI, se verá como arreglar mas tarde
  },
];
