import React from "react";

const GridItem = ({ text, bgColor, textColor, bgHoverColor, borderHoverColor, icon }) => {
  return (
    <div class="grid-item"
    className={`cursor-pointer hover:border-2 rounded-md w-36 h-28 px-1 py-1  ${bgColor} ${bgHoverColor} ${borderHoverColor}`}>
      <div className='flex items-center justify-between'>
          <span className={`text-3xl pl-1 ${textColor}`}>0</span>
          <span className={`w-6 h-6 ${textColor}`}>{icon}</span>
      </div>
      <span className={` pl-1 ${textColor}`}>{text}</span>
    </div>
  );
};

export default GridItem;
