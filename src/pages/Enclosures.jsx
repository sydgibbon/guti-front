import React from 'react';
import SearchCard from '../component/dashboard/assets/SearchCard';
import SearchForm from '../component/dashboard/SearchForm';

const Enclosures = () => {
  const itemProps = [
    "name",
  ];
  const columns = [
    "NAME",
  ];
  return (
    <div className='enclosures'>
      <SearchForm />
      <SearchCard asset="enclosures" columns={columns} itemProps={itemProps}/>
    </div>
  )
}

export default Enclosures