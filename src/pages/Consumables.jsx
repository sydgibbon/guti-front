import React from 'react';
import SearchCard from '../component/dashboard/assets/SearchCard';
import SearchForm from '../component/dashboard/SearchForm';

const Consumables = () => {
  const columns = [
    {
      name: "NAME",
      sortable: true,
      selector: (row) => row?.name,
    },
    {
      name: "REFERENCE",
      sortable: true,
      selector: (row) => row?.ref,
    },
    {
      name: "TYPE",
      sortable: true,
      selector: (row) => row?.consumableitemtypes?.name,
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
      name: "CONSUMABLES",
      sortable: true,
      selector: (row) => row?.id,
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