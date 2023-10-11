import { useState, useEffect } from "react";
import {
  TbTool,
  TbTrash,
  TbMap2,
  TbSearch,
  TbFileDownload,
} from "react-icons/tb";
import { BsChevronCompactDown } from "react-icons/bs";
import Switch from "react-switch";
import { useGetAllComputers } from "../../../../hooks/Computers/useGetAllComputers";
import TableComponent from "../../../Table/Table";
import { columns } from "./TableData";
import DropdownMenu from "../../../atomic/Dropdown/DropdownMenu";

export default function TableComputers() {
  const [checked, setChecked] = useState(false);
  const computers = useGetAllComputers();

  useEffect(() => {
    computers.get();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mx-4 my-4 border rounded search-card border-secondary-dark">
      <div className="flex h-16 gap-2 pl-5 border-b search-card-header align-center border-secondary-light bg-medium-gray">
        <DropdownMenu title="Actions" />
        <div className="flex flex-row h-6 gap-5 p-0 my-5 buttons w-72">
          <div className="flex items-center gap-2 switches ">
            <div className="flex items-center gap-1 map-switch">
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

            <div className="flex items-center gap-1 trash-switch">
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

            <div className="flex items-center gap-1 search-switch">
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

            <div className="flex items-center export-submenu">
              <TbFileDownload className="w-6 h-6 stroke-1" />
              <BsChevronCompactDown className="w-2" />
            </div>
          </div>
        </div>
      </div>
      <TableComponent
        progressPending={computers.isLoading}
        columns={columns}
        rows={computers.data}
      />
    </div>
  );
}
