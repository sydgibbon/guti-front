import React from "react";
import SearchCard from "../component/dashboard/assets/SearchCard";
import SearchForm from "../component/dashboard/SearchForm";

const Enclosures = () => {
  const columns = [
    {
      name: "NAME",
      sortable: true,
      selector: (row) => row?.name,
    },

  ];
  return (
    <div className="enclosures">
      <SearchForm />
      <SearchCard asset="enclosures" columns={columns} />
    </div>
  );
};

export default Enclosures;