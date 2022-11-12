import React from 'react';
import SearchCard from '../component/dashboard/assets/SearchCard';
import SearchForm from '../component/dashboard/SearchForm';

const Consumables = () => {
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
      selector: (row) => row.consumableitemtypes_id[0]["name"],
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
      name: "CONSUMABLES",
      selector: (row) => row.id,
    }, // Acá debería ir consumables EJ: Total: 1, New: 1, Used: 0
  ];
  return (
    <div className="consumables">
      <SearchForm />
      <SearchCard asset="consumableitems" columns={columns} />
    </div>
  )
}

export default Consumables