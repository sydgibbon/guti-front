import React from 'react';
import SearchCard from '../component/dashboard/assets/SearchCard';
import SearchForm from '../component/dashboard/SearchForm';

const Cartridges = () => {
  const columns = [
    {
      name: "NAME",
      selector: (row) => row.name,
    },
    {
      name: "REFERENCE",
      selector: (row) => row.ref,
    },
    {
      name: "TYPE",
      selector: (row) => row.cartridgeitemtypes_id[0]["name"],
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
      name: "CARTRIDGES",
      selector: (row) => row.id,
    }, // revisar
  ];

  return (
    <div className="cartridges">
      <SearchForm />
      <SearchCard asset="cartridgeitems" columns={columns} />
    </div>
  )
}

export default Cartridges