import SearchCard from "../../components/dashboard/assets/SearchCard";
import SearchForm from "../../components/dashboard/SearchForm";

const AssetsView = () => {
  return (
    <div className="assets">
      <SearchForm />
      <SearchCard asset={""} columns={[]} />
    </div>
  );
};

export default AssetsView;
