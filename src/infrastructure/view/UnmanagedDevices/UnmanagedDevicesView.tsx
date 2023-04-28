import SearchForm from "../../components/dashboard/SearchForm";
import TableUnmanaged from "../../components/dashboard/Tables/Unmanageds/Table";

const UnmanagedDevicesView = () => {
  return (
    <div className="unmanaged-devices">
      <SearchForm />
      <TableUnmanaged />
    </div>
  );
};

export default UnmanagedDevicesView;
