import React, { useState } from "react";
import { BsLaptop } from "react-icons/bs";
import { TbPlus, TbList, TbMap } from "react-icons/tb";
import LocationsSubForm from "../../subforms/LocationsSubForm";

const ComputerForm = () => {
  const [ButtonPopup, setButtonPopup] = useState(false);

  return (
    // <div> general
    <div className="computer-form flex flex-col items-center m-4">
      <LocationsSubForm trigger={ButtonPopup} setTrigger={setButtonPopup}></LocationsSubForm>
      <form className="w-full divide-y divide-y-reverse">
        {/* <div> de Form Header */}
        <div className="form-header flex justify-center md:justify-start bg-medium-gray h-1/6 w-full border rounded-t-md border-secondary-dark mt-2 mx-auto py-4 px-5">
          <BsLaptop className="inline my-auto mr-2" size="24" />
          <p className="text-base my-auto font-medium">New Item - Computers</p>
        </div>
        {/* <div> contenedor del Form */}
        <div className="form-container h-full w-full md:p-4 border border-secondary-dark bg-white flex justify-between">
          {/* se utilizan dos <div> para separar los inputs, este es el primero */}
          <div className="first-form w-full grid md:grid-cols-2 md:mx-4">
            <div className=" mx-4 input-name my-4">
              <p className="text-sm mb-2">Name</p>
              <input className="w-full px-2 rounded-md h-9 border-1 border-secondary-dark bg-medium-gray"></input>
            </div>
            <div className=" mx-4 input-locations my-4">
              <p className="text-sm mb-2">Locations</p>
              <div className="flex divide-x divide-x-reverse">
                <select className="w-full px-2 rounded-l-md h-9 border border-secondary-dark bg-medium-gray ">
                  <option value="-----">-----</option>
                </select>
                <div className="h-9 border border-secondary-dark flex items-center hover:bg-primary-light hover:text-white">
                  <TbList className="mx-2" />
                </div>
                <div className="h-9 border border-secondary-dark flex items-center hover:bg-primary-light hover:text-white" onClick={() => setButtonPopup(true)}>
                  <TbPlus className="mx-2" />
                </div>
                <div className="rounded-r-md h-9 border border-secondary-dark flex items-center">
                  <TbMap className="mx-2" />
                </div>
              </div>
            </div>
            <div className=" mx-4 input-technitian my-4">
              <p className="text-sm mb-2">
                Technician in Charge of the Hardware
              </p>
              <div className="flex divide-x divide-x-reverse">
                <select className="w-full px-2 rounded-l-md h-9 border border-secondary-dark bg-medium-gray">
                  <option value="-----">-----</option>
                </select>
                <div className="h-9 border rounded-r-md border-secondary-dark flex items-center">
                  <TbList className="mx-2" />
                </div>
              </div>
            </div>
            <div className=" mx-4 input-group-in-charge my-4">
              <p className="text-sm mb-2">Group in Charge of the Hardware</p>
              <div className="flex divide-x divide-x-reverse">
                <select className="w-full px-2 rounded-l-md h-9 border border-secondary-dark bg-medium-gray">
                  <option value="-----">-----</option>
                </select>
                <div className="h-9 border border-secondary-dark flex items-center">
                  <TbList className="mx-2" />
                </div>
                <div className="h-9 border rounded-r-md border-secondary-dark flex items-center">
                  <TbPlus className="mx-2" />
                </div>
              </div>
            </div>
            <div className=" mx-4 input-alternate-username-number my-4">
              <p className="text-sm mb-2">Alternate Username Number</p>
              <input className="w-full px-2 rounded-md h-9 border-1 border-secondary-dark bg-medium-gray"></input>
            </div>
            <div className=" mx-4 input-alternate-username my-4">
              <p className="text-sm mb-2">Alternate Username</p>
              <input className="w-full px-2 rounded-md h-9 border-1 border-secondary-dark bg-medium-gray"></input>
            </div>
            <div className=" mx-4 input-user my-4">
              <p className="text-sm mb-2">User</p>
              <div className="flex divide-x divide-x-reverse">
                <select className="w-full px-2 rounded-l-md h-9 border border-secondary-dark bg-medium-gray">
                  <option value="-----">-----</option>
                </select>
                <div className="h-9 border rounded-r-md border-secondary-dark flex items-center">
                  <TbList className="mx-2" />
                </div>
              </div>
            </div>
            <div className=" mx-4 input-groups my-4">
              <p className="text-sm mb-2">Groups</p>
              <div className="flex divide-x divide-x-reverse">
                <select className="w-full px-2 rounded-l-md h-9 border border-secondary-dark bg-medium-gray">
                  <option value="-----">-----</option>
                </select>
                <div className="h-9 border border-secondary-dark flex items-center">
                  <TbList className="mx-2" />
                </div>
                <div className="h-9 border rounded-r-md border-secondary-dark flex items-center">
                  <TbPlus className="mx-2" />
                </div>
              </div>
            </div>
            <div className=" mx-4 input-comment">
              <p className="text-sm mb-2">Comment</p>
              <textarea
                rows="3"
                className="w-full p-2 border rounded-md border-secondary-dark bg-medium-gray"
              ></textarea>
            </div>
            <div className=" mx-4 input-status my-4">
              <p className="text-sm mb-2">Status</p>
              <div className="flex divide-x divide-x-reverse">
                <select className="w-full px-2 rounded-l-md h-9 border border-secondary-dark bg-medium-gray">
                  <option value="-----">-----</option>
                </select>
                <div className="h-9 border border-secondary-dark flex items-center">
                  <TbList className="mx-2" />
                </div>
                <div className="h-9 border rounded-r-md border-secondary-dark flex items-center">
                  <TbPlus className="mx-2" />
                </div>
              </div>
            </div>
            <div className=" mx-4 input-types my-4">
              <p className="text-sm mb-2">Types</p>
              <div className="flex divide-x divide-x-reverse">
                <select className="w-full px-2 rounded-l-md h-9 border border-secondary-dark bg-medium-gray">
                  <option value="-----">-----</option>
                </select>
                <div className="h-9 border border-secondary-dark flex items-center">
                  <TbList className="mx-2" />
                </div>
                <div className="h-9 border rounded-r-md border-secondary-dark flex items-center">
                  <TbPlus className="mx-2" />
                </div>
              </div>
            </div>
            <div className=" mx-4 input-manufacturers my-4">
              <p className="text-sm mb-2">Manufacturers</p>
              <div className="flex divide-x divide-x-reverse">
                <select className="w-full px-2 rounded-l-md h-9 border border-secondary-dark bg-medium-gray">
                  <option value="-----">-----</option>
                </select>
                <div className="h-9 border border-secondary-dark flex items-center">
                  <TbList className="mx-2" />
                </div>
                <div className="h-9 border rounded-r-md border-secondary-dark flex items-center">
                  <TbPlus className="mx-2" />
                </div>
              </div>
            </div>
            <div className=" mx-4 input-model my-4">
              <p className="text-sm mb-2">Model</p>
              <div className="flex divide-x divide-x-reverse">
                <select className="w-full px-2 rounded-l-md h-9 border border-secondary-dark bg-medium-gray">
                  <option value="-----">-----</option>
                </select>
                <div className="h-9 border border-secondary-dark flex items-center">
                  <TbList className="mx-2" />
                </div>
                <div className="h-9 border rounded-r-md border-secondary-dark flex items-center">
                  <TbPlus className="mx-2" />
                </div>
              </div>
            </div>
            <div className=" mx-4 input-serial-number my-4">
              <p className="text-sm mb-2">Serial Number</p>
              <input className="w-full px-2 rounded-md h-9 border-1 border-secondary-dark bg-medium-gray"></input>
            </div>
            <div className=" mx-4 input-inventory-asset-number my-4">
              <p className="text-sm mb-2">Inventory/Asset Number</p>
              <input className="w-full px-2 rounded-md h-9 border-1 border-secondary-dark bg-medium-gray"></input>
            </div>
            <div className=" mx-4 input-network my-4">
              <p className="text-sm mb-2">Network</p>
              <div className="flex divide-x divide-x-reverse">
                <select className="w-full px-2 rounded-l-md h-9 border border-secondary-dark bg-medium-gray">
                  <option value="-----">-----</option>
                </select>
                <div className="h-9 border rounded-r-md border-secondary-dark flex items-center">
                  <TbList className="mx-2" />
                </div>
              </div>
            </div>
            <div className=" mx-4 input-uuid my-4">
              <p className="text-sm mb-2">UUID</p>
              <input className="w-full px-2 rounded-md h-9 border-1 border-secondary-dark bg-medium-gray"></input>
            </div>
            <div className=" mx-4 input-update-sources my-4">
              <p className="text-sm mb-2">Update Sources</p>
              <div className="flex divide-x divide-x-reverse">
                <select className="w-full px-2 rounded-l-md h-9 border border-secondary-dark bg-medium-gray">
                  <option value="-----">-----</option>
                </select>
                <div className="h-9 border border-secondary-dark flex items-center">
                  <TbList className="mx-2" />
                </div>
                <div className="h-9 border rounded-r-md border-secondary-dark flex items-center">
                  <TbPlus className="mx-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div> del footer */}
        <div className="form-footer flex h-1/6 w-full border rounded-b-md border-secondary-dark justify-center md:justify-end mb-2 bg-white py-4 px-5">
          <button className="flex items-center md:mr-4 border-2 border-orange-dark rounded-md bg-primary-light text-white hover:border-black py-2 px-4">
            <TbPlus className="mr-1" />
            <p className="text-lg font-medium">Add</p>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ComputerForm;
