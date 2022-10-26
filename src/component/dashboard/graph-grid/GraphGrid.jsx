import React from "react";

const GraphGrid = ({ icon, text, bgColor, textColor }) => {
  return (
    <div className={`select-none w-36 h-36 border rounded-md flex items-end drop-shadow-lg p-1 ${bgColor}`}>
      <span className={`text-sm font-bold ${textColor}`}>{ text }</span>
      <span className={` ${textColor}` }>{ icon }</span>
    </div>
  );
};

export default GraphGrid;
