import React from 'react';
import SearchCard from '../component/dashboard/assets/SearchCard';
import SearchForm from '../component/dashboard/SearchForm';

const Global = () => {
  const columns = [
    {
      name: "NAME",
      sortable: true,
      selector: (row) => row?.name,
    },
    {
      name: "STATUS",
      sortable: true,
      selector: (row) => row?.states?.name,
    },
    {
      name: "ITEM TYPE",
      sortable: true,
      selector: (row) => row?.name,
    },
    // revisar item Type
  ];
  return (
    // no encontré la tabla GLOBAL ni en glpi ni en nuestro soft
    <div className="global">
      <SearchForm />
      <SearchCard asset="global" columns={columns} />
    </div>
  )
}

export default Global