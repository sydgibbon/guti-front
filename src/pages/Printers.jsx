import React from 'react'
import SearchCard from '../component/dashboard/assets/SearchCard';
import SearchForm from '../component/dashboard/SearchForm';

const Printers = () => {
      const columns = [
        {
          name: "NAME",
          selector: (row) => row?.name,
        },
        {
          name: "STATUS",
          selector: (row) => row?.states?.name, // hace referencia al objeto que contiene states dentro (mirar consola chrome)
        },
        {
          name: "MANUFACTURERS",
          selector: (row) => row?.manufacturers?.name,
        },
        {
          name: "LOCATIONS",
          selector: (row) => row?.locations?.name, 
        },
        {
          name: "TYPES",
          selector: (row) => row?.printertypes?.name, 
        },
        {
          name: "MODEL",
          selector: (row) => row?.printermodels?.name
        },
        {
          name: "LAST UPDATE",
          selector: (row) => row?.date_mod, 
        },
      ];
      return (
        <div className='printers'>
          <SearchForm />
          <SearchCard asset="printers" columns={columns} />
        </div>
      )
}

export default Printers