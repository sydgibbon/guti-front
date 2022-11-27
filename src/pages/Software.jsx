import React from 'react';
import SearchCard from '../component/dashboard/assets/SearchCard';
import SearchForm from '../component/dashboard/SearchForm';

const Software = () => {
  const columns = [
    {
      name: "NAME",
      selector: (row) => row?.name,
    },
    {
      name: "PUBLISHER",
      selector: (row) => row?.manufacturers?.name, 
    },
    {
      name: "VERSIONS - NAME",
      selector: (row) => row?.manufacturers?.name, //hay que trabajar la logica de versions
    },
    {
      name: "VERSION - OPERATING SYSTEMS",
      selector: (row) => row?.manufacturers?.name, //hay que trabajar la logica de versions
    },
    {
      name: "NUMBER OF INSTALLATIONS",
      selector: (row) => row?.manufacturers?.name, //hay que trabajar la logica de versions
    },
    {
      name: "LICENSES - NUMBER OF LICESNSES",
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