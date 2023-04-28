import {
  TbCirclePlus,
  TbCircleX,
  TbCodePlus,
  TbListSearch,
  TbSquareMinus,
  TbSquarePlus,
  TbStar,
} from "react-icons/tb";

export default function SearchForm() {
  return (
    <div className="pt-2 m-4 border rounded searchform-container bg-medium-gray">
      <div className="flex items-center gap-1 p-2 rule">
        <div className="rounded cursor-pointer remove-button hover:bg-primary-light hover:text-white">
          <TbSquareMinus className="m-2" />
        </div>
        <select className="w-20 border rounded cursor-pointer h-9">
          <option value="" className="text-lg text-center">
            ----
          </option>
        </select>
        <select className="items-center w-32 px-2 border rounded cursor-pointer h-9">
          <option value="">Items Seen</option>
        </select>
        <select className="items-center px-2 border rounded cursor-pointer w-28 h-9">
          <option>Contains</option>
        </select>
        <input
          type="text"
          className="px-4 bg-white border rounded w-44 h-9"
        ></input>
      </div>
      <div className="flex items-center gap-1 px-5 py-4 bg-white border-t rounded-b search-actions">
        <div className="flex items-center justify-center w-16 h-6 border border-black rounded cursor-pointer rule-button hover:bg-primary-light hover:text-white">
          <TbSquarePlus className="mr-1" />
          <span className="text-sm cursor-pointer">rule</span>
        </div>
        <div className="flex items-center h-6 border border-black rounded cursor-pointer global-rule-button w-28 hover:bg-primary-light hover:text-white">
          <TbCirclePlus className="m-2" />
          <span className="text-sm">global rule</span>
        </div>
        <div className="flex items-center justify-center w-20 h-6 border border-black rounded cursor-pointer group-button hover:bg-primary-light hover:text-white">
          <TbCodePlus className="mr-1" />
          <span className="text-sm">group</span>
        </div>
        <div className="search-button flex items-center justify-center border-2 rounded border-[#BB493E] w-24 h-6 bg-[#E8594B] text-white cursor-pointer hover:border-black">
          <TbListSearch className="mr-1" />
          <span>Search</span>
        </div>
        <div className="flex items-center w-8 h-6 border-transparent rounded cursor-pointer save-current-search-button hover:bg-primary-light hover:text-white">
          <TbStar className="mx-auto" />
        </div>
        <div className="flex items-center w-8 h-6 border-transparent rounded cursor-pointer clear-button hover:bg-primary-light hover:text-white">
          <TbCircleX className="mx-auto" />
        </div>
      </div>
    </div>
  );
}
