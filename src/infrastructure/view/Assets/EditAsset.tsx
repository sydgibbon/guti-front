// import React from "react";
// import { AssetOptions, EditAssetOption } from "../../contexts/asset/AssetOptions";
// import { useLocation } from "react-router-dom";

// export default function EditAsset() {
//   const [selectedOption, setSelectedOption] = React.useState(AssetOptions[0]);

//   const handleOptionClick = (option: EditAssetOption) => {
//     setSelectedOption(option);
//   };

//   // let testVariable = "Computer1"
//   let location = useLocation().pathname;

//   return (
//     <div className="flex p-6 edit-asset-container">
//       <div className="sidebar">
//         {AssetOptions.map((option) => (
//           <div
//             key={option.LocName}
//             onClick={() => handleOptionClick(option)}
//             className={`hover:border-l-2 border-primary-light cursor-normal select-none p-1 w-52 ${
//               option === selectedOption ? "shadow-md border-l-2" : ""
//             }`}
//           >
//             {option.LocName}
//           </div>
//         ))}
//       </div>
//       <div className="w-full form-section">
//         {selectedOption.options.map((subOption) => (
//           <div className="" key={subOption.name}>
//             <div className="w-full pl-6 flex">
//               <span className=" p-2 text-lg font-semibold bg-white border rounded-md form-title">
//                 {subOption.name}
//               </span>
//             </div>
//             {subOption.content}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }






import { AssetOptions } from "../../contexts/asset/AssetOptions";
import { useLocation } from "react-router-dom";
import React, { useState } from "react";

export default function EditAsset() {
  const [selectedOption, setSelectedOption] = useState(0);

  const localPath = useLocation().pathname;
  const location = localPath.substring(localPath.lastIndexOf("/") + 1);
  console.log(location)

  const selectedOptions = AssetOptions.find(
    (assetName) => assetName.name === location
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
          <div
            key={index}
            onClick={() => handleOptionClick(index)}
            className={`hover:border-l-2 border-primary-light cursor-normal select-none p-1 w-52 ${
              index === selectedOption ? "shadow-md border-l-2" : ""
            }`}
          >
            {option.name}
          </div>
        ))}
      </div>
      <div className="w-full form-section">
        <div className="w-full pl-6 flex">
          <span className="p-2 text-lg font-semibold bg-white border rounded-md form-title">
            {selectedOptions.options[selectedOption].name}
          </span>
        </div>
        {selectedOptions.options[selectedOption].content}
      </div>
    </div>
  );
}