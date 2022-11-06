import React from 'react';
import SearchCard from '../component/dashboard/assets/SearchCard';
import SearchForm from '../component/dashboard/SearchForm';

const PassiveDevices = () => {
  // Va en minusculas
  const itemProps = [
   'name',
  ];
  // Va en mayusculas
  const columns = [
    'NAME',

  ];
  return (
    <div className='passivedevices'>
      <SearchForm />
      <SearchCard asset="passivedcequipments" columns={columns} itemProps={itemProps}/>
    </div>
  )
}

export default PassiveDevices