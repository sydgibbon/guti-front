import { useState, useEffect } from "react";
import {
  TbTool,
  TbTrash,
  TbMap2,
  TbSearch,
  TbFileDownload,
} from "react-icons/tb";
import { BsChevronCompactDown, BsArrow90DegDown } from "react-icons/bs";
import Switch from "react-switch";
import axiosPrivate from "../../../api/axios";
import DataTable from "react-data-table-component";

const SearchCard = ({ asset, columns}) => {
  const [checked, setChecked] = useState(false);
  const [loadingData, setLoadingData] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      await axiosPrivate
        .get("http://127.0.0.1:8000/api/assets/" + asset + "/")
        .then((response) => {
          // check if the data is populated
          setData(response.data);
          // you tell it that you had the result
          setLoadingData(false);
        });
    }
    if (loadingData) {
      // if the result is not ready so you make the axios call
      getData();
    }
  }, []);
  return (
    <div className="search-card mx-4 border border-secondary-dark rounded my-4">
      <div className="search-card-header pl-5 flex align-center gap-2  h-16 border-b border-secondary-light bg-medium-gray">
        <div className="actions-button w-20 h-8 mt-4 ml-5 border border-black gap-2 flex rounded-md items-center px-2 py-0.5 bg-white">
          <BsArrow90DegDown className="h-3 w-3" />
          <span className="font-sans font-normal text-xs leading-4">
            Actions
          </span>
        </div>

        <div className="buttons flex flex-row p-0 gap-5 my-5 w-72 h-6">
          <div className="switches items-center gap-2 flex ">
            <div className="map-switch flex items-center gap-1">
              <Switch
                checked={checked}
                onChange={() => setChecked(!checked)}
                className=""
                uncheckedIcon={false}
                checkedIcon={false}
                offHandleColor={"#000"}
                onHandleColor={"#000"}
                offColor={"#D9D9D9"}
                onColor={"#D9D9D9"}
                height={16}
                width={30}
                handleDiameter={10}
                borderRadius={6}
              />
              <TbMap2 className="w-6 h-6 stroke-1" />
            </div>

            <div className="trash-switch flex items-center gap-1">
              <Switch
                checked={checked}
                onChange={() => setChecked(!checked)}
                className=""
                uncheckedIcon={false}
                checkedIcon={false}
                offHandleColor={"#000"}
                onHandleColor={"#000"}
                offColor={"#D9D9D9"}
                onColor={"#D9D9D9"}
                height={16}
                width={30}
                handleDiameter={10}
                borderRadius={6}
              />
              <TbTrash className="w-6 h-6 stroke-1" />
            </div>

            <div className="search-switch flex items-center gap-1">
              <Switch
                checked={checked}
                onChange={() => setChecked(!checked)}
                className=""
                uncheckedIcon={false}
                checkedIcon={false}
                offHandleColor={"#000"}
                onHandleColor={"#000"}
                offColor={"#D9D9D9"}
                onColor={"#D9D9D9"}
                height={16}
                width={30}
                handleDiameter={10}
                borderRadius={6}
              />
              <TbSearch className="w-6 h-6 stroke-1" />
            </div>

            <TbTool className="w-6 h-6 stroke-1" />

            <div className="export-submenu flex items-center">
              <TbFileDownload className="w-6 h-6 stroke-1" />
              <BsChevronCompactDown className="w-2" />
            </div>
          </div>
        </div>
      </div>

      <DataTable columns={columns} selectableRows data={data} pagination paginationPerPage={20} paginationRowsPerPageOptions={[5, 10, 15, 20, 30, 40, 50, 100, 150, 200, 250, 500,750, 1000, 2000, 3000, 10000]} defaultSortFieldId={1} />

    </div>
  );
};

export default SearchCard;
