import React from 'react';
import SearchCard from '../component/dashboard/assets/SearchCard';
import SearchForm from '../component/dashboard/SearchForm';

const Software = () => {
  // Va en minusculas
  const itemProps = [
    'name',
    'manufacturers_id',
    'manufacturers_id', //software-version
    'manufacturers_id', //version-operating system
    'manufacturers_id', //number of installations
    'manufacturers_id', //licenses - number of licenses
  ];
  // Va en mayusculas
  const columns = [
    'NAME',
    'PUBLISHER',
    'VERSION-NAME',
    'VERSION - OPERATING SYSTEM',
    'NUMBER OF INSTALLATIONS',
    'LICENSES - NUMBER OF LICENSES'
  ];
  return (
    <div className='software'>
      <SearchForm />
      <SearchCard asset="softwares" columns={columns} itemProps={itemProps}/>
    </div>
  )
}

export default Software