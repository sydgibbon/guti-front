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
    name: i18n.t("Asset.Publisher"),
    sortable: true,
    selector: (row) => row.manufacturers,
  },
  {
    name: i18n.t("Software.VersionsName"),
    sortable: true,
    selector: (row) => row.softwareversions,
  },
  {
    name: i18n.t("Software.VersionsOperatingSystems"),
    sortable: true,
    selector: (row) => row.operatingsystems,
  },
  {
    name: i18n.t("Asset.NumberOfInstallations"),
    sortable: true,
    selector: (row) => row.installations,
  },
  {
    name: i18n.t("Software.NumberOfLicenses"),
    sortable: true,
    selector: (row) => row.softwarelicenses,
  },
];
