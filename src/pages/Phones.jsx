import React from 'react';
import SearchCard from '../component/dashboard/assets/SearchCard';
import SearchForm from '../component/dashboard/SearchForm';

const Phones = () => {
  const columns = [
    {
      name: "NAME",
      selector: (row) => row.name,
    },
    {
      name: "STATUS",
      selector: (row) => row.states_id[0]["name"],
    },
    {
      name: "MANUFACTURERS",
      selector: (row) => row.manufacturers_id[0]["name"],
    },
    {
      name: "LOCATIONS",
      selector: (row) => row.locations_id[0]["name"],
    },
    {
      name: "TYPE",
      selector: (row) => row.phonetypes_id[0]["name"],
    },
    {
      name: "MODEL",
      selector: (row) => row.phonemodels_id[0]["name"],
    },
    {
      name: "LAST UPDATE",
      selector: (row) => row.date_mod,
    },
    {
      name: "ALTERNATE USERNAM",
      selector: (row) => row.contact,
    },
  ];
  return (
    <div className="phones">
      <SearchForm />
      <SearchCard asset="phones" columns={columns} />
    </div>
  )
}

export default Phones