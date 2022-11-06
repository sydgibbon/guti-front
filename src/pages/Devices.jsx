import React from 'react';
import SearchCard from '../component/dashboard/assets/SearchCard';
import SearchForm from '../component/dashboard/SearchForm';
const Devices = () => {
    const itemProps = [
        "name",
        "states_id",
        "manufacturers_id",
        "locations_id",
        "peripheraltypes_id",
        "peripheralmodels_id",
        "date_mod",
        "contact"
      ];
      const columns = [
        "NAME",
        "STATUS",
        "MANUFACTURERS",
        "LOCATIONS",
        "TYPES",
        "MODEL",
        "LAST UPDATE",
        "ALTERNATE USERNAME",
      ];
      return (
        <div className='devices'>
          <SearchForm />
          <SearchCard asset="peripherals" columns={columns} itemProps={itemProps}/>
        </div>
      )
}

export default Devices