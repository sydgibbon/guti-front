import React from 'react';
import SearchCard from '../component/dashboard/assets/SearchCard';
import SearchForm from '../component/dashboard/SearchForm';

const Phones = () => {
  const itemProps = [
    "name",
    "states_id",
    "manufacturers_id",
    "locations_id",
    "phonetypes_id",
    "phonemodels_id",
    "date_mod",
    "contact", 
  ];
  const columns = [
    "NAME",
    "STATUS",
    "MANUFACTURERS",
    "LOCATIONS",
    "TYPE",
    "MODEL",
    "LAST UPDATE",
    "ALTERNATE USERNAME",
  ];
  return (
    <div className='phones'>
      <SearchForm />
      <SearchCard asset="phones" columns={columns} itemProps={itemProps}/>
    </div>
  )
}

export default Phones