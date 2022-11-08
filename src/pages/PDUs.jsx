import React from 'react'
import SearchCard from '../component/dashboard/assets/SearchCard';
import SearchForm from '../component/dashboard/SearchForm';

const PDUs = () => {
    const itemProps = [
        "name",
      ];
      const columns = [
        "NAME",
      ];
      return (
        <div className='pdus'>
          <SearchForm />
          <SearchCard asset="pdus" columns={columns} itemProps={itemProps}/>
        </div>
      )
}

export default PDUs