import React from 'react';
import SearchCard from '../component/dashboard/assets/SearchCard';
import SearchForm from '../component/dashboard/SearchForm';

const Cartridges = () => {
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
      selector: (row) => row?.cartridgeitemtypes?.name,
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
      name: "CARTRIDGES",
      sortable: true,
      selector: (row) => row?.id,
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