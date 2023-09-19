import {
  AssetOptions,
  EditAssetOption,
} from "../../contexts/asset/AssetOptions";
import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import SidebarMenu from "../../components/dashboard/SidebarMenu";
import { capitalize } from "@mui/material";

export default function EditAsset() {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const assetPath = useLocation().pathname;
  const asset = assetPath.substring(assetPath.lastIndexOf("/") + 1);
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const idParam = urlParams.get("id");
  const id = idParam !== null ? parseInt(idParam) : NaN;

  const assetOptions: EditAssetOption | undefined = AssetOptions.find(
    (locName) => locName.name === capitalize(asset)
  );

  const assetData =
    assetOptions && assetOptions.useGetAssetData
      ? assetOptions.useGetAssetData()
      : null;

  const handleOptionClick = (optionName: string) => {
    setSelectedOption(optionName);
  };

  // Set the initial selected option to the first item in the options list
  useEffect(() => {
    if (
      selectedOption === "" &&
      assetOptions &&
      assetOptions.options.length > 0
    ) {
      setSelectedOption(assetOptions.options[0].name);
    }

    //set Data if exists

    if (assetData) {
      assetData.get(id);
    }
  }, []);

  useEffect(() => {
    if (assetData?.data != undefined) {
      for (const [key, value] of Object.entries(assetData.data)) {
        let elementInput = document.getElementById(key) as HTMLInputElement;
        if (elementInput != null) {
          elementInput.value = value as string;
        }
      }
    }
  }, [assetData?.data, selectedOption]);

  return (
    <div className="flex flex-col edit-asset-container">
      <div className="flex form-sidebar-section">
        <div className="mt-12 w-56 sidebar">
          {assetOptions &&
            assetOptions.options.map((option) => (
              <SidebarMenu
                key={option.name}
                text={option.name}
                selected={selectedOption}
                setSelected={handleOptionClick}
                icon={<></>}
                hasOptions={false}
                subMenu={<></>}
                context={"editAsset"}
              />
            ))}
        </div>
        <div className="flex flex-col w-full title-form-section">
          {selectedOption && (
            <div className="box-border block title">
              <span className="p-2 text-lg font-semibold bg-white rounded-md form-title">
                {`${selectedOption} - ${assetData?.data?.name}`}
              </span>
            </div>
          )}

          <div className="mt-5 mr-6 form">
            {selectedOption &&
              assetOptions?.options.find(
                (option) => option.name === selectedOption
              )?.content}
          </div>
        </div>
      </div>
    </div>
  );
}
