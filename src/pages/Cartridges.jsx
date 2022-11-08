import React from 'react'
import SearchCard from '../component/dashboard/assets/SearchCard';
import SearchForm from '../component/dashboard/SearchForm';

const Cartridges = () => {
    const itemProps = [
        "name",
        "ref",
        "cartridgeitemtypes_id",
        "manufacturers_id",
        "locations_id",
        "id", // Total	1	New	1 Used	0	Worn	0
      ];
      const columns = [
        "NAME",
        "REFERENCE",
        "TYPES",
        "MANUFACTURERS",
        "LOCATIONS",
        "CARTRIDGES"
      ];
      return (
        <div className='cartridges'>
          <SearchForm />
          <SearchCard asset="cartridgeitems" columns={columns} itemProps={itemProps}/>
        </div>
      )
}

export default Cartridges