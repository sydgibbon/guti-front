import React from 'react';
import SearchCard from '../component/dashboard/assets/SearchCard';
import SearchForm from '../component/dashboard/SearchForm';

const NetworkDevices = () => {
  // Va en minusculas
  const itemProps = [
    'name',
    'states_id',
    'manufacturers_id',
    'locations_id',
    'networkequipmenttypes_id',
    'networkequipmentmodels_id',
    'networkequipmentmodels_id', //firmware
    'date_mod',
  ];
  // Va en mayusculas
  const columns = [
    'NAME',
    'STATUS',
    'MANUFACTURER',
    'LOCATION',
    'TYPE',
    'MODEL',
    'FIRMWARE',
    'LAST UPDATE'
  ];
  return (
    <div className='networkdevices'>
      <SearchForm />
      <SearchCard asset="networkequipments" columns={columns} itemProps={itemProps}/>
    </div>
  )
}

export default NetworkDevices