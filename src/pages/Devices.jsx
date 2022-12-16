import React from 'react';
import SearchCard from '../component/dashboard/assets/SearchCard';
import SearchForm from '../component/dashboard/SearchForm';
const Devices = () => {
      const columns = [
        {
          name: "NAME",
          sortable: true,
      selector: (row) => row?.name,
        },
        {
          name: "STATUS",
          sortable: true,
      selector: (row) => row?.states?.name, 
        },
        {
          name: "MANUFACTURERS",
          sortable: true,
      selector: (row) => row?.manufacturers?.name,
        },
        {
          name: "LOCATIONS",
          sortable: true,
      selector: (row) => row?.locations?.name, 
        },
        {
          name: "TYPES",
          sortable: true,
      selector: (row) => row?.peripheraltypes?.name, 
        },
        {
          name: "MODEL",
          sortable: true,
      selector: (row) => row?.peripheralmodels?.name
        },
        {
          name: "LAST UPDATE",
          sortable: true,
      selector: (row) => row?.date_mod, 
        },
        {
          name: "ALTERNATE USERNAME",
          sortable: true,
      selector: (row) => row?.contact, 
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