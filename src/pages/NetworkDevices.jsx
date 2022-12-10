import React from 'react';
import SearchCard from '../component/dashboard/assets/SearchCard';
import SearchForm from '../component/dashboard/SearchForm';

const NetworkDevices = () => {
  const columns = [
    {
      name: "NAME",
      sortable: true,
      selector: (row) => row?.name,
    },
    {
      name: "STATUS",
      sortable: true,
      selector: (row) => row?.states?.name, // hace referencia al objeto que contiene states dentro (mirar consola chrome)
    },
    {
      name: "MANUFACTURERS",
      sortable: true,
      selector: (row) => row?.manufacturers?.name,
    },
    {
      name: "LOCATIONS",
      sortable: true,
      selector: (row) => row?.locations?.name, // hace referencia al objeto que contiene states dentro (mirar consola chrome)
    },
    {
      name: "TYPES",
      sortable: true,
      selector: (row) => row?.networkequipmenttypes?.name, // hace referencia al objeto que contiene states dentro (mirar consola chrome)
    },
    {
      name: "MODEL",
      sortable: true,
      selector: (row) => row?.serial,
    },
    {
      name: "FIRMWARE",
      sortable: true,
      selector: (row) => row?.serial,
    },
    {
      name: "LAST UPDATE",
      sortable: true,
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