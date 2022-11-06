import React from 'react';
import SearchCard from '../component/dashboard/assets/SearchCard';
import SearchForm from '../component/dashboard/SearchForm';

const Monitors = () => {
  // Va en minusculas
  const itemProps = [
    'name',
    'states_id',
    'manufacturers_id',
    'locations_id',
    'monitortypes_id',
    'monitormodels_id',
    'date_mod',
    'contact'
  ];
  // Va en mayusculas
  const columns = [
    'NAME',
    'STATUS',
    'MANUFACTURER',
    'LOCATION',
    'TYPE',
    'MODEL',
    'LAST UPDATE',
    'ALTERNATE USERNAME', 
  ];
  return (
    <div className='monitors'>
      <SearchForm />
      <SearchCard asset="monitors" columns={columns} itemProps={itemProps}/>
    </div>
  )
}

export default Monitors