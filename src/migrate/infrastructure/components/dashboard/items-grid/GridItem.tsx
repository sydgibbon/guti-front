import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { axiosPrivate } from "../../../../../api/axios";
import { GridItemType } from "../../../../domain/models/Others";
 

const GridItem = ({
  name,
  bgColor,
  textColor,
  hoverBgColor,
  hoverBorderColor,
  icon,
  asset,
  path,
}: GridItemType) => {
  const [loadingData, setLoadingData] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      await axiosPrivate
        .get("http://127.0.0.1:8000/api/assets/" + asset + "/")
        .then((response:any) => {
          // check if the data is populated
          setData(response.data);
          // you tell it that you had the result
          setLoadingData(false);
        });
    }
    if (loadingData) {
      // if the result is not ready so you make the axios call
      getData();
    }
  }, []);
  
  return (
    <Link
      to={path}
      className={`grid-item select-none cursor-pointer hover:border-2 rounded-md w-full md:w-36 h-28 px-1 py-1  ${bgColor} ${hoverBgColor} ${hoverBorderColor}`}
    >
      <div className="flex items-center justify-between cursor-pointer">
        <span className={`text-3xl pl-1 ${textColor}`}>{data.length}</span>
        <span className={`w-6 h-6 ${textColor}`}>{icon()}</span>
      </div>
      <span className={` pl-1 ${textColor}`}>{name}</span>
    </Link>
  );
};

export default GridItem;
