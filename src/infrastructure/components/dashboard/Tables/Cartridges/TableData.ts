import { TableColumn } from "react-data-table-component";
import { DataRow } from "./types";
import i18n from "i18next";


export const columns: TableColumn<DataRow>[] = [
  {
    name: i18n.t("Asset.Name"),
    sortable: true,
    selector: (row) => row.name
  },
  {
    name: i18n.t("Asset.Reference"),
    sortable: true,
    selector: (row) => row.ref
  },
  {
    name: i18n.t("Asset.Type"),
    sortable: true,
    selector: (row) => row.cartridgeitemtypes,
  },
  {
    name: i18n.t("Asset.Manufacturers"),
    sortable: true,
    selector: (row) => row.manufacturers
  },
  {
    name: i18n.t("Asset.Locations"),
    sortable: true,
    selector: (row) => row.locations
  },
  {
    name: i18n.t("Cartridge.Cartridges"),
    sortable: true,
    selector: (row) => row.cartridges
  }
];
