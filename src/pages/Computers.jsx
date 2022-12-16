import React from "react";
import SearchCard from "../component/dashboard/assets/SearchCard";
import SearchForm from "../component/dashboard/SearchForm";


const Computers = () => {
  const columns = [
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
      name: "SERIAL NUMBER",
      sortable: true,
      selector: (row) => row?.serial,
    },
    {
      name: "TYPES",
      sortable: true,
      selector: (row) => row?.computertypes?.name, // hace referencia al objeto que contiene states dentro (mirar consola chrome)
    },
    {
      name: "OPERATING SYSTEM - NAME",
      sortable: true,
      selector: (row) => row?.computertypes?.name, // codigo de momento hasta que se puedan relacionar sistemas operativos con computers
    },
    {
      name: "LOCATIONS",
      sortable: true,
      selector: (row) => row?.locations?.name, // hace referencia al objeto que contiene states dentro (mirar consola chrome)
    },
    {
      name: "LAST UPDATE",
      sortable: true,
      selector: (row) => row?.date_mod, // hace referencia al objeto que contiene states dentro (mirar consola chrome)
    },
    {
      name: "COMPONENTS - PROCESSORS",
      sortable: true,
      selector: (row) => row?.computertypes?.name, // No anda en el GLPI, se verá como arreglar mas tarde
    },
    
  ];
  return (
    <div className="computers">
      <SearchForm />
      <SearchCard asset="computers" columns={columns} />
    </div>
  );
};

export default Computers;
