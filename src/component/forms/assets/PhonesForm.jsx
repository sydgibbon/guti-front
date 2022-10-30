import React from "react";
import { TbPlus, TbList, TbMap, TbPhone } from "react-icons/tb";

const PhonesForm = () => {
  return (
    // <div> general
    <div className="computer-form flex flex-col items-center divide-y divide-y-reverse m-4">
      {/* <div> de Form Header */}
      {/* usé el "w-[calc(100%-1rem)]" para que quede separado en el eje X ayq eu con el mx no se podia darle margen */}
      <div className="form-header flex bg-medium-gray h-1/6 w-full border rounded-t-md border-secondary-dark mt-2 mx-auto py-4 px-5">
        <TbPhone className="inline my-auto mx-2 w-6 h-5" />
        <p className="text-base my-auto font-medium">New Item - Racks</p>
      </div>

      {/* <div> contenedor del Form */}
      <div className="form-container h-full w-full p-4 border border-secondary-dark bg-white">
        <form className="grid grid-cols-2 gap-4">
          {/* se utilizan dos <div> para separar los inputs, este es el primero */}
          <div className="input-name">
            <p className="text-sm mb-2">Name</p>
            <input className="w-full px-2 rounded-md h-9 border-1 border-secondary-dark bg-medium-gray"></input>
          </div>

          <div className="input-status">
            <p className="text-sm mb-2">Status</p>
            <div className="flex divide-x divide-x-reverse">
              <select className="cursor-pointer w-full px-2 rounded-l-md h-9 border border-secondary-dark bg-medium-gray">
                <option value="-----">-----</option>
              </select>
              <div className="h-9 border border-secondary-dark flex items-center hover:bg-primary-light hover:text-white cursor-pointer">
                <TbList className="mx-2" />
              </div>
              <div className="h-9 border rounded-r-md border-secondary-dark flex items-center hover:bg-primary-light hover:text-white cursor-pointer">
                <TbPlus className="mx-2" />
              </div>
            </div>
          </div>

          <div className="input-locations">
            <p className="text-sm mb-2">Locations</p>
            <div className="flex divide-x divide-x-reverse">
              <select className="cursor-pointer w-full px-2 rounded-l-md h-9 border border-secondary-dark bg-medium-gray">
                <option value="-----">-----</option>
              </select>
              <div className="h-9 border border-secondary-dark flex items-center hover:bg-primary-light hover:text-white cursor-pointer">
                <TbList className="mx-2" />
              </div>
              <div className="h-9 border border-secondary-dark flex items-center hover:bg-primary-light hover:text-white cursor-pointer">
                <TbPlus className="mx-2" />
              </div>
              <div className="rounded-r-md h-9 border border-secondary-dark flex items-center hover:bg-primary-light hover:text-white cursor-pointer">
                <TbMap className="mx-2" />
              </div>
            </div>
          </div>

          <div className="input-type">
            <p className="text-sm mb-2">Type</p>
            <div className="flex divide-x divide-x-reverse">
              <select className="cursor-pointer w-full px-2 rounded-l-md h-9 border border-secondary-dark bg-medium-gray">
                <option value="-----">-----</option>
              </select>
              <div className="h-9 border border-secondary-dark flex items-center hover:bg-primary-light hover:text-white cursor-pointer">
                <TbList className="mx-2" />
              </div>
              <div className="h-9 border rounded-r-md border-secondary-dark flex items-center hover:bg-primary-light hover:text-white cursor-pointer">
                <TbPlus className="mx-2" />
              </div>
            </div>
          </div>

          <div className="input-technitian">
            <p className="text-sm mb-2">Technician in Charge of the Hardware</p>
            <div className="flex divide-x divide-x-reverse">
              <select className="cursor-pointer w-full px-2 rounded-l-md h-9 border border-secondary-dark bg-medium-gray">
                <option value="-----">-----</option>
                <option value="glpi">glpi</option>
                <option value="normal">normal</option>
                <option value="tech">tech</option>
              </select>
              <div className="h-9 border rounded-r-md border-secondary-dark flex items-center hover:bg-primary-light hover:text-white cursor-pointer">
                <TbList className="mx-2" />
              </div>
            </div>
          </div>

          <div className="input-manufacturers">
            <p className="text-sm mb-2">Manufacturers</p>
            <div className="flex divide-x divide-x-reverse">
              <select className="cursor-pointer w-full px-2 rounded-l-md h-9 border border-secondary-dark bg-medium-gray">
                <option value="-----">-----</option>
              </select>
              <div className="h-9 border border-secondary-dark flex items-center hover:bg-primary-light hover:text-white cursor-pointer">
                <TbList className="mx-2" />
              </div>
              <div className="h-9 border rounded-r-md border-secondary-dark flex items-center hover:bg-primary-light hover:text-white cursor-pointer">
                <TbPlus className="mx-2" />
              </div>
            </div>
          </div>

          <div className="input-group-in-charge">
            <p className="text-sm mb-2">Group in Charge of the Hardware</p>
            <div className="flex divide-x divide-x-reverse">
              <select className="cursor-pointer w-full px-2 rounded-l-md h-9 border border-secondary-dark bg-medium-gray">
                <option value="-----">-----</option>
              </select>
              <div className="h-9 border border-secondary-dark flex items-center hover:bg-primary-light hover:text-white cursor-pointer">
                <TbList className="mx-2" />
              </div>
              <div className="h-9 border rounded-r-md border-secondary-dark flex items-center hover:bg-primary-light hover:text-white cursor-pointer">
                <TbPlus className="mx-2" />
              </div>
            </div>
          </div>

          <div className="input-model">
            <p className="text-sm mb-2">Model</p>
            <div className="flex divide-x divide-x-reverse">
              <select className="cursor-pointer w-full px-2 rounded-l-md h-9 border border-secondary-dark bg-medium-gray">
                <option value="-----">-----</option>
              </select>
              <div className="h-9 border border-secondary-dark flex items-center hover:bg-primary-light hover:text-white cursor-pointer">
                <TbList className="mx-2" />
              </div>
              <div className="h-9 border rounded-r-md border-secondary-dark flex items-center hover:bg-primary-light hover:text-white cursor-pointer">
                <TbPlus className="mx-2" />
              </div>
            </div>
          </div>

          <div className="input-alternate-username-number">
            <p className="text-sm mb-2">Alternate Username Number</p>
            <input className="w-full px-2 rounded-md h-9 border-1 border-secondary-dark bg-medium-gray"></input>
          </div>

          <div className="input-serial-number">
            <p className="text-sm mb-2">Serial Number</p>
            <input className="w-full px-2 rounded-md h-9 border-1 border-secondary-dark bg-medium-gray"></input>
          </div>

          <div className="input-alternate-username">
            <p className="text-sm mb-2">Alternate Usernamer</p>
            <input className="w-full px-2 rounded-md h-9 border-1 border-secondary-dark bg-medium-gray"></input>
          </div>

          <div className="input-serial-number">
            <p className="text-sm mb-2">Inventory/Asset Number</p>
            <input className="w-full px-2 rounded-md h-9 border-1 border-secondary-dark bg-medium-gray"></input>
          </div>

          <div className="input-user">
            <p className="text-sm mb-2">User</p>
            <div className="flex divide-x divide-x-reverse">
              <select className="cursor-pointer w-full px-2 rounded-l-md h-9 border border-secondary-dark bg-medium-gray">
                <option value="-----">-----</option>
                <option value="glpi">glpi</option>
                <option value="normal">normal</option>
                <option value="post-only">post-only</option>
                <option value="tech">tech</option>
              </select>
              <div className="h-9 border rounded-r-md border-secondary-dark flex items-center hover:bg-primary-light hover:text-white cursor-pointer">
                <TbList className="mx-2" />
              </div>
            </div>
          </div>

          <div className="input-management-type">
            <p className="text-sm mb-2">Management Type</p>
            <div className="flex divide-x divide-x-reverse">
              <select className="cursor-pointer w-full px-2 rounded-l-md h-9 border border-secondary-dark bg-medium-gray">
                <option value="unit-management">Unit Management</option>
                <option value="unit-management">Global Management</option>
              </select>
            </div>
          </div>

          <div className="input-groups">
            <p className="text-sm mb-2">Groups</p>
            <div className="flex divide-x divide-x-reverse">
              <select className="cursor-pointer w-full px-2 rounded-l-md h-9 border border-secondary-dark bg-medium-gray">
                <option value="-----">-----</option>
              </select>
              <div className="h-9 border border-secondary-dark flex items-center hover:bg-primary-light hover:text-white cursor-pointer">
                <TbList className="mx-2" />
              </div>
              <div className="h-9 border rounded-r-md border-secondary-dark flex items-center hover:bg-primary-light hover:text-white cursor-pointer">
                <TbPlus className="mx-2" />
              </div>
            </div>
          </div>

          <div className="input-uuid">
            <p className="text-sm mb-2">UUID</p>
            <input className="w-full px-2 rounded-md h-9 border-1 border-secondary-dark bg-medium-gray"></input>
          </div>

          <div className="input-comment">
            <p className="text-sm mb-2">Comment</p>
            <textarea
              rows="3"
              className="w-full p-2 border rounded-md border-secondary-dark bg-medium-gray"
            ></textarea>
          </div>

          <div className="input-brand">
            <p className="text-sm mb-2">Brand</p>
            <input className="w-full px-2 rounded-md h-9 border-1 border-secondary-dark bg-medium-gray"></input>
          </div>

          <div className="input-update-sources">
            <p className="text-sm mb-2">Update Sources</p>
            <div className="flex divide-x divide-x-reverse">
              <select className="cursor-pointer w-full px-2 rounded-l-md h-9 border border-secondary-dark bg-medium-gray">
                <option value="-----">-----</option>
              </select>
              <div className="h-9 border border-secondary-dark flex items-center hover:bg-primary-light hover:text-white cursor-pointer">
                <TbList className="mx-2" />
              </div>
              <div className="h-9 border rounded-r-md border-secondary-dark flex items-center hover:bg-primary-light hover:text-white cursor-pointer">
                <TbPlus className="mx-2" />
              </div>
            </div>
          </div>

          <div className="input-number-of-lines">
            <p className="text-sm mb-2">Number of Lines</p>
            <input
              type="number"
              step="1"
              min="0"
              placeholder="0"
              className="w-full px-2 rounded-md h-9 border-1 border-secondary-dark bg-medium-gray"
            ></input>
          </div>

          <div className="input-phone-power-supply-types">
            <p className="text-sm mb-2">Phone power supply types</p>
            <div className="flex divide-x divide-x-reverse">
              <select className="cursor-pointer w-full px-2 rounded-l-md h-9 border border-secondary-dark bg-medium-gray">
                <option value="-----">-----</option>
              </select>
              <div className="h-9 border border-secondary-dark flex items-center hover:bg-primary-light hover:text-white cursor-pointer">
                <TbList className="mx-2" />
              </div>
              <div className="h-9 border rounded-r-md border-secondary-dark flex items-center hover:bg-primary-light hover:text-white cursor-pointer">
                <TbPlus className="mx-2" />
              </div>
            </div>
          </div>

          <div className="input-ports">
            <p className="text-sm mb-2">Ports</p>
            <div className="flex items-center gap-2">
                <input 
                    type='checkbox'
                    className="w-3.5 h-3.5 px-2 rounded-md border-1 border-secondary-dark bg-medium-gray"
                ></input>
                <p>Headset</p>
                <input 
                    type='checkbox'
                    className="w-3.5 h-3.5 px-2 rounded-md border-1 border-secondary-dark bg-medium-gray"
                ></input>
                <p>Speaker</p>
            </div>
          </div>

        </form>
      </div>

      {/* <div> del footer */}
      <div className="form-footer flex h-1/6 w-full border rounded-b-md border-secondary-dark justify-end mb-2 bg-white py-4 px-5">
        <button className="flex items-center mr-4 border-2 border-orange-dark rounded-md bg-primary-light text-white hover:border-black py-2 px-4">
          <TbPlus className="mr-1" />
          <p className="text-lg font-medium">Add</p>
        </button>
      </div>
    </div>
  );
};

export default PhonesForm;