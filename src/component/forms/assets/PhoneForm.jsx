import React from 'react';
import { TbPlus, TbList, TbMap, TbPhone } from 'react-icons/tb';


const PhoneForm = () => {
  return (
    <div className='printers-form flex flex-col items-center divide-y divide-y-reverse m-4'>
      <div className='form-header flex bg-medium-gray h-1/6 w-full border rounded-t-md border-secondary-dark mt-2 mx-auto py-4 px-5'>
        <TbPhone className='inline my-auto mx-2' />
        <p className='text-base my-auto font-medium'>New Item - Phone</p>
      </div>
      <div className='form-container h-full w-full py-8 p-6 border border-secondary-dark bg-white'>
        <form className="grid grid-cols-2 gap-4 ">
          <div className='input-name mb-4'>
            <p className='text-sm mb-2'>Name</p>
            <input className='w-full px-2 rounded-md h-9 border-1 border-secondary-dark bg-medium-gray'></input>
          </div>
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
          <div className='input-types'>
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
          <div className='input-alternate-username-number'>
            <p className='text-sm mb-2'>Alternate Username Number</p>
            <input className='w-full px-2 rounded-md h-9 border-1 border-secondary-dark bg-medium-gray'></input>
          </div>
          <div className='input-serial-number'>
            <p className='text-sm mb-2'>Serial Number</p>
            <input className='w-full px-2 rounded-md h-9 border-1 border-secondary-dark bg-medium-gray'></input>
          </div>
          <div className='input-alternate-username'>
            <p className='text-sm mb-2'>Alternate Username</p>
            <input className='w-full px-2 rounded-md h-9 border-1 border-secondary-dark bg-medium-gray'></input>
          </div>
          <div className='input-inventory-username'>
            <p className='text-sm mb-2'>Inventory Username</p>
            <input className='w-full px-2 rounded-md h-9 border-1 border-secondary-dark bg-medium-gray'></input>
          </div>
          <div className='input-user'>
            <p className='text-sm mb-2'>User</p>
            <div className='flex divide-x divide-x-reverse'>
              <select className='w-full px-2 rounded-l-md h-9 border border-secondary-dark bg-medium-gray'>
                <option value="-----">-----</option>
              </select>
              <div className='h-9 border rounded-r-md border-secondary-dark flex items-center cursor-pointer hover:bg-primary-light hover:text-white'>
                <TbList className='mx-2' />
              </div>
            </div>
          </div>
          <div className='input-managment-type'>
            <p className='text-sm mb-2'>Management type</p>
            <div className='flex divide-x divide-x-reverse'>
              <select className='w-full px-2 rounded h-9 border border-secondary-dark bg-medium-gray'>
                <option>Unit Managment</option>
                <option>Global Managment</option>
              </select>
            </div>
          </div>
          <div className='input-group'>
            <p className='text-sm mb-2'>Group</p>
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
          <div className='input-uuid'>
            <p className='text-sm mb-2'>UUID</p>
            <input className='w-full px-2 rounded-md h-9 border-1 border-secondary-dark bg-medium-gray'></input>
          </div>
          <div className='input-comment'>
            <p className='text-sm mb-2'>Comments</p>
            <textarea rows='3' className='w-full p-2 border rounded-md border-secondary-dark bg-medium-gray'></textarea>
          </div>
          <div className='input-brand'>
            <p className='text-sm mb-8'>Brand</p>
            <input className='w-full py-2 rounded-md h-9 border-1 border-secondary-dark bg-medium-gray'></input>
          </div>
          <div className='input-update-source'>
            <p className='text-sm mb-2'>Update Source</p>
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
          <div className='input-number-lines'>
            <p className='text-sm mb-2'>Number of Lines</p>
            <div className='flex'>
              <input type='number' placeholder='0' min='0' className='w-full px-2 rounded h-9 border border-secondary-dark bg-medium-gray'>
              </input>
            </div>
          </div>
          <div className='input-phone-power-supply-type'>
            <p className='text-sm mb-2'>Phone power supply type</p>
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

          <div className='port gap-3'>
              <p className='text-sm mb-3'>Ports</p>
              <div className='checkbox flex flex-wrap gap-6'>
                <div>
                  <input type='checkbox' name='headset'></input>
                  <span className='pl-2'>Headset</span>
                </div>
                <div>
                  <input type='checkbox' name='speaker'></input>
                  <span className='pl-2'>Speaker</span>
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

export default PhoneForm;