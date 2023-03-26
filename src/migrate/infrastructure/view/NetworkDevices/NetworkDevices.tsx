import SearchForm from "../../components/dashboard/SearchForm";
import TableNetworkDevices from "../../components/dashboard/Tables/NetworkDevices/Table";

export default function NetworkDevices() {
  return (
    <div className="networkdevices">
      <SearchForm />
      <TableNetworkDevices />
    </div>
  );
}

