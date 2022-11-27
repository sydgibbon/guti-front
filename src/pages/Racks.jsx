import React from 'react';
import SearchCard from '../component/dashboard/assets/SearchCard';
import SearchForm from '../component/dashboard/SearchForm';

const Racks = () => {
  const columns = [
    {
      name: "NAME",
      selector: (row) => row?.name,
    },
  ];
  return (
    <div className="racks">
      <SearchForm />
      <SearchCard asset="racks" columns={columns} />
    </div>
  )
}

export default Racks