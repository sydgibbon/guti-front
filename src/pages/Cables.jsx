import React from "react";
import SearchCard from "../component/dashboard/assets/SearchCard";
import SearchForm from "../component/dashboard/SearchForm";

const Cables = () => {
  const columns = [
    {
      name: "NAME",
      selector: (row) => row.name,
    },
    {
      name: "TYPES",
      selector: (row) => row.cabletypes_id[0]["name"], // hace referencia al objeto que contiene states_id dentro (mirar consola chrome)
    },
    {
      name: "STATUS",
      selector: (row) => row.states_id[0]["name"], // hace referencia al objeto que contiene states_id dentro (mirar consola chrome)
    },
    {
      name: "INVENTORY NUMBER",
      selector: (row) => row.otherserial,
    },
    {
      name: "COLOR",
      selector: (row) => row.color,
    },
    {
      name: "TECHNICIAN IN CHARGE OF THE HARDWARE",
      selector: (row) => row.users_id_tech[0]["name"],
    },
    {
      name: "ASSOCIATED ITEM (ENDPOINT B)",
      selector: (row) => row.itemtype_endpoint_b,
    },
    {
      name: "ASSOCIATED ITEM (ENDPOINT A)",
      selector: (row) => row.itemtype_endpoint_a,
    },
    {
      name: "SOCKET (ENDPOINT B)",
      selector: (row) => row.sockets_id_endpoint_b,
    },
    {
      name: "SOCKET (ENDPOINT A)",
      selector: (row) => row.sockets_id_endpoint_a,
    },
  ];
  return (
    <div className="cables">
      <SearchForm />
      <SearchCard asset="cables" columns={columns} />
    </div>
  );
};

export default Cables;