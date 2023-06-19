import React from "react";
import { AssetOptions, EditAssetOption } from "../../contexts/asset/AssetOptions";

export default function EditAsset() {
  const [selectedOption, setSelectedOption] = React.useState(AssetOptions[0]);

  const handleOptionClick = (option: EditAssetOption) => {
    setSelectedOption(option);
  };

  let testVariable = "Computer1"

  return (
    <div className="flex p-6 edit-asset-container">
      <div className="sidebar">
        {AssetOptions.map((option) => (
          <div
            key={option.name}
            onClick={() => handleOptionClick(option)}
            className={`hover:border-l-2 border-primary-light cursor-normal select-none p-1 w-52 ${
              option === selectedOption ? "shadow-md border-l-2" : ""
            }`}
          >
            {option.name}
          </div>
        ))}
      </div>
      <div className="w-full form-section">
        {selectedOption.options.map((subOption) => (
          <div className="" key={subOption.name}>
            <div className="w-full pl-6 flex">
              <span className=" p-2 text-lg font-semibold bg-white border rounded-md form-title">
                {subOption.name}
              </span>
            </div>
            {subOption.content}
          </div>
        ))}
      </div>
    </div>
  );
}
