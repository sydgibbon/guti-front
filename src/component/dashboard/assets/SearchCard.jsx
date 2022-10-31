import { useState, useEffect } from "react";
import {
  TbTool,
  TbTrash,
  TbMap2,
  TbSearch,
  TbFileDownload,
  TbCaretDown,
} from "react-icons/tb";
import { BsChevronCompactDown, BsArrow90DegDown } from "react-icons/bs";
import Switch from "react-switch";
import axiosPrivate from "../../../api/axios";

const SearchCard = () => {
  const [checked, setChecked] = useState(false)
  const [loadingData, setLoadingData] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      await axiosPrivate
        .get("http://127.0.0.1:8000/api/computers/")
        .then((response) => {
          // check if the data is populated
          console.log(response.data);
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

      <table className="w-full">
        <thead>
          <tr className="gap-2 border-secondary-dark border-y text-left text-xs font-semibold bg-medium-gray">
            <th className="pl-2">
              <input
                type="checkbox"
                className="w-4 h-4 mt-2 ml-0.5 px-2"
              ></input>
            </th>
            <th className="px-2">
              <span>NAME</span>
              <TbCaretDown className="inline my-auto" />
            </th>
            <th className="px-2">STATUS</th>
            <th className="px-2">MANUFACTURERS</th>
            <th className="px-2">SERIAL NUMBER</th>
            <th className="px-2">TYPES</th>
            <th className="px-2">MODEL</th>
            <th className="px-2">OPERATING SYSTEM - NAME</th>
            <th className="px-2">LOCATIONS</th>
            <th className="px-2">LAST UPDATE</th>
            <th className="px-2">COMPONENTS - PROCESSORS</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              key={item.id}
              className="gap-2 text-xs bg-white border-secondary-dark border-b "
            >
              <td className="pl-2">
                <input type="checkbox" className="w-4 h-4 mt-2 ml-0.5" />
              </td>
              <td className="pl-2">{item.name}</td>
              <td className="pl-2">{item.manufacturers_id}</td>
              <td className="pl-2">{item.serial}</td>
              <td className="pl-2">{item.computertypes_id}</td>
              <td className="pl-2">{item.computermodels_id}</td>
              <td className="pl-2">{item.states_id}</td>
              <td className="pl-2">{item.entities_id}</td>
              <td className="pl-2">{item.locations_id}</td>
              <td className="pl-2">{item.last_inventory_update}</td>
              <td className="pl-2">{item.comment}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="search-card-footer flex items-center w-full bg-medium-gray">
        <div className="footer-section w-1/2 my-5 ">
          <select className="w-24 ml-5 border-secondary-dark border rounded">
            <option value="20">20</option>
          </select>
          <span className="ml-4 ">rows / page</span>
        </div>
        <span className="w-1/2 text-lg mt-5">Showing 1 to 1 of 1 Rows</span>
      </div>
    </div>
  );
};

export default SearchCard;
