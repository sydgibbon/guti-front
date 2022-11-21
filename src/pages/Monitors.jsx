import React from 'react';
import SearchCard from '../component/dashboard/assets/SearchCard';
import SearchForm from '../component/dashboard/SearchForm';

const Monitors = () => {
  const columns = [
    {
      name: "NAME",
      selector: (row) => row.name,
    },
    {
      name: "STATUS",
      selector: (row) => row.states["name"], 
    },
    {
      name: "MANUFACTURERS",
      selector: (row) => row.manufacturers["name"],
    },
    {
      name: "LOCATIONS",
      selector: (row) => row.locations["name"],
    },
    {
      name: "TYPES",
      selector: (row) => row.monitortypes["name"],
    },
    {
      name: "MODEL",
      selector: (row) => row.monitortypes["name"],
    },
    {
      name: "LAST UPDATE",
      selector: (row) => row.date_mod,
    },
    {
      name: "ALTERNATE USERNAME",
      selector: (row) => row.contact,
    },
  ]
  return (
    <div className='monitors'>
      <SearchForm />
      <SearchCard asset="monitors" columns={columns}/>
    </div>
  )
}

export default Monitors