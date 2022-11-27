import React from "react";
import SearchCard from "../component/dashboard/assets/SearchCard";
import SearchForm from "../component/dashboard/SearchForm";

const Computers = () => {
  const columns = [
    {
      name: "NAME",
      selector: (row) => row?.name,
    },
    {
      name: "STATUS",
      selector: (row) => row?.states?.name, // hace referencia al objeto que contiene states dentro (mirar consola chrome)
    },
    {
      name: "MANUFACTURERS",
      selector: (row) => row?.manufacturers?.name,
    },
    {
      name: "SERIAL NUMBER",
      selector: (row) => row?.serial,
    },
    {
      name: "TYPES",
      selector: (row) => row?.computertypes?.name, // hace referencia al objeto que contiene states dentro (mirar consola chrome)
    },
    {
      name: "OPERATING SYSTEM - NAME",
      selector: (row) => row?.computertypes?.name, // codigo de momento hasta que se puedan relacionar sistemas operativos con computers
    },
    {
      name: "LOCATIONS",
      selector: (row) => row?.locations?.name, // hace referencia al objeto que contiene states dentro (mirar consola chrome)
    },
    {
      name: "LAST UPDATE",
      selector: (row) => row?.date_mod, // hace referencia al objeto que contiene states dentro (mirar consola chrome)
    },
    {
      name: "COMPONENTS - PROCESSORS",
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
