import React from 'react';
import { TbPlus, TbList, TbMap, TbBrowser } from 'react-icons/tb';

const PassiveDeviceForm = () => {
  return (
    <div className='printers-form flex flex-col items-center divide-y divide-y-reverse m-4'>
      <div className='form-header flex bg-medium-gray h-1/6 w-full border rounded-t-md border-secondary-dark mt-2 mx-auto py-4 px-5'>
        <TbBrowser className='inline my-auto mx-2' />
        <p className='text-base my-auto font-medium'>New Item - Passive Device</p>
      </div>
      <div className='form-container h-full w-full p-4 border border-secondary-dark bg-white'>
        <form className="grid grid-cols-2 gap-4 ">
          <div className='input-name mb-4'>
            <p className='text-sm mb-2'>Name</p>
            <input className='w-full px-2 rounded-md h-9 border-1 border-secondary-dark bg-medium-gray'></input>
          </div>
          <div className='input-status'>
            <p className='text-sm mb-2'>Status</p>
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
          <div className='input-locations'>
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
          <div className='input-type'>
            <p className='text-sm mb-2'>Type</p>
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
          <div className='input-technitian'>
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
          <div className='input-manufacturer'>
            <p className='text-sm mb-2'>Manufacturer</p>
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
          <div className='input-group-in-charge'>
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
          <div className='input-model'>
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
          <div className='input-inventory-number mb-4'>
            <p className='text-sm mb-2'>Inventory Number</p>
            <input className='w-full px-2 rounded-md h-9 border-1 border-secondary-dark bg-medium-gray'></input>
          </div>
          <div className='input-comment'>
            <p className='text-sm mb-2'>Comments</p>
            <textarea rows='3' className='w-full p-2 border rounded-md border-secondary-dark bg-medium-gray'></textarea>
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

export default PassiveDeviceForm;