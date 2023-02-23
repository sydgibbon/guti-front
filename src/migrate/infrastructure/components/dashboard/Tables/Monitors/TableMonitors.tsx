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
import DataTable from "react-data-table-component";
import SkeletonTable from "../../../Skeletons/SkeletonTable";
import { TableMonitorsProps } from "./types";
import { useGetAllMonitors } from "../../../../hooks/Monitors/useGetAllMonitors";

export default function TableMonitors(tableMonitorsProps: TableMonitorsProps) {
  const { columns } = tableMonitorsProps;

  const [checked, setChecked] = useState(false);

  const monitors = useGetAllMonitors()

  useEffect(() => {
    monitors.get()
  }, []);

  useEffect(() => {
    if(monitors.error){
      console.log(monitors.error)
    }
  }, [monitors.error]);

  return (
    <div className="mx-4 my-4 border rounded search-card border-secondary-dark">
      <div className="flex h-16 gap-2 pl-5 border-b search-card-header align-center border-secondary-light bg-medium-gray">
        <div className="actions-button w-20 h-8 mt-4 ml-5 border border-black gap-2 flex rounded-md items-center px-2 py-0.5 bg-white">
          <BsArrow90DegDown className="w-3 h-3" />
          <span className="font-sans text-xs font-normal leading-4">
            Actions
          </span>
        </div>

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
      { monitors.isLoading ? (
        <SkeletonTable />
      ) : (
        <DataTable
          onSelectedRowsChange={(selected) => console.log(selected)}
          columns={columns}
          data={monitors.data}
          pagination
          paginationPerPage={20}
          paginationRowsPerPageOptions={[
            5, 10, 15, 20, 30, 40, 50, 100, 150, 200, 250, 500, 750, 1000, 2000,
            3000, 10000,
          ]}
          defaultSortFieldId={1}
        />
      )}
    </div>
  );
}
