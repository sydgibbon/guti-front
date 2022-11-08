import React from 'react';
import SearchCard from '../component/dashboard/assets/SearchCard';
import SearchForm from '../component/dashboard/SearchForm';

const Racks = () => {
  const itemProps = [
    "name",

  ];
  const columns = [
    "NAME",

  ];
  return (
    <div className='racks'>
      <SearchForm />
      <SearchCard asset="racks" columns={columns} itemProps={itemProps}/>
    </div>
  )
}

export default Racks