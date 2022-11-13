import React from "react";
import SearchCard from "../component/dashboard/assets/SearchCard";
import SearchForm from "../component/dashboard/SearchForm";

const Simcards = () => {
  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
    },
  ];
  return (
    <div className="simcard">
      <SearchForm />
      <SearchCard asset="devicesimcards" columns={columns} />
    </div>
  );
};

export default Simcards;