import React from 'react'
import { TbPlus, TbList, TbMap, TbPlug } from 'react-icons/tb';

const PduForm = () => {
  return (
    <div className='computer-form flex flex-col items-center m-4'>
      <form className='w-full divide-y divide-y-reverse'>
        <div className='form-header flex bg-medium-gray h-1/6 w-full border rounded-t-md border-secondary-dark py-4 px-5'>
          <TbPlug className='inline my-auto mr-2' size='24' />
          <p className='text-base my-auto font-medium'>New Item - PDU</p>
        </div>
        <div className='form-container h-full w-full p-4 border border-secondary-dark bg-white flex justify-between'>
          <div className='first-form w-1/2 mx-4'>
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
                <div className='h-9 border border-secondary-dark flex items-center hover:bg-primary-light cursor-pointer hover:text-white'>
                  <TbList className='mx-2' />
                </div>
                <div className='h-9 border border-secondary-dark flex items-center hover:bg-primary-light cursor-pointer hover:text-white'>
                  <TbPlus className='mx-2' />
                </div>
                <div className='rounded-r-md h-9 border border-secondary-dark flex items-center hover:bg-primary-light cursor-pointer hover:text-white'>
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
                <div className='h-9 border rounded-r-md border-secondary-dark flex items-center hover:bg-primary-light cursor-pointer hover:text-white'>
                  <TbList className='mx-2' />
                </div>
              </div>
            </div>
            <div className='input-group-in-charge my-4'>
              <p className='text-sm mb-2'>Group in Charge of the Hardware</p>
              <div className='flex divide-x divide-x-reverse'>
                <select className='w-full px-2 rounded-l-md h-9 border border-secondary-dark bg-medium-gray'>
                  <option value="-----">-----</option>
                </select>
                <div className='h-9 border border-secondary-dark flex items-center hover:bg-primary-light cursor-pointer hover:text-white'>
                  <TbList className='mx-2' />
                </div>
                <div className='h-9 border rounded-r-md border-secondary-dark flex items-center hover:bg-primary-light cursor-pointer hover:text-white'>
                  <TbPlus className='mx-2' />
                </div>
              </div>
            </div>
            <div className='input-comments'>
              <p className='text-sm mb-2'>Comments</p>
              <textarea rows='3' className='w-full p-2 border rounded-md border-secondary-dark bg-medium-gray'></textarea>
            </div>

            <div className='input-serial-number my-4'>
              <p className='text-sm mb-2'>Serial Number</p>
              <input className='w-full px-2 rounded-md h-9 border-1 border-secondary-dark bg-medium-gray'></input>
            </div>
            <div className='input-comments'>
              <p className='text-sm mb-2'>Comments</p>
              <textarea rows='3' className='w-full p-2 border rounded-md border-secondary-dark bg-medium-gray'></textarea>
            </div>


          </div>
          <div className='second-form w-1/2 mx-4'>
            <div className='input-status mb-4'>
              <p className='text-sm mb-2'>Status</p>
              <div className='flex divide-x divide-x-reverse'>
                <select className='w-full px-2 rounded-l-md h-9 border border-secondary-dark bg-medium-gray'>
                  <option value="-----">-----</option>
                </select>
                <div className='h-9 border border-secondary-dark flex items-center hover:bg-primary-light cursor-pointer hover:text-white'>
                  <TbList className='mx-2' />
                </div>
                <div className='h-9 border rounded-r-md border-secondary-dark flex items-center hover:bg-primary-light cursor-pointer hover:text-white'>
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
                <div className='h-9 border border-secondary-dark flex items-center hover:bg-primary-light cursor-pointer hover:text-white'>
                  <TbList className='mx-2' />
                </div>
                <div className='h-9 border rounded-r-md border-secondary-dark flex items-center hover:bg-primary-light cursor-pointer hover:text-white'>
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
                <div className='h-9 border border-secondary-dark flex items-center hover:bg-primary-light cursor-pointer hover:text-white'>
                  <TbList className='mx-2' />
                </div>
                <div className='h-9 border rounded-r-md border-secondary-dark flex items-center hover:bg-primary-light cursor-pointer hover:text-white'>
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
                <div className='h-9 border border-secondary-dark flex items-center hover:bg-primary-light cursor-pointer hover:text-white'>
                  <TbList className='mx-2' />
                </div>
                <div className='h-9 border rounded-r-md border-secondary-dark flex items-center hover:bg-primary-light cursor-pointer hover:text-white'>
                  <TbPlus className='mx-2' />
                </div>
              </div>
            </div>
            <div className='input-inventory-asset-number my-4'>
              <p className='text-sm mb-2'>Inventory/Asset Number</p>
              <input className='w-full px-2 rounded-md h-9 border-1 border-secondary-dark bg-medium-gray'></input>
            </div>            
          </div>
        </div>
        <div className='form-footer flex h-1/6 w-full border rounded-b-md border-secondary-dark justify-end mb-2 bg-white py-4 px-5'>
          <button className='flex items-center border-2 border-orange-dark rounded-md bg-primary-light text-white hover:border-black py-2 px-4'>
            <TbPlus className='mr-1' size="20" />
            <p className='text-lg font-medium'>Add</p>
          </button>
        </div>
      </form>
    </div>
  )
}

export default PduForm