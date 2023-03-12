import SearchForm from "../../../../component/dashboard/SearchForm";
import TableConsumableItems from "../../../infrastructure/components/dashboard/Tables/Consumables/Table";

const ConsumableItems = () => {
  return (
    <div className="consumableitems">
      <SearchForm />
      <TableConsumableItems />
    </div>
  );
};

export default ConsumableItems;
