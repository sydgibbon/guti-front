import { AssetOptions } from "../../contexts/asset/AssetOptions";
import { useLocation } from "react-router-dom";
import React, { useState } from "react";
import SidebarMenu from "../../components/dashboard/SidebarMenu";
import { capitalize } from "@mui/material";

export default function EditAsset() {
  const [selectedOption, setSelectedOption] = useState(0);
  const [sidebarSelected, setSidebarSelected] = useState("")

  const localPath = useLocation().pathname;
  const location = localPath.substring(localPath.lastIndexOf("/") + 1);
  console.log(location)

  const selectedOptions = AssetOptions.find(
    (locName) => locName.name === capitalize(location)
  );

  if (!selectedOptions) {
    return null; // Handle the case when no matching options are found
  }

  const handleOptionClick = (index: number) => {
    setSelectedOption(index);
  };

  return (
    <div className="flex p-6 edit-asset-container">
      <div className="sidebar">
        {selectedOptions.options.map((option, index) => (
          <SidebarMenu
            key={index}
            text={option.name}
            selected={sidebarSelected}
            setSelected={setSidebarSelected}
            icon={<></>}
            arrow={false}
            subMenu={<></>}
          />
        ))}
      </div>

      <div className="w-full form-section">
        <div className="w-full pl-6 flex title">
          <span className="p-2 text-lg font-semibold bg-white border rounded-md form-title">
            {selectedOptions.options?.find(obj => {
          return obj.name === sidebarSelected
        })?.name}
          </span>
        </div>
        {sidebarSelected !== "" ? selectedOptions.options?.find(obj => {
          return obj.name === sidebarSelected
        })?.content : selectedOptions.options[selectedOption].content}
        
      </div>
    </div>
  );
}