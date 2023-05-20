import React, { useEffect } from "react";
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
import GraphGrid from "./graph-grid/GraphGrid";
import GridItem from "./items-grid/GridItem";
import Donut from "../graph/Donut";
import BarChart from "../graph/BarChart";
import { assetsGridItems } from "../../contexts/AppItems";
import { GridItemType } from "../../../domain/models/Others";
import { useGetComputersByStates } from "../../hooks/Computers/useGetComputersByStates";



const AssetsDashboard = () => {
  const computersByState = useGetComputersByStates()
  useEffect(() => {
    computersByState.get()
  }, [])
  
  return (
    <div className="flex flex-col items-start mx-6 my-5 bg-white border rounded-md assets-dashboard border-secondary-dark">
      <div className="flex items-center justify-between w-full h-16 px-5 py-4 dashboard-header">
        <div className="flex items-center justify-between w-full dashboard-options md:w-auto md:gap-2">
          <select className="h-10 border rounded-md cursor-pointer w-36 border-secondary-dark">
            <option value="Assets" className="text-sm">
              Assets
            </option>
          </select>
          <div className="p-2 mx-2 border-2 border-transparent rounded cursor-pointer hover:bg-primary-light hover:text-white hover:border-orange-dark hover:border-2">
            <TbPlus className="w-6 h-6 stroke-current stroke-1" />
          </div>
        </div>

        <div className="items-center hidden buttons md:flex">
          <div className="p-2 mx-2 border-2 border-transparent rounded cursor-pointer hover:bg-primary-light hover:text-white hover:border-orange-dark hover:border-2">
            <TbRefreshDot className="w-6 h-6 stroke-current stroke-1" />
          </div>
          <div className="p-2 mx-2 border-2 border-transparent rounded cursor-pointer hover:bg-primary-light hover:text-white hover:border-orange-dark hover:border-2">
            <TbCopy className="w-6 h-6 stroke-current stroke-1" />
          </div>
          <div className="p-2 mx-2 border-2 border-transparent rounded cursor-pointer hover:bg-primary-light hover:text-white hover:border-orange-dark hover:border-2">
            <TbShare className="w-6 h-6 stroke-current stroke-1" />
          </div>
          <div className="p-2 mx-2 border-2 border-transparent rounded cursor-pointer hover:bg-primary-light hover:text-white hover:border-orange-dark hover:border-2">
            <TbTrash className="w-6 h-6 stroke-current stroke-1" />
          </div>
          <div className="p-2 mx-2 border-2 border-transparent rounded cursor-pointer hover:bg-primary-light hover:text-white hover:border-orange-dark hover:border-2">
            <TbEdit className="w-6 h-6 stroke-current stroke-1" />
          </div>
          <div className="p-2 mx-2 border-2 border-transparent rounded cursor-pointer hover:bg-primary-light hover:text-white hover:border-orange-dark hover:border-2">
            <TbMaximize className="w-6 h-6 stroke-current stroke-1" />
          </div>
        </div>
      </div>

      <div className="grid w-full grid-cols-1 gap-5 px-5 py-5 items-grid md:grid-cols-3 lg:grid-cols-5 ">
        {assetsGridItems.map((gridItem: GridItemType,index:number) => {
          return (
            <GridItem
              key={index}
              name={gridItem.name}
              bgColor={`bg-[${gridItem.bgColor}]`}
              textColor={`text-[${gridItem.textColor}]`}
              hoverBgColor={`hover:bg-[${gridItem.hoverBgColor}]`}
              hoverBorderColor={`hover:border-[${gridItem.hoverBorderColor}]`}
              icon={gridItem.icon}
              asset={gridItem.asset}
              path={gridItem.path}
            />
          );
        })}
      </div>

      <div className="grid w-full grid-flow-row grid-cols-1 gap-5 px-5 py-5 graphs-grid md:grid-cols-3 lg:grid-cols-5">
        <GraphGrid
          icon={<TbSubtask className="w-6 h-6 stroke-2" />}
          graph={<Donut data={computersByState?.data} criteria="states" />}
          text="Computers by Status"
          bgColor="bg-[#fbf7f7]"
          textColor="text-[#b76f6f]"
        />
        <GraphGrid
          icon={<TbEdit className="w-6 h-6 stroke-2" />}
          graph={
            <BarChart
              data="computers"
              criteria="manufacturers"
              color="rgb(255, 99, 132)"
              title={undefined}
            />
          }
          text="Computers by Manufacturers"
          bgColor="bg-[#f3f5f1]"
          textColor="text-[#8da07a]"
        />
        <GraphGrid
          icon={<TbDeviceLaptop className="w-6 h-6 stroke-2" />}
          graph={<Donut data="computers" criteria="computertypes" />}
          text="Computers by Types"
          bgColor="bg-[#f5f9fa]"
          textColor="text-[#6da7b6]"
        />
        <GraphGrid
          icon={<TbEdit className="w-6 h-6 stroke-2" />}
          graph={
            <BarChart
              data = "computers"
              criteria="manufacturers"
              color="rgb(54, 162, 235)"
              title={undefined}
            />
          }
          text="Network devices by Manufacturers"
          bgColor="bg-[#fcf8ed]"
          textColor="text-[#dfb43e]"
        />
        <GraphGrid
          icon={<TbEdit className="w-6 h-6 stroke-2" />}
          graph={<Donut data="monitors" criteria="manufacturers" />}
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
