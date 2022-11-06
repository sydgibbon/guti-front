import React from 'react';
import SearchCard from '../component/dashboard/assets/SearchCard';
import SearchForm from '../component/dashboard/SearchForm';

const Computers = () => {
  const itemProps = [
    "name",
    "manufacturers_id",
    "serial",
    "computertypes_id",
    "computermodels_id",
    "states_id",
    "entities_id",
    "locations_id",
    "date_mod",
    "comment",
  ];
  const columns = [
    "NAME",
    "STATUS",
    "MANUFACTURERS",
    "SERIAL NUMBER",
    "TYPES",
    "MODEL",
    "OPERATING SYSTEM - NAME",
    "LOCATIONS",
    "LAST UPDATE",
    "COMPONENTS - PROCESSORS",
  ];
  return (
    <div className='computers'>
      <SearchForm />
      <SearchCard asset="computers" columns={columns} itemProps={itemProps}/>
    </div>
  )
}

export default Computers