import React from 'react'
import SearchCard from '../component/dashboard/assets/SearchCard';
import SearchForm from '../component/dashboard/SearchForm';

const Printers = () => {
      const columns = [
        {
          name: "NAME",
          selector: (row) => row.name,
        },
        {
          name: "STATUS",
          selector: (row) => row.states_id[0]["name"], // hace referencia al objeto que contiene states_id dentro (mirar consola chrome)
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
          selector: (row) => row.printertypes_id[0]["name"], 
        },
        {
          name: "MODEL",
          selector: (row) => row.printermodels_id[0]["name"]
        },
        {
          name: "LAST UPDATE",
          selector: (row) => row.date_mod, 
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