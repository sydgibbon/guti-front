import { useState } from "react";
import {
  TbTool,
  TbTrash,
  TbMap2,
  TbSearch,
  TbFileDownload,
} from "react-icons/tb";
import { BsChevronCompactDown } from "react-icons/bs";
import Switch from "react-switch";
// import DataTable from "react-data-table-component";
// import {
//   deleteAsset,
//   isDeletedAsset,
//   BASE_URL,
// } from "../../../../../api/axios";
import { ColumnSearch } from "../../../../domain/models/Others";
// import { useGetAllComputers } from "../../../hooks/Computers/useGetAllComputers";
import DropdownMenu from "../../atomic/Dropdown/DropdownMenu";
export interface SearchCardProps {
  asset: string;
  columns: ColumnSearch[];
}
const SearchCard = () => {
  // const SearchCard = ({ asset, columns }: SearchCardProps) => {
  const [checked, setChecked] = useState(false);
  //   const computers = useGetAllComputers();

  //   // codigo guty
  //   let formFields: any = {};
  //   let formData = new FormData();

  // const handleIsDeleted = (e: React.SyntheticEvent) => {
  //   e.preventDefault();
  //   Object.keys(formFields).forEach((key) => {
  //     formData.append(key, formFields[key]);
  //   });
  //   isDeletedAsset("computers/13", formData);
  // };

  // const handleDelete = (e: React.SyntheticEvent) => {
  //   e.preventDefault();
  //   Object.keys(formFields).forEach((key) => {
  //     formData.append(key, formFields[key]);
  //   });
  //   deleteAsset("computers/13", formData);
  // };

  // const handleChange = (e: any) => {
  //   formFields[e.target.id] = e.target.value;
  // };

  // useEffect(() => {
  //   computers.get();
  // }, []);

  // useEffect(() => {
  // }, [computers.data]);

  return (
    // <div className="mx-4 my-4 border rounded search-card border-secondary-dark">
    //   <div className="flex h-16 gap-2 pl-5 border-b search-card-header align-center border-secondary-light bg-medium-gray">
    //     <div className="actions-button w-20 h-8 mt-4 ml-5 border border-black gap-2 flex rounded-md items-center px-2 py-0.5 bg-white">
    //       <BsArrow90DegDown className="w-3 h-3" />
    //       <span className="font-sans text-xs font-normal leading-4">
    //         Actions
    //       </span>
    //     </div>

    //     <div className="flex flex-row h-6 gap-5 p-0 my-5 buttons w-72">
    //       <div className="flex items-center gap-2 switches ">
    //         <div className="flex items-center gap-1 map-switch">
    //           <Switch
    //             checked={checked}
    //             onChange={() => setChecked(!checked)}
    //             className=""
    //             uncheckedIcon={false}
    //             checkedIcon={false}
    //             offHandleColor={"#000"}
    //             onHandleColor={"#000"}
    //             offColor={"#D9D9D9"}
    //             onColor={"#D9D9D9"}
    //             height={16}
    //             width={30}
    //             handleDiameter={10}
    //             borderRadius={6}
    //           />
    //           <TbMap2 className="w-6 h-6 stroke-1" />
    //         </div>

    //         <div className="flex items-center gap-1 trash-switch">
    //           <Switch
    //             checked={checked}
    //             onChange={() => setChecked(!checked)}
    //             className=""
    //             uncheckedIcon={false}
    //             checkedIcon={false}
    //             offHandleColor={"#000"}
    //             onHandleColor={"#000"}
    //             offColor={"#D9D9D9"}
    //             onColor={"#D9D9D9"}
    //             height={16}
    //             width={30}
    //             handleDiameter={10}
    //             borderRadius={6}
    //           />
    //           <TbTrash className="w-6 h-6 stroke-1" />
    //         </div>

    //         <div className="flex items-center gap-1 search-switch">
    //           <Switch
    //             checked={checked}
    //             onChange={() => setChecked(!checked)}
    //             className=""
    //             uncheckedIcon={false}
    //             checkedIcon={false}
    //             offHandleColor={"#000"}
    //             onHandleColor={"#000"}
    //             offColor={"#D9D9D9"}
    //             onColor={"#D9D9D9"}
    //             height={16}
    //             width={30}
    //             handleDiameter={10}
    //             borderRadius={6}
    //           />
    //           <TbSearch className="w-6 h-6 stroke-1" />
    //         </div>

    //         <TbTool className="w-6 h-6 stroke-1" />

    //         <div className="flex items-center export-submenu">
    //           <TbFileDownload className="w-6 h-6 stroke-1" />
    //           <BsChevronCompactDown className="w-2" />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <DataTable
    //     selectableRows
    //     columns={columns}
    //     data={computers.data}
    //     pagination
    //     paginationPerPage={20}
    //     paginationRowsPerPageOptions={[
    //       5, 10, 15, 20, 30, 40, 50, 100, 150, 200, 250, 500, 750, 1000, 2000,
    //       3000, 10000,
    //     ]}
    //     defaultSortFieldId={1}
    //   />

    //   {/* <form
    //     onSubmit={handleIsDeleted}
    //     action={`${BASE_URL}computers/`}
    //     method="POST"
    //     encType="multipart/form-date"
    //     className="w-full h-full divide-y divide-y-reverse"
    //   >
    //     <div className="flex justify-between">
    //       <input onChange={handleChange} id="is_deleted" className="border-2" />
    //       <button className="border-2">is_deleted</button>
    //     </div>
    //   </form> */}
    //   {/* <form
    //     onSubmit={handleDelete}
    //     action={`${BASE_URL}computers/`}
    //     method="POST"
    //     encType="multipart/form-date"
    //     className="w-full h-full divide-y divide-y-reverse"
    //   >
    //     <div>
    //       <button className="border-2">Delete</button>
    //     </div>
    //   </form> */}
    // </div>

    <div className="flex h-16 gap-2 pl-5 border-b search-card-header align-center border-secondary-light bg-medium-gray">
      <DropdownMenu title="Actions" />
      <div className="flex flex-row h-6 gap-5 p-0 my-5 buttons w-72">
        <div className="flex items-center gap-2 switches ">
          <div className="flex items-center gap-1 map-switch">
            <Switch
              checked={checked}
              onChange={() => setChecked(!checked)}
              className=""
              uncheckedIcon={false}
              checkedIcon={false}
              offHandleColor={"#000"}
              onHandleColor={"#000"}
              offColor={"#D9D9D9"}
              onColor={"#D9D9D9"}
              height={16}
              width={30}
              handleDiameter={10}
              borderRadius={6}
            />
            <TbMap2 className="w-6 h-6 stroke-1" />
          </div>

          <div className="flex items-center gap-1 trash-switch">
            <Switch
              checked={checked}
              onChange={() => setChecked(!checked)}
              className=""
              uncheckedIcon={false}
              checkedIcon={false}
              offHandleColor={"#000"}
              onHandleColor={"#000"}
              offColor={"#D9D9D9"}
              onColor={"#D9D9D9"}
              height={16}
              width={30}
              handleDiameter={10}
              borderRadius={6}
            />
            <TbTrash className="w-6 h-6 stroke-1" />
          </div>

          <div className="flex items-center gap-1 search-switch">
            <Switch
              checked={checked}
              onChange={() => setChecked(!checked)}
              className=""
              uncheckedIcon={false}
              checkedIcon={false}
              offHandleColor={"#000"}
              onHandleColor={"#000"}
              offColor={"#D9D9D9"}
              onColor={"#D9D9D9"}
              height={16}
              width={30}
              handleDiameter={10}
              borderRadius={6}
            />
            <TbSearch className="w-6 h-6 stroke-1" />
          </div>

          <TbTool className="w-6 h-6 stroke-1" />

          <div className="flex items-center export-submenu">
            <TbFileDownload className="w-6 h-6 stroke-1" />
            <BsChevronCompactDown className="w-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
