import { React, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getAssetById } from "../../../api/axios";
import ComputerAsset from "../../dashboard/assets/ComputerAsset";

const AssetTemplate = () => {
  const [searchParams] = useSearchParams();
  const [loadingData, setLoadingData] = useState(true);
  const [data, setData] = useState([]);
  const id = searchParams.get("id");
  const [selected, setSelected] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState(false);
  const toggleSelected = (name, component) => {
    setSelected(name);
    setSelectedComponent(component);
  };
  const testObject = [
    {
      name: "Computer",
      content: function () {
        return <ComputerAsset />;
      },
    },
    {
      name: "Others",
      content: function () {
        return <> asdfasdfsf </>;
      },
    },
  ];
  useEffect(() => {
    async function getData() {
      await getAssetById("computers", id, setData);
    }
    if (loadingData) {
      // if the result is not ready so you make the axios call
      getData();
    }
  }, []);

  return (
    <div className="flex m-8">
      <div className="w-1/5 border-t rounded-l">
        {testObject.map(option => (
          <div onClick={() => toggleSelected(option.name, option.content)} className={`py-2 pl-6 flex justify-between hover:border-l-primary-light hover:bg-secondary-dark border-b border-l rounded-bl cursor-normal select-none ${selected === option.name && "shadow-md border-l-2 border-l-primary-light"}`}>
          {option.name}
        </div>))}
      </div>
      <div className="w-4/5">{selectedComponent}</div>
    </div>
  );
};

export default AssetTemplate;
