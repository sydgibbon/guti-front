import React from 'react';
import SearchCard from '../component/dashboard/assets/SearchCard';
import SearchForm from '../component/dashboard/SearchForm';

const Enclosures = () => {
  const itemProps = [
    "name",
    "ref",
    "consumableitemtypes_id",
    "manufacturers_id",
    "locations_id",
    "locations_id", // Acá debería ir consumables EJ: Total: 1, New: 1, Used: 0
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

export default Enclosures