import React from "react";
import { TbPlus, TbList, TbColumns } from "react-icons/tb";

const CableForm = () => {
  return (
    // <div> general
    <div className="computer-form flex flex-col items-center m-4 border rounded-md border-secondary-dark">
      {/* <div> de Form Header */}
      {/* usé el "w-[calc(100%-1rem)]" para que quede separado en el eje X ayq eu con el mx no se podia darle margen */}
      <div className="form-header flex bg-medium-gray h-1/6 w-full  mt-2 mx-auto py-4 px-5 border-b border-secondary-dark">
        <TbColumns className="inline my-auto mx-2 w-6 h-5" />
        <p className="text-base my-auto font-medium">New Item - Enclosures</p>
      </div>

      {/* <div> contenedor del Form */}
      <div className=" form-container h-full w-full p-4 bg-white ">
        <form className="grid grid-cols-2 gap-4">
          <div className="input-name">
            <p className="text-sm mb-2">Name</p>
            <input className="w-full px-2 rounded-md h-9 border-1 border-secondary-dark bg-medium-gray"></input>
          </div>

          <div className="input-status ">
            <p className="text-sm mb-2">Status</p>
            <div className="flex divide-x divide-x-reverse ">
              <select className="cursor-pointer w-full px-2 rounded-l-md h-9 border border-secondary-dark bg-medium-gray">
                <option value="-----">-----</option>
              </select>
              <div className="cursor-pointer h-9 border border-secondary-dark flex items-center hover:bg-primary-light hover:text-white">
                <TbList className="mx-2 " />
              </div>
              <div className="cursor-pointer h-9 border rounded-r-md border-secondary-dark flex items-center hover:bg-primary-light hover:text-white">
                <TbPlus className="mx-2 " />
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

          <div className="input-technician-in-charge">
            <p className="text-sm mb-2">Technician in Charge of the Hardware</p>
            <div className="flex divide-x divide-x-reverse">
              <select className="cursor-pointer w-full px-2 rounded-l-md h-9 border border-secondary-dark bg-medium-gray">
                <option value="-----">-----</option>
              </select>
              <div className="cursor-pointer h-9 border rounded-r-md border-secondary-dark flex items-center hover:bg-primary-light hover:text-white">
                <TbList className="mx-2 " />
              </div>
            </div>
          </div>

          <div className="input-inventory-asset-number">
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

          <div className="select-cable-strand">
            <p className="text-sm mb-2">Cable strand</p>
            <div className="flex divide-x divide-x-reverse ">
              <select className="cursor-pointer w-full px-2 rounded-l-md h-9 border border-secondary-dark bg-medium-gray">
                <option value="-----">-----</option>
              </select>
              <div className="cursor-pointer h-9 border border-secondary-dark flex items-center hover:bg-primary-light hover:text-white">
                <TbList className="mx-2 " />
              </div>
              <div className="cursor-pointer h-9 border rounded-r-md border-secondary-dark flex items-center hover:bg-primary-light hover:text-white">
                <TbPlus className="mx-2 " />
              </div>
            </div>
          </div>

          <div className="input-color">
            <p className="text-sm mb-2">Color</p>
            <input
              type="color"
              value="#e8594b"
              className="w-full px-2 rounded-md h-9 border-1 border-secondary-dark bg-medium-gray"
            ></input>
          </div>
        </form>
      </div>

      {/* <div> contenedor del Endpoint */}
      <div className="endpoint-form-container grid grid-cols-2 w-full bg-white">
        <div className="endpoint-content mb-4">
          <div className="card-header py-4 px-5 ml-2 bg-primary-light bg-opacity-50 border-y border-primary-light rounded-tl h-1/6 ">
            <h4 className="font-medium text-orange-600 ">Endpoint A</h4>
          </div>

          <form className="card-body p-4 px-5 grid grid-cols gap-4">
            <div className="input-asset ">
              <p className="text-sm mb-2">Asset</p>
              <div className="flex divide-x divide-x-reverse ">
                <select className="cursor-pointer w-full px-2 rounded-l-md h-9 border border-secondary-dark bg-medium-gray">
                  <option value="computers">Computers</option>
                  <option value="network-devices">Network devices</option>
                  <option value="devices">Devices</option>
                  <option value="phones">Phones</option>
                  <option value="printers">Printers</option>
                  <option value="pasive-devices">Pasive devices</option>
                </select>
              </div>
              <div className="input ">
                <div className="flex divide-x divide-x-reverse ">
                  <select className="cursor-pointer w-1/4 px-2 rounded-l-md h-9 border border-secondary-dark bg-medium-gray">
                    <option value="-----">-----</option>
                  </select>
                  <div className="cursor-pointer h-9 border rounded-r-md border-secondary-dark flex items-center hover:bg-primary-light hover:text-white">
                    <TbList className="mx-2 " />
                  </div>
                </div>
              </div>
            </div>

            <div className="input-socket-model ">
              <p className="text-sm mb-2">Socket model</p>
              <div className="flex divide-x divide-x-reverse ">
                <select className="cursor-pointer w-1/4 px-2 rounded-l-md h-9 border border-secondary-dark bg-medium-gray">
                  <option value="-----">-----</option>
                </select>
                <div className="cursor-pointer h-9 border border-secondary-dark flex items-center hover:bg-primary-light hover:text-white">
                  <TbList className="mx-2 " />
                </div>
                <div className="cursor-pointer h-9 border rounded-r-md border-secondary-dark flex items-center hover:bg-primary-light hover:text-white">
                  <TbPlus className="mx-2 " />
                </div>
              </div>
            </div>

            <div className="input-socket ">
              <p className="text-sm mb-2">Socket</p>
              <div className="flex divide-x divide-x-reverse ">
                <select className="cursor-pointer w-1/4 px-2 rounded-l-md h-9 border border-secondary-dark bg-medium-gray">
                  <option value="-----">-----</option>
                </select>
                <div className="cursor-pointer h-9 border border-secondary-dark flex items-center hover:bg-primary-light hover:text-white">
                  <TbList className="mx-2 " />
                </div>
              </div>
            </div>

            <div>
              <label>Position</label>
            </div>
          </form>
        </div>

        <div className="endpoint-content mb-4">
          <div className="card-header p-4 px-5 mr-3 bg-opacity-50 bg-primary-light border-y border-primary-light rounded-tr-lg h-1/6">
            <h4 className="font-medium text-orange-600">Endpoint B</h4>
          </div>
          <form className="card-body p-4 px-5 grid grid-cols gap-4">
            <div className="input-asset ">
              <p className="text-sm mb-2">Asset</p>
              <div className="flex divide-x divide-x-reverse ">
                <select className="cursor-pointer w-full px-2 rounded-l-md h-9 border border-secondary-dark bg-medium-gray">
                  <option value="computers">Computers</option>
                  <option value="network-devices">Network devices</option>
                  <option value="devices">Devices</option>
                  <option value="phones">Phones</option>
                  <option value="printers">Printers</option>
                  <option value="pasive-devices">Pasive devices</option>
                </select>
              </div>
              <div className="input ">
                <div className="flex divide-x divide-x-reverse ">
                  <select className="cursor-pointer w-1/4 px-2 rounded-l-md h-9 border border-secondary-dark bg-medium-gray">
                    <option value="-----">-----</option>
                  </select>
                  <div className="cursor-pointer h-9 border rounded-r-md border-secondary-dark flex items-center hover:bg-primary-light hover:text-white">
                    <TbList className="mx-2 " />
                  </div>
                </div>
              </div>
            </div>

            <div className="input-socket-model ">
              <p className="text-sm mb-2">Socket model</p>
              <div className="flex divide-x divide-x-reverse ">
                <select className="cursor-pointer w-1/4 px-2 rounded-l-md h-9 border border-secondary-dark bg-medium-gray">
                  <option value="-----">-----</option>
                </select>
                <div className="cursor-pointer h-9 border border-secondary-dark flex items-center hover:bg-primary-light hover:text-white">
                  <TbList className="mx-2 " />
                </div>
                <div className="cursor-pointer h-9 border rounded-r-md border-secondary-dark flex items-center hover:bg-primary-light hover:text-white">
                  <TbPlus className="mx-2 " />
                </div>
              </div>
            </div>

            <div className="input-socket ">
              <p className="text-sm mb-2">Socket</p>
              <div className="flex divide-x divide-x-reverse ">
                <select className="cursor-pointer w-1/4 px-2 rounded-l-md h-9 border border-secondary-dark bg-medium-gray">
                  <option value="-----">-----</option>
                </select>
                <div className="cursor-pointer h-9 border border-secondary-dark flex items-center hover:bg-primary-light hover:text-white">
                  <TbList className="mx-2 " />
                </div>
              </div>
            </div>

            <div>
              <label>Position</label>
            </div>
          </form>
        </div>
      </div>

      {/* <div> del footer */}
      <div className="form-footer flex h-1/6 w-full  justify-end mb-2 bg-white py-4 px-5 border-t border-secondary-dark">
        <button className="flex items-center mr-4 border-2 border-orange-dark rounded-md bg-primary-light text-white hover:border-black py-2 px-4">
          <TbPlus className="mr-1" />
          <p className="text-lg font-medium">Add</p>
        </button>
      </div>
    </div>
  );
};

export default CableForm;
