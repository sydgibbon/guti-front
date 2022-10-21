import React from "react";
import { TbDeviceLaptop } from 'react-icons/tb';

const GridItemComputers = () => {
  return (
    <div>
      <div
        class="grid-item"
        className="border rounded-md border-black w-36 h-28 pl-1.5"
      >
        <div className="flex flex-row items-center gap-24">
          <span className="text-3xl">1</span>
          <TbDeviceLaptop className="stroke-1 w-6 h-6" />
        </div>
        <span className="">Computers</span>
      </div>
    </div>
  );
};

export default GridItemComputers;
