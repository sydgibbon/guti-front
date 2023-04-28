import { Link } from "react-router-dom";
import { GridItemType } from "../../../../domain/models/Others";
 

const GridItem = ({
  name,
  bgColor,
  textColor,
  hoverBgColor,
  hoverBorderColor,
  icon,
  path,
}: GridItemType) => {
  
  return (
    <Link
      to={path}
      className={`grid-item select-none cursor-pointer hover:border-2 rounded-md w-full md:w-36 h-28 px-1 py-1  ${bgColor} ${hoverBgColor} ${hoverBorderColor}`}
    >
      <div className="flex items-center justify-between cursor-pointer">
        <span className={`text-3xl pl-1 ${textColor}`}></span> 
        <span className={`w-6 h-6 ${textColor}`}>{icon()}</span>
      </div>
      <span className={` pl-1 ${textColor}`}>{name}</span>
    </Link>
  );
};

export default GridItem;
