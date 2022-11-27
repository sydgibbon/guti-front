import React from 'react';
import SearchCard from '../component/dashboard/assets/SearchCard';
import SearchForm from '../component/dashboard/SearchForm';

const NetworkDevices = () => {
  const columns = [
    {
      name: "NAME",
      selector: (row) => row?.name,
    },
    {
      name: "STATUS",
      selector: (row) => row?.states?.name, // hace referencia al objeto que contiene states dentro (mirar consola chrome)
    },
    {
      name: "MANUFACTURERS",
      selector: (row) => row?.manufacturers?.name,
    },
    {
      name: "LOCATIONS",
      selector: (row) => row?.locations?.name, // hace referencia al objeto que contiene states dentro (mirar consola chrome)
    },
    {
      name: "TYPES",
      selector: (row) => row?.networkequipmenttypes?.name, // hace referencia al objeto que contiene states dentro (mirar consola chrome)
    },
    {
      name: "MODEL",
      selector: (row) => row?.serial,
    },
    {
      name: "FIRMWARE",
      selector: (row) => row?.serial,
    },
    {
      name: "LAST UPDATE",
      selector: (row) => row?.date_mod,
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