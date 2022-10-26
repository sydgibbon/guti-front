import React from 'react';
import SearchCard from '../component/dashboard/assets/SearchCard';
import SearchForm from '../component/dashboard/SearchForm';

const Computers = () => {
  return (
    <div className='computers'>
      <SearchForm />
      <SearchCard />
    </div>
  )
}

export default Computers