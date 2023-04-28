import { TableColumn } from "react-data-table-component";

export interface TableComponentProps {
  progressPending: boolean;
  progressComponent?: React.ReactNode;
  columns: TableColumn<any>[];
  rows: any[];
}
