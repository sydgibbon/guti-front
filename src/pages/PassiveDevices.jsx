import React from 'react';
import SearchCard from '../component/dashboard/assets/SearchCard';
import SearchForm from '../component/dashboard/SearchForm';

const PassiveDevices = () => {
  const columns = [
    {
      name: "NAME",
      sortable: true,
      selector: (row) => row?.name,
    },
    
  ];
  return (
    <div className="passivedevices">
      <SearchForm />
      <SearchCard asset="passivedcequipments" columns={columns} />
    </div>
  );
};

export default PassiveDevices;