import React from "react";
import { TbPlus, TbList, TbMap, TbServer } from "react-icons/tb";

const RackForm = () => {
  return (
    // <div> general
    <div className="computer-form flex flex-col items-center divide-y divide-y-reverse m-4">
      {/* <div> de Form Header */}
      {/* usé el "w-[calc(100%-1rem)]" para que quede separado en el eje X ayq eu con el mx no se podia darle margen */}
      <div className="form-header flex bg-medium-gray h-1/6 w-full border rounded-t-md border-secondary-dark mt-2 mx-auto py-4 px-5">
        <TbServer className="inline my-auto mx-2 w-6 h-5" />
        <p className="text-base my-auto font-medium">New Item - Rack</p>
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
            <p className="text-sm mb-2">Serial Number</p>
            <input className="w-full px-2 rounded-md h-9 border-1 border-secondary-dark bg-medium-gray"></input>
          </div>

          <div className="input-serial-number">
            <p className="text-sm mb-2">Inventory/Asset Number</p>
            <input className="w-full px-2 rounded-md h-9 border-1 border-secondary-dark bg-medium-gray"></input>
          </div>

          <div className="input-comment">
            <p className="text-sm mb-2">Comment</p>
            <textarea
              rows="3"
              className="w-full p-2 border rounded-md border-secondary-dark bg-medium-gray"
            ></textarea>
          </div>

          <div className="input-network">
            <p className="text-sm mb-2">Server rooms</p>
            <div className="flex divide-x divide-x-reverse">
              <select className="cursor-pointer w-full px-2 rounded-l-md h-9 border border-secondary-dark bg-medium-gray">
                <option value="-----">-----</option>
              </select>
              <div className="h-9 border rounded-r-md border-secondary-dark flex items-center hover:bg-primary-light hover:text-white cursor-pointer">
                <TbList className="mx-2" />
              </div>
            </div>
          </div>

          <div className="">
            <p>Position in room</p>
            <div>
              <div>No room found or selected</div>
            </div>
          </div>

          <div className="input-door-orientation-in-room">
            <p className="text-sm mb-2">Door orientation in room</p>
            <div className="flex divide-x divide-x-reverse">
              <select className="cursor-pointer w-full px-2 rounded-md h-9 border-1 border-secondary-dark bg-medium-gray">
                <option value="north">North</option>
                <option value="east">East</option>
                <option value="south">South</option>
                <option value="west">West</option>
              </select>
            </div>
          </div>

          <div className="input-number-of-units">
            <p className="text-sm mb-2">Number of units</p>
            <input
              type="number"
              step="1"
              min="0"
              placeholder="0"
              className="w-full px-2 rounded-md h-9 border-1 border-secondary-dark bg-medium-gray"
            ></input>
          </div>

          <div className="input-number-of-units">
            <p className="text-sm mb-2">Width</p>
            <input
              type="number"
              step="1"
              min="0"
              placeholder="0"
              className="w-full px-2 rounded-md h-9 border-1 border-secondary-dark bg-medium-gray"
            ></input>
          </div>

          <div className="input-number-of-units">
            <p className="text-sm mb-2">Height</p>
            <input
              type="number"
              step="1"
              min="0"
              placeholder="0"
              className="w-full px-2 rounded-md h-9 border-1 border-secondary-dark bg-medium-gray"
            ></input>
          </div>

          <div className="input-number-of-units">
            <p className="text-sm mb-2">Depth</p>
            <input
              type="number"
              step="1"
              min="0"
              placeholder="0"
              className="w-full px-2 rounded-md h-9 border-1 border-secondary-dark bg-medium-gray"
            ></input>
          </div>

          <div className="input-max-power-in-watts">
            <p className="text-sm mb-2">Max. power (in watts)</p>
            <input
              type="number"
              step="1"
              min="0"
              placeholder="0"
              className="w-full px-2 rounded-md h-9 border-1 border-secondary-dark bg-medium-gray"
            ></input>
          </div>

          <div className="input-measured-power">
            <p className="text-sm mb-2">Measured Power (in watts)</p>
            <input
              type="number"
              step="1"
              min="0"
              placeholder="0"
              className="w-full px-2 rounded-md h-9 border-1 border-secondary-dark bg-medium-gray"
            ></input>
          </div>

          <div className="input-max-weight">
            <p className="text-sm mb-2">Max. weight</p>
            <input
              type="number"
              step="1"
              min="0"
              placeholder="0"
              className="w-full px-2 rounded-md h-9 border-1 border-secondary-dark bg-medium-gray"
            ></input>
          </div>

          <div className="input-number-of-units">
            <p className="text-sm mb-2">Background color</p>
            <input
              type="color"
              value="#e8594b"
              className="w-full px-2 rounded-md h-9 border-1 border-secondary-dark bg-medium-gray"
            ></input>
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

export default RackForm;
