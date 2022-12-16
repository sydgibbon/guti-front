import React from 'react';
import SearchCard from '../component/dashboard/assets/SearchCard';
import SearchForm from '../component/dashboard/SearchForm';

const Software = () => {
  const columns = [
    {
      name: "NAME",
      sortable: true,
      selector: (row) => row?.name,
    },
    {
      name: "PUBLISHER",
      sortable: true,
      selector: (row) => row?.manufacturers?.name, 
    },
    {
      name: "VERSIONS - NAME",
      sortable: true,
      selector: (row) => row?.manufacturers?.name, //hay que trabajar la logica de versions
    },
    {
      name: "VERSION - OPERATING SYSTEMS",
      sortable: true,
      selector: (row) => row?.manufacturers?.name, //hay que trabajar la logica de versions
    },
    {
      name: "NUMBER OF INSTALLATIONS",
      sortable: true,
      selector: (row) => row?.manufacturers?.name, //hay que trabajar la logica de versions
    },
    {
      name: "LICENSES - NUMBER OF LICESNSES",
      sortable: true,
      selector: (row) => row?.manufacturers?.name, //hay que trabajar la logica de licenses
    },
   ];
  return (
    <div className='software'>
      <SearchForm />
      <SearchCard asset="softwares" columns={columns} />
    </div>
  )
}

export default Software