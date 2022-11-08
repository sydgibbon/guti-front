import React from 'react';
import SearchCard from '../component/dashboard/assets/SearchCard';
import SearchForm from '../component/dashboard/SearchForm';

const Cables = () => {
  const itemProps = [
    "name",
    "cabletypes_id",
    "states_id",
    "name",
    "color",
    "users_id_tech",
    "users_id_tech",
    "users_id_tech",
    "sockets_id_endpoint_a",
    "sockets_id_endpoint_b",


  ];
  const columns = [
    "NAME",
    "CABLE TYPE",
    "STATUS",
    "INVENTORY/ASSET NUMBER",
    "COLOR",
    "TECHNICIAN IN CHARGE OF THE HARDWARE",
    "ASSOCIATED ITEMS (ENDPOINT B)",
    "ASSOCIATED ITEMS (ENDPOINT A)",
    "SOCKET (ENDPOINT A)",
    "SOCKET (ENDPOINT B)",

  ];
  return (
    <div className='cables'>
      <SearchForm />
      <SearchCard asset="cables" columns={columns} itemProps={itemProps}/>
    </div>
  )
}

export default Cables