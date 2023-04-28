import SearchForm from "../../components/dashboard/SearchForm";
import TableDevices from "../../components/dashboard/Tables/Devices/Table";

const DevicesItems = () => {
  return (
    <div className="devicesitems">
      <SearchForm />
      <TableDevices />
    </div>
  );
};

export default DevicesItems;
