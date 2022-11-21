import React from "react";
import {
  TbRefreshDot,
  TbCopy,
  TbShare,
  TbTrash,
  TbEdit,
  TbMaximize,
  TbDeviceLaptop,
  TbSubtask,
  TbPlus,
} from "react-icons/tb";
import { axiosPrivate } from "../../api/axios";
import GraphGrid from "./graph-grid/GraphGrid";
import GridItem from "./items-grid/GridItem";
import Donut from "../graph/Donut";
import BarChart from "../graph/BarChart";
import { assetsGridItems } from "../../contexts/AppItems";

const AssetsDashboard = () => {
  return (
    <div className="assets-dashboard flex flex-col items-start border rounded-md border-secondary-dark mx-6 my-5 bg-white">
      <div className="dashboard-header flex items-center w-full justify-between px-5 py-4 h-16">
        <div className="dashboard-options flex w-full md:w-auto items-center justify-between md:gap-2">
          <select className="cursor-pointer w-36 h-10 border border-secondary-dark rounded-md">
            <option value="Assets" className="text-sm">
              Assets
            </option>
          </select>
          <div className="cursor-pointer hover:bg-primary-light hover:text-white hover:border-orange-dark hover:border-2 border-transparent border-2 rounded p-2 mx-2">
            <TbPlus className="stroke-1 w-6 h-6 stroke-current" />
          </div>
        </div>

        <div className="buttons items-center hidden md:flex">
          <div className="cursor-pointer hover:bg-primary-light hover:text-white hover:border-orange-dark hover:border-2 border-transparent border-2 rounded p-2 mx-2">
            <TbRefreshDot className="stroke-1 w-6 h-6 stroke-current" />
          </div>
          <div className="cursor-pointer hover:bg-primary-light hover:text-white hover:border-orange-dark hover:border-2 border-transparent border-2 rounded p-2 mx-2">
            <TbCopy className="stroke-1 w-6 h-6 stroke-current" />
          </div>
          <div className="cursor-pointer hover:bg-primary-light hover:text-white hover:border-orange-dark hover:border-2 border-transparent border-2 rounded p-2 mx-2">
            <TbShare className="stroke-1 w-6 h-6 stroke-current" />
          </div>
          <div className="cursor-pointer hover:bg-primary-light hover:text-white hover:border-orange-dark hover:border-2 border-transparent border-2 rounded p-2 mx-2">
            <TbTrash className="stroke-1 w-6 h-6 stroke-current" />
          </div>
          <div className="cursor-pointer hover:bg-primary-light hover:text-white hover:border-orange-dark hover:border-2 border-transparent border-2 rounded p-2 mx-2">
            <TbEdit className="stroke-1 w-6 h-6 stroke-current" />
          </div>
          <div className="cursor-pointer hover:bg-primary-light hover:text-white hover:border-orange-dark hover:border-2 border-transparent border-2 rounded p-2 mx-2">
            <TbMaximize className="stroke-1 w-6 h-6 stroke-current" />
          </div>
        </div>
      </div>

      <div className="items-grid grid gap-5 px-5 py-5 w-full md:grid-cols-3 lg:grid-cols-5 grid-cols-1 ">
        {assetsGridItems.map((gridItem) => {
          return (
            <GridItem
              text={gridItem.name}
              bgColor={`bg-[${gridItem.bgColor}]`}
              textColor={`text-[${gridItem.textColor}]`}
              bgHoverColor={`hover:bg-[${gridItem.hoverbgColor}]`}
              borderHoverColor={`hover:border-[${gridItem.hoverBorderColor}]`}
              icon={gridItem.icon()}
              asset={gridItem.asset}
              path={gridItem.path}
            />
          );
        })}
      </div>

      <div className="graphs-grid grid-flow-row grid w-full grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 px-5 py-5">
        <GraphGrid
          icon={<TbSubtask className="stroke-2 w-6 h-6" />}
          graph={<Donut asset="computers" itemProp="states" />}
          text="Computers by Status"
          bgColor="bg-[#fbf7f7]"
          textColor="text-[#b76f6f]"
        />
        <GraphGrid
          icon={<TbEdit className="stroke-2 w-6 h-6" />}
          graph={<BarChart asset="computers" itemProp="manufacturers" color="rgb(255, 99, 132)"/>}
          text="Computers by Manufacturers"
          bgColor="bg-[#f3f5f1]"
          textColor="text-[#8da07a]"
        />
        <GraphGrid
          icon={<TbDeviceLaptop className="stroke-2 w-6 h-6" />}
          graph={<Donut asset="computers" itemProp="computertypes"/>}
          text="Computers by Types"
          bgColor="bg-[#f5f9fa]"
          textColor="text-[#6da7b6]"
        />
        <GraphGrid
          icon={<TbEdit className="stroke-2 w-6 h-6" />}
          graph={<BarChart asset="networkequipments" itemProp="manufacturers" color="rgb(54, 162, 235)" />}
          text="Network devices by Manufacturers"
          bgColor="bg-[#fcf8ed]"
          textColor="text-[#dfb43e]"
        />
        <GraphGrid
          icon={<TbEdit className="stroke-2 w-6 h-6" />}
          graph={<Donut asset="monitors" itemProp="manufacturers_id"/>}
          text="Monitors by Manufacturers"
          bgColor="bg-[#f9fbfb]"
          textColor="text-[#7fa9a9]"
        />
      </div>
      <div className="hidden bg-[#F3D0D0] text-[#C53232] hover:bg-[#e39393] hover:bg-[#D45656] bg-[#d1f1a8] text-[#70b11c] hover:bg-[#aee666] hover:bg-[#8bdc24] bg-[#c8dae4] text-[#4a7b96] hover:bg-[#95b7cb] hover:bg-[#6195b2]     bg-[#f7d79a]     text-[#b77d0e]     hover:bg-[#f1bb53]     hover:bg-[#e69d12]     bg-[#d7e8e4]     text-[#599a8b]     hover:bg-[#a6ccc3]     hover:bg-[#76b0a2]     bg-[#dc6f6f]     text-[#661919]     hover:bg-[#cd3232]     hover:bg-[#8f2323]     bg-[#9bc06b]     text-[#32431c]     hover:bg-[#759c42]     hover:bg-[#4d662c]     bg-[#5da8d6]     text-[#153b52]     hover:bg-[#2f84b8]     hover:bg-[#1f587b]     bg-[#ffb62f]     text-[#624000]     hover:bg-[#e29200]     hover:bg-[#956100]     bg-[#a0cec2]     text-[#376b5d]     hover:bg-[#6eb4a2]     hover:bg-[#488d7b]" />
    </div>
  );
};

export default AssetsDashboard;
