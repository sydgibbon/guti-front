// rafce
import React from 'react';
import { BsPrinter } from 'react-icons/bs';
import { TbPlus, TbList, TbMap } from 'react-icons/tb';

const PrintersForm = () => {
  return (
    <div className='printers-form flex flex-col items-center divide-y divide-y-reverse m-4'>
      <div className='form-header flex bg-medium-gray h-1/6 w-full border rounded-t-md border-secondary-dark mt-2 mx-auto py-4 px-5'>
        <BsPrinter className='inline my-auto mx-2' />
        <p className='text-base my-auto font-medium'>New Item - Printer</p>
      </div>
      <div className='form-container h-full w-full p-4 border border-secondary-dark bg-white'>
        <form className='flex justify-between'>
          {/* se utilizan dos <div> para separar los inputs, este es el primero */}
          <div className='first-form w-1/2 mx-4 '>
            <div className='input-name mb-4'>
              <p className='text-sm mb-2'>Name</p>
              <input className='w-full px-2 rounded-md h-9 border-1 border-secondary-dark bg-medium-gray'></input>
            </div>
            <div className='input-locations my-4'>
              <p className='text-sm mb-2'>Locations</p>
              <div className='flex divide-x divide-x-reverse'>
                <select className='w-full px-2 rounded-l-md h-9 border border-secondary-dark bg-medium-gray'>
                  <option value="-----">-----</option>
                </select>
                <div className='h-9 border border-secondary-dark flex items-center cursor-pointer hover:bg-primary-light hover:text-white'>
                  <TbList className='mx-2' />
                </div>
                <div className='h-9 border border-secondary-dark flex items-center cursor-pointer hover:bg-primary-light hover:text-white'>
                  <TbPlus className='mx-2' />
                </div>
                <div className='rounded-r-md h-9 border border-secondary-dark flex items-center cursor-pointer hover:bg-primary-light hover:text-white'>
                  <TbMap className='mx-2' />
                </div>
              </div>
            </div>
            <div className='input-technitian my-4'>
              <p className='text-sm mb-2'>Technician in Charge of the Hardware</p>
              <div className='flex divide-x divide-x-reverse'>
                <select className='w-full px-2 rounded-l-md h-9 border border-secondary-dark bg-medium-gray'>
                  <option value="-----">-----</option>
                </select>
                <div className='h-9 border rounded-r-md border-secondary-dark flex items-center cursor-pointer hover:bg-primary-light hover:text-white'>
                  <TbList className='mx-2' />
                </div>
              </div>
            </div>
            <div className='input-group-in-charge my-4'>
              <p className='text-sm mb-2'>Group in Charge of the Hardware</p>
              <div className='flex divide-x divide-x-reverse'>
                <select className='w-full px-2 rounded-l-md h-9 border border-secondary-dark bg-medium-gray cursor-pointer'>
                  <option value="-----">-----</option>
                </select>
                <div className='h-9 border border-secondary-dark flex items-center cursor-pointer hover:bg-primary-light hover:text-white'>
                  <TbList className='mx-2' />
                </div>
                <div className='h-9 border rounded-r-md border-secondary-dark flex items-center cursor-pointer hover:bg-primary-light hover:text-white'>
                  <TbPlus className='mx-2' />
                </div>
              </div>
            </div>
            <div className='input-alternate-username-number my-4'>
              <p className='text-sm mb-2'>Alternate Username Number</p>
              <input className='w-full px-2 rounded-md h-9 border-1 border-secondary-dark bg-medium-gray'></input>
            </div>
            <div className='input-alternate-username my-4'>
              <p className='text-sm mb-2'>Alternate Username</p>
              <input className='w-full px-2 rounded-md h-9 border-1 border-secondary-dark bg-medium-gray'></input>
            </div>
            <div className='input-sysdescr'>
              <p className='text-sm mb-2'>Sysdescr</p>
              <textarea rows='3' className='w-full p-2 border rounded-md border-secondary-dark bg-medium-gray'></textarea>
            </div>
            <div className='input-technitian my-4'>
              <p className='text-sm mb-2'>Management type</p>
              <div className='flex divide-x divide-x-reverse'>
                <select className='w-full px-2 rounded h-9 border border-secondary-dark bg-medium-gray'>
                  <option>Unit Managment</option>
                  <option>Global Managment</option>
                </select>
              </div>
            </div>
            <div className='input-group-in-charge my-4'>
              <p className='text-sm mb-2'>Group in Charge of the Hardware</p>
              <div className='flex divide-x divide-x-reverse'>
                <select className='w-full px-2 rounded-l-md h-9 border border-secondary-dark bg-medium-gray'>
                  <option value="-----">-----</option>
                </select>
                <div className='h-9 border border-secondary-dark flex items-center cursor-pointer hover:bg-primary-light hover:text-white'>
                  <TbList className='mx-2' />
                </div>
                <div className='h-9 border rounded-r-md border-secondary-dark flex items-center cursor-pointer hover:bg-primary-light hover:text-white'>
                  <TbPlus className='mx-2' />
                </div>
              </div>
            </div>
            <div className='input-comment'>
              <p className='text-sm mb-2'>Comments</p>
              <textarea rows='3' className='w-full p-2 border rounded-md border-secondary-dark bg-medium-gray'></textarea>
            </div>
            <div className='input-memory my-4'>
              <p className='text-sm mb-2'>Memory</p>
              <div className='flex divide-x divide-x-reverse'>
                <input type='number' placeholder='0' min='0' className='w-full px-2 rounded h-9 border border-secondary-dark bg-medium-gray'>
                </input>
              </div>
            </div>
            <div className='input-current-counter my-4'>
              <p className='text-sm mb-2'>Current counter of pages</p>
              <div className='flex divide-x divide-x-reverse'>
                <input type='number' placeholder='0' min='0' className='w-full px-2 rounded h-9 border border-secondary-dark bg-medium-gray'>
                </input>
              </div>
            </div>
          </div>
          {/* Formularios derecha */}
          <div className='second-form w-1/2 mx-4'>
            <div className='input-status mb-4'>
              <p className='text-sm mb-2'>Status</p>
              <div className='flex divide-x divide-x-reverse'>
                <select className='w-full px-2 rounded-l-md h-9 border border-secondary-dark bg-medium-gray'>
                  <option value="-----">-----</option>
                </select>
                <div className='h-9 border border-secondary-dark flex items-center cursor-pointer hover:bg-primary-light hover:text-white'>
                  <TbList className='mx-2 ' />
                </div>
                <div className='h-9 border rounded-r-md border-secondary-dark flex items-center cursor-pointer hover:bg-primary-light hover:text-white'>
                  <TbPlus className='mx-2' />
                </div>
              </div>
            </div>
            <div className='input-types my-4'>
              <p className='text-sm mb-2'>Types</p>
              <div className='flex divide-x divide-x-reverse'>
                <select className='w-full px-2 rounded-l-md h-9 border border-secondary-dark bg-medium-gray'>
                  <option value="-----">-----</option>
                </select>
                <div className='h-9 border border-secondary-dark flex items-center hover:bg-primary-light hover:text-white'>
                  <TbList className='mx-2' />
                </div>
                <div className='h-9 border rounded-r-md border-secondary-dark flex items-center cursor-pointer hover:bg-primary-light hover:text-white'>
                  <TbPlus className='mx-2' />
                </div>
              </div>
            </div>
            <div className='input-manufacturers my-4'>
              <p className='text-sm mb-2'>Manufacturers</p>
              <div className='flex divide-x divide-x-reverse'>
                <select className='w-full px-2 rounded-l-md h-9 border border-secondary-dark bg-medium-gray'>
                  <option value="-----">-----</option>
                </select>
                <div className='h-9 border border-secondary-dark flex items-center cursor-pointer hover:bg-primary-light hover:text-white'>
                  <TbList className='mx-2' />
                </div>
                <div className='h-9 border rounded-r-md border-secondary-dark flex items-center cursor-pointer hover:bg-primary-light hover:text-white'>
                  <TbPlus className='mx-2' />
                </div>
              </div>
            </div>
            <div className='input-model my-4'>
              <p className='text-sm mb-2'>Model</p>
              <div className='flex divide-x divide-x-reverse'>
                <select className='w-full px-2 rounded-l-md h-9 border border-secondary-dark bg-medium-gray'>
                  <option value="-----">-----</option>
                </select>
                <div className='h-9 border border-secondary-dark flex items-center cursor-pointer hover:bg-primary-light hover:text-white'>
                  <TbList className='mx-2' />
                </div>
                <div className='h-9 border rounded-r-md border-secondary-dark flex items-center cursor-pointer hover:bg-primary-light hover:text-white'>
                  <TbPlus className='mx-2' />
                </div>
              </div>
            </div>
            <div className='input-serial-number mb-4'>
              <p className='text-sm mb-2'>Serial Number</p>
              <input className='w-full px-2 rounded-md h-9 border-1 border-secondary-dark bg-medium-gray'></input>
            </div>
            <div className='input-inventory-asset-number mb-4'>
              <p className='text-sm mb-2'>Inventory/Asset Number</p>
              <input className='w-full px-2 rounded-md h-9 border-1 border-secondary-dark bg-medium-gray'></input>
            </div>
            <div className='input-user my-4'>
              <p className='text-sm mb-2'>User</p>
              <div className='my-10 flex divide-x divide-x-reverse'>
                <select className='w-full px-2 rounded-l-md h-9 border border-secondary-dark bg-medium-gray'>
                  <option value="-----">-----</option>
                </select>
                <div className='h-9 border rounded-r-md border-secondary-dark flex items-center cursor-pointer hover:bg-primary-light hover:text-white'>
                  <TbList className='mx-2' />
                </div>
              </div>
            </div>
            <div className='input-network my-4'>
              <p className='text-sm mb-2'>Network</p>
              <div className='flex divide-x divide-x-reverse'>
                <select className='w-full px-2 rounded-l-md h-9 border border-secondary-dark bg-medium-gray'>
                  <option value="-----">-----</option>
                </select>
                <div className='h-9 border rounded-r-md border-secondary-dark flex items-center cursor-pointer hover:bg-primary-light hover:text-white'>
                  <TbList className='mx-2' />
                </div>
              </div>
            </div>
            <div className='input-uuid mb-4'>
              <p className='text-sm mb-2'>UUID</p>
              <input className='w-full px-2 rounded-md h-9 border-1 border-secondary-dark bg-medium-gray'></input>
            </div>
            <div className='input-update-sources my-4'>
              <p className='text-sm mb-2'>Update Sources</p>
              <div className='flex divide-x divide-x-reverse'>
                <select className='w-full px-2 rounded-l-md h-9 border border-secondary-dark bg-medium-gray'>
                  <option value=''>-----</option>
                </select>
                <div className='h-9 border border-secondary-dark flex items-center cursor-pointer hover:bg-primary-light hover:text-white'>
                  <TbList className='mx-2' />
                </div>
                <div className='h-9 border rounded-r-md border-secondary-dark flex items-center cursor-pointer hover:bg-primary-light hover:text-white'>
                  <TbPlus className='mx-2' />
                </div>
              </div>
            </div>
            <div className='input-page my-4'>
              <p className='text-sm mb-2'>Initial page counter</p>
              <div className='flex divide-x divide-x-reverse'>
                <input  type='number' placeholder='0' min='0' className='w-full px-2 rounded h-9 border border-secondary-dark bg-medium-gray'>
                </input>
              </div>
            </div>
            <div className='port gap-3'>
              <p className='text-sm mb-2'>Ports</p>
              <div className='checkbox flex flex-wrap gap-6'>
                <div>
                  <input type='checkbox' name='serial'></input>
                  <span className='pl-2'>Serial</span>
                </div>
                <div>
                  <input type='checkbox' name='parallel'></input>
                  <span className='pl-2'>Parallel</span>
                </div>
                <div>
                  <input type='checkbox' name='usb'></input>
                  <span className='pl-2'>USB</span>
                </div>
                <div>
                  <input type='checkbox' name='ethernet'></input>
                  <span className='pl-2'>Ethernet</span>
                </div>
                <div>
                  <input type='checkbox' name='Wifi'></input>
                  <span className='pl-2'>Wifi</span>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className='form-footer flex h-1/6 w-full border rounded-b-md border-secondary-dark justify-end mb-2 bg-white py-4 px-5'>
        <button className='flex items-center mr-4 border-2 border-orange-dark rounded-md bg-primary-light text-white hover:border-black py-2 px-4'>
          <TbPlus className='mr-1' />
          <p className='text-lg font-medium'>Add</p>
        </button>
      </div>
    </div>
  )
}

export default PrintersForm;