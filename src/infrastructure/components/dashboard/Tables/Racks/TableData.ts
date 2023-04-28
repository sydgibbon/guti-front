import { TableColumn } from "react-data-table-component";
import { RackDTO } from "../../../../../domain/dto/RackDTO";

export const columns: TableColumn<RackDTO>[] = [
  {
    name: "NAME",
    sortable: true,
    selector: (row) => row.name,
  },
];
