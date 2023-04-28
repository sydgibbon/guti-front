import TableConsumableItems from "../../../infrastructure/components/dashboard/Tables/Consumables/Table";
import SearchForm from "../../components/dashboard/SearchForm";

const ConsumableItems = () => {
  return (
    <div className="consumableitems">
      <SearchForm />
      <TableConsumableItems />
    </div>
  );
};

export default ConsumableItems;
