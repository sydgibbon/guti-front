import { TableColumn } from "react-data-table-component";
import { DataRow } from "./types";
import i18n from "i18next";


export const columns: TableColumn<DataRow>[] = [
  {
    name: i18n.t("Asset.Name"),
    sortable: true,
    selector: (row) => row.name
  }
];
