import DataTable from "react-data-table-component";
import SkeletonTable from "../Skeletons/SkeletonTable";
import { TableComponentProps } from "./types";

export default function TableComponent(
  tableComponentProps: TableComponentProps
) {
  const { progressPending, progressComponent, columns, rows } =
    tableComponentProps;

  const rowsPerPage = [5, 10, 20, 50];

  return (
    <div className="table_container">
      <DataTable
        progressPending={progressPending}
        progressComponent={progressComponent ?? <SkeletonTable />}
        columns={columns}
        data={rows ?? []}
        pagination
        paginationPerPage={20}
        paginationRowsPerPageOptions={rowsPerPage}
        defaultSortFieldId={1}
      />
    </div>
  );
}
