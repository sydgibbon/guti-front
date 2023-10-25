import DataTable from "react-data-table-component";
import SkeletonTable from "../Skeletons/SkeletonTable";
import { TableComponentProps } from "./types";

export default function TableComponent(
  tableComponentProps: TableComponentProps
) {
  const { progressPending, progressComponent, columns, rows, assetPath } =
    tableComponentProps;

  const rowsPerPage = [5, 10, 20, 50];

  const rowsWithAnchor = Array.isArray(rows)
    ? rows.map((row) => ({
        ...row, // Copia todas las propiedades del objeto original
        name: <a href={`/assets/edit/${assetPath}?id=${row.id}`}>{row.name}</a>, // Modifica 'name' como enlace
      }))
    : [];

  return (
    <div className="table_container">
      <DataTable
      
      selectableRows
        progressPending={progressPending}
        progressComponent={progressComponent ?? <SkeletonTable />}
        columns={columns}
        data={rowsWithAnchor ?? []}
        pagination
        paginationPerPage={20}
        paginationRowsPerPageOptions={rowsPerPage}
        defaultSortFieldId={1}
      />
    </div>
  );
}
