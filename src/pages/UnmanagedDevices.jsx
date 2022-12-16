import React from 'react'
import SearchCard from '../component/dashboard/assets/SearchCard';
import SearchForm from '../component/dashboard/SearchForm';

const UnmanagedDevices = () => {
  const columns = [
    {
      name: "NAME",
      sortable: true,
      selector: (row) => row?.name,
    },

  ]
  return (
    <div className='unmanaged-devices'>
      <SearchForm />
      <SearchCard asset="unmanageds" columns={columns} />
    </div>
  )
}

export default UnmanagedDevices;