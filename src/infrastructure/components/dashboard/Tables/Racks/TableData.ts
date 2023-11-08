import { TableColumn } from "react-data-table-component";
import { RackDTO } from "../../../../../domain/dto/RackDTO";
import i18n from "i18next";


export const columns: TableColumn<RackDTO>[] = [
  {
    name: i18n.t("Asset.Name"),
    sortable: true,
    selector: (row) => row.name,
  },
];
