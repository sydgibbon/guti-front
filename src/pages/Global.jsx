import React from 'react';
import SearchCard from '../component/dashboard/assets/SearchCard';
import SearchForm from '../component/dashboard/SearchForm';

const Global = () => {
  const itemProps = [
    "name",
    "states_id",
    "name",

  ];
  const columns = [
    "NAME",
    "STATUS",
    "ITEM TYPE",

  ];
  return (
    <div className='global'>
      <SearchForm />
      <SearchCard asset="global" columns={columns} itemProps={itemProps}/>
    </div>
  )
}

export default Global