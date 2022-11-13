import React from 'react';
import SearchCard from '../component/dashboard/assets/SearchCard';
import SearchForm from '../component/dashboard/SearchForm';

const NetworkDevices = () => {
  const columns = [
    {
      name: "NAME",
      selector: (row) => row.name,
    },
    {
      name: "STATUS",
      selector: (row) => row.states_id[0]["name"], // hace referencia al objeto que contiene states_id dentro (mirar consola chrome)
    },
    {
      name: "MANUFACTURERS",
      selector: (row) => row.manufacturers_id[0]["name"],
    },
    {
      name: "LOCATIONS",
      selector: (row) => row.locations_id[0]["name"], // hace referencia al objeto que contiene states_id dentro (mirar consola chrome)
    },
    {
      name: "TYPES",
      selector: (row) => row.networkequipmenttypes_id[0]["name"], // hace referencia al objeto que contiene states_id dentro (mirar consola chrome)
    },
    {
      name: "MODEL",
      selector: (row) => row.serial,
    },
    {
      name: "FIRMWARE",
      selector: (row) => row.serial,
    },
    {
      name: "LAST UPDATE",
      selector: (row) => row.date_mod,
    },
    
  ];
  return (
    <div className='networkdevices'>
      <SearchForm />
      <SearchCard asset="networkequipments" columns={columns} />
    </div>
  )
}

export default NetworkDevices