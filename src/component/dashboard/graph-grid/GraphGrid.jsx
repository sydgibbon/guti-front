import React from "react";

const GraphGrid = ({ icon, graph, text, bgColor, textColor }) => {
  return (
    <div className={`graph-grid-container grid grid-cols-1 select-none w-36 border rounded-md  drop-shadow-lg p-1 ${bgColor}`} >
      <div className={`flex items-center mb-5`}>
        {graph}
      </div>
      <div className={`flex items-end`}>
        <span className={`text-sm font-bold ${textColor}`}>{text}</span>
        <span className={` ${textColor}`}>{icon}</span>
      </div>
    </div>
  );
};

export default GraphGrid;
