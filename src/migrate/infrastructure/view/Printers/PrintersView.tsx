import React from "react";
import { ColumnSearch } from "../../../domain/models/Others";
import SearchCard from "../../components/dashboard/assets/SearchCard";
import SearchForm from "../../components/dashboard/SearchForm";

const PrintersView = () => {
  const columns: ColumnSearch[] = [
    {
      name: "NAME",
      sortable: true,
      selector: (row) => row?.name,
    },
    {
      name: "STATUS",
      sortable: true,
      selector: (row) => row?.states?.name, // hace referencia al objeto que contiene states dentro (mirar consola chrome)
    },
    {
      name: "MANUFACTURERS",
      sortable: true,
      selector: (row) => row?.manufacturers?.name,
    },
    {
      name: "LOCATIONS",
      sortable: true,
      selector: (row) => row?.locations?.name,
    },
    {
      name: "TYPES",
      sortable: true,
      selector: (row) => row?.printertypes?.name,
    },
    {
      name: "MODEL",
      sortable: true,
      selector: (row) => row?.printermodels?.name,
    },
    {
      name: "LAST UPDATE",
      sortable: true,
      selector: (row) => row?.date_mod,
    },
  ];
  return (
    <div className="printers">
      <SearchForm />
      <SearchCard asset="printers" columns={columns} />
    </div>
  );
};

export default PrintersView;