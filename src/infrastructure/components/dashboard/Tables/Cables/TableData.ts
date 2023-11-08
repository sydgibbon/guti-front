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
    name: i18n.t("Cable.CableType"),
    sortable: true,
    selector: (row) => row.cabletypes
  },
  {
    name: i18n.t("Asset.Status"),
    sortable: true,
    selector: (row) => row.states
  },
  {
    name: i18n.t("Cable.AssetNumber"),
    sortable: true,
    selector: (row) => row.otherserial,
  },
  {
    name: i18n.t("Cable.Color"),
    sortable: true,
    selector: (row) => row.color,
  },
  {
    name: i18n.t("Asset.TechInChargeOfHardware"),
    sortable: true,
    selector: (row) => row.users_tech
  },
  {
    name: i18n.t("Cable.AssociatedItemB"),
    sortable: true,
    selector: (row) => row.items_endpoint_b
  },
  {
    name: i18n.t("Cable.AssociatedItemA"),
    sortable: true,
    selector: (row) => row.items_endpoint_a
  },
  {
    name: i18n.t("Cable.SocketB"),
    sortable: true,
    selector: (row) => row.sockets_endpoint_b,
  },
  {
    name: i18n.t("Cable.SocketA"),
    sortable: true,
    selector: (row) => row.sockets_endpoint_a,
  },
];
