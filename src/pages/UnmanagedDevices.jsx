import React from 'react'
import SearchCard from '../component/dashboard/assets/SearchCard';
import SearchForm from '../component/dashboard/SearchForm';

const UnmanagedDevices = () => {
    const itemProps = [
        "name",
      ];
      const columns = [
        "NAME",
      ];
      return (
        <div className='unmanaged-devices'>
          <SearchForm />
          <SearchCard asset="unmanageds" columns={columns} itemProps={itemProps}/>
        </div>
      )
}

export default UnmanagedDevices