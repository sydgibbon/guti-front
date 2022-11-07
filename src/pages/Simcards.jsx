import React from 'react';
import SearchCard from '../component/dashboard/assets/SearchCard';
import SearchForm from '../component/dashboard/SearchForm';

const Simcards = () => {
  // Va en minusculas
  const itemProps = [
    'id'
  ];
  // Va en mayusculas
  const columns = [
    'ID'
  ];
  return (
    <div className='simcards'>
      <SearchForm />
      <SearchCard asset="devicesimcards" columns={columns} itemProps={itemProps}/>
    </div>
  )
}

export default Simcards