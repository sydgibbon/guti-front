import {
  AssetOptions,
  EditAssetOption,
} from "../../contexts/asset/AssetOptions";
import { useLocation } from "react-router-dom";
import React, { useState } from "react";
import SidebarMenu from "../../components/dashboard/SidebarMenu";
import { capitalize } from "@mui/material";

export default function EditAsset() {
  const [selectedOption, setSelectedOption] = useState<string>("");
  // const [sidebarSelected, setSidebarSelected] = useState("")

  const localPath = useLocation().pathname;
  const location = localPath.substring(localPath.lastIndexOf("/") + 1);
  console.log(location);

  const selectedOptions: EditAssetOption | undefined = AssetOptions.find(
    (locName) => locName.name === capitalize(location)
  );

  if (!selectedOptions) {
    return null; // Handle the case when no matching options are found
  }

  const handleOptionClick = (optionName: string) => {
    setSelectedOption(optionName);
  };

  // Set the initial selected option to the first item in the options list
  if (selectedOption === "" && selectedOptions.options.length > 0) {
    setSelectedOption(selectedOptions.options[0].name);
  }

  return (
    <div className="flex flex-col edit-asset-container">
      <div className="flex form-section">
        <div className="mt-12 w-56 sidebar">
          {selectedOptions.options.map((option) => (
            <SidebarMenu
              key={option.name}
              text={option.name}
              selected={selectedOption}
              setSelected={handleOptionClick}
              icon={<></>}
              arrow={false}
              subMenu={<></>}
              context={"editAsset"}
            />
          ))}
        </div>
        <div className="flex flex-col w-full sidebar-form-box">
          {selectedOption && (
            <div className="box-border block title">
              <span className="p-2 text-lg font-semibold bg-white rounded-md form-title">
                {`${selectedOptions.name} - ExampleComputer`}
              </span>
            </div>
          )}

          <div className="mt-5 mr-6 form">
            {selectedOption &&
              selectedOptions.options.find(
                (option) => option.name === selectedOption
              )?.content}
          </div>
        </div>
      </div>
    </div>
  );
}
