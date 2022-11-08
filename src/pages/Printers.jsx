import React from 'react'
import SearchCard from '../component/dashboard/assets/SearchCard';
import SearchForm from '../component/dashboard/SearchForm';

const Printers = () => {
    const itemProps = [
        "name",
        "states_id",
        "manufacturers_id",
        "locations_id",
        "printertypes_id",
        "printermodels_id",
        "date_mod",
      ];
      const columns = [
        "NAME",
        "STATUS",
        "MANUFACTURERS",
        "LOCATIONS",
        "TYPES",
        "MODEL",
        "LAST UPDATE",
      ];
      return (
        <div className='printers'>
          <SearchForm />
          <SearchCard asset="printers" columns={columns} itemProps={itemProps}/>
        </div>
      )
}

export default Printers