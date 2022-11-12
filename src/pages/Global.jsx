import React from 'react';
import SearchCard from '../component/dashboard/assets/SearchCard';
import SearchForm from '../component/dashboard/SearchForm';

const Global = () => {
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
      name: "ITEM TYPE",
      selector: (row) => row.name,
    },
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