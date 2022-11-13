import React from "react";
import SearchCard from "../component/dashboard/assets/SearchCard";
import SearchForm from "../component/dashboard/SearchForm";

const PDUs = () => {
  const columns = [
    {
      name: "NAME",
      selector: (row) => row.name,
    },

  ];
  return (
    <div className="pdus">
      <SearchForm />
      <SearchCard asset="pdus" columns={columns} />
    </div>
  );
};

export default PDUs;