import React from 'react';
import SearchCard from '../component/dashboard/assets/SearchCard';
import SearchForm from '../component/dashboard/SearchForm';
const Devices = () => {
      const columns = [
        {
          name: "NAME",
          selector: (row) => row.name,
        },
        {
          name: "STATUS",
          selector: (row) => row.states_id[0]["name"], 
        },
        {
          name: "MANUFACTURERS",
          selector: (row) => row.manufacturers_id[0]["name"],
        },
        {
          name: "LOCATIONS",
          selector: (row) => row.locations_id[0]["name"], 
        },
        {
          name: "TYPES",
          selector: (row) => row.peripheraltypes_id[0]["name"], 
        },
        {
          name: "MODEL",
          selector: (row) => row.peripheralmodels_id[0]["name"]
        },
        {
          name: "LAST UPDATE",
          selector: (row) => row.date_mod, 
        },
        {
          name: "ALTERNATE USERNAME",
          selector: (row) => row.contact, 
        },
      ];
      return (
        <div className='devices'>
          <SearchForm />
          <SearchCard asset="peripherals" columns={columns} />
        </div>
      )
}

export default Devices