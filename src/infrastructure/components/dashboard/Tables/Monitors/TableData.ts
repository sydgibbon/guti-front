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
    selector: (row) => row.states,
  },
  {
    name: i18n.t("Asset.Manufacturers"),
    sortable: true,
    selector: (row) => row.manufacturers,
  },
  {
    name: i18n.t("Asset.Locations"),
    sortable: true,
    selector: (row) => row.locations,
  },
  {
    name: i18n.t("Asset.Type"),
    sortable: true,
    selector: (row) => row.monitortypes,
  },
  {
    name: i18n.t("Asset.Model"),
    sortable: true,
    selector: (row) => row.monitortypes,
  },
  {
    name: i18n.t("Asset.LastUpdate"),
    sortable: true,
    selector: (row) => row.date_mod,
  },
  {
    name: i18n.t("Asset.AlternateUsername"),
    sortable: true,
    selector: (row) => row.contact,
  },
];
