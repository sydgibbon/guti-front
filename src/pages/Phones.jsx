import React from 'react';
import SearchCard from '../component/dashboard/assets/SearchCard';
import SearchForm from '../component/dashboard/SearchForm';

const Phones = () => {
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
      name: "TYPE",
      sortable: true,
      selector: (row) => row?.phonetypes?.name,
    },
    {
      name: "MODEL",
      sortable: true,
      selector: (row) => row?.phonemodels?.name,
    },
    {
      name: "LAST UPDATE",
      sortable: true,
      selector: (row) => row?.date_mod,
    },
    {
      name: "ALTERNATE USERNAM",
      sortable: true,
      selector: (row) => row?.contact,
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