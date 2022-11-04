import React from 'react';
import SearchCard from '../component/dashboard/assets/SearchCard';
import SearchForm from '../component/dashboard/SearchForm';

const Consumables = () => {
  const itemProps = [
    "consumables_id",
    "serial",
    "computermodels_id",
    "states_id",
    "entities_id",
    "locations_id",
  ];
  const columns = [
    "NAME",
    "REFERENCE",
    "TYPE",
    "MANUFACTURERS",
    "LOCATIONS",
    "CONSUMABLES",
  ];
  return (
    <div className='consumables'>
      <SearchForm />
      <SearchCard asset="consumableitems" columns={columns} itemProps={itemProps}/>
    </div>
  )
}

export default Consumables