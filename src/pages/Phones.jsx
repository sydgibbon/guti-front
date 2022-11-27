import React from 'react';
import SearchCard from '../component/dashboard/assets/SearchCard';
import SearchForm from '../component/dashboard/SearchForm';

const Phones = () => {
  const columns = [
    {
      name: "NAME",
      selector: (row) => row?.name,
    },
    {
      name: "STATUS",
      selector: (row) => row?.states?.name,
    },
    {
      name: "MANUFACTURERS",
      selector: (row) => row?.manufacturers?.name,
    },
    {
      name: "LOCATIONS",
      selector: (row) => row?.locations?.name,
    },
    {
      name: "TYPE",
      selector: (row) => row?.phonetypes?.name,
    },
    {
      name: "MODEL",
      selector: (row) => row?.phonemodels?.name,
    },
    {
      name: "LAST UPDATE",
      selector: (row) => row?.date_mod,
    },
    {
      name: "ALTERNATE USERNAM",
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