import React from 'react';
import { BsPlusLg } from 'react-icons/bs';
import { TbRefreshDot, TbCopy, TbShare, TbTrash, TbEdit, TbMaximize, TbDeviceLaptop, TbApps, TbSitemap, TbServer, TbColumns, TbDeviceDesktop, TbKey, TbPrinter, TbPlug, TbPhone, TbSubtask } from 'react-icons/tb';
import GridItemComputers from './items-grid/GridItemComputers';


const AssetsDashboard = () => {
  return (
    <div className='assets-dashboard flex flex-col items-start border rounded-md border-secondary-dark mx-6 my-5 '>

      <div className='dashboard-header flex flex-row items-center px-5 py-4'>
        <div className='dashboard-options flex flex-row items-center gap-2'>
          <select className='w-36 h-10 border border-secondary-dark rounded-md'>
            <option value="Assets" className='text-sm'>Assets</option>
          </select>
          <BsPlusLg className='stroke-0' />
        </div>

        <div className='buttons flex flex-row py-5 pr-6 gap-5'>
          <TbRefreshDot className='stroke-1 w-6 h-6' />
          <TbCopy className='stroke-1 w-6 h-6' />
          <TbShare className='stroke-1 w-6 h-6' />
          <TbTrash className='stroke-1 w-6 h-6' />
          <TbEdit className='stroke-1 w-6 h-6' />
          <TbMaximize className='stroke-1 w-6 h-6' />
        </div>
      </div>



      <div className='items-grid grid gap-5 pl-5 py-5 grid-cols-5 '>
        <GridItemComputers />
        <div class="grid-item" className='border rounded-md border-black w-36 h-28 pl-1.5'>
          <div className='flex flex-row items-center gap-24'>
            <span className='text-3xl'>0</span>
            <TbApps className='stroke-1 w-6 h-6' />
          </div>
          <span className=''>Software</span>
        </div>
        <div class="grid-item" className='border rounded-md border-black w-36 h-28 pl-1.5'>
          <div className='flex flex-row items-center gap-24'>
            <span className='text-3xl'>1</span>
            <TbSitemap className='stroke-1 w-6 h-6' />
          </div>
          <span className=''>Network divices</span>
        </div>
        <div class="grid-item" className='border rounded-md border-black w-36 h-28 pl-1.5'>
          <div className='flex flex-row items-center gap-24'>
            <span className='text-3xl'>0</span>
            <TbServer className='stroke-1 w-6 h-6' />
          </div>
          <span className=''>Racks</span>
        </div>
        <div class="grid-item" className='border rounded-md border-black w-36 h-28 pl-1.5'>
          <div className='flex flex-row items-center gap-24'>
            <span className='text-3xl'>0</span>
            <TbColumns className='stroke-1 w-6 h-6' />
          </div>
          <span className=''>Enclosures</span>
        </div>
        <div class="grid-item" className='border rounded-md border-black w-36 h-28 pl-1.5'>
          <div className='flex flex-row items-center gap-24'>
            <span className='text-3xl'>0</span>
            <TbDeviceDesktop className='stroke-1 w-6 h-6' />
          </div>
          <span className=''>Monitors</span>
        </div>
        <div class="grid-item" className='border rounded-md border-black w-36 h-28 pl-1.5'>
          <div className='flex flex-row items-center gap-24'>
            <span className='text-3xl'>0</span>
            <TbKey className='stroke-1 w-6 h-6' />
          </div>
          <span className=''>Licenses</span>
        </div>
        <div class="grid-item" className='border rounded-md border-black w-36 h-28 pl-1.5'>
          <div className='flex flex-row items-center gap-24'>
            <span className='text-3xl'>0</span>
            <TbPrinter className='stroke-1 w-6 h-6' />
          </div>
          <span className=''>Printers</span>
        </div>
        <div class="grid-item" className='border rounded-md border-black w-36 h-28 pl-1.5'>
          <div className='flex flex-row items-center gap-24'>
            <span className='text-3xl'>0</span>
            <TbPlug className='stroke-1 w-6 h-6' />
          </div>
          <span className=''>PDUs</span>
        </div>
        <div class="grid-item" className='border rounded-md border-black w-36 h-28 pl-1.5'>
          <div className='flex flex-row items-center gap-24'>
            <span className='text-3xl'>0</span>
            <TbPhone className='stroke-1 w-6 h-6' />
          </div>
          <span className=''>Phones</span>
        </div>
      </div>

      <div className='graphs-grid grid grid-cols-5 gap-5 pl-5 py-5'>
        <div className='w-36 h-36 border border-black rounded-md flex flex-row items-end p-1'>
          <span className='text-sm'>Computers by Status</span>
          <TbSubtask className='stroke-1 w-6 h-6' />
        </div>
        <div className='w-36 h-36 border border-black rounded-md flex flex-row items-end p-1'>
          <span className='text-sm'>Computers by Manufacturers</span>
          <TbEdit className='stroke-1 w-6 h-6' />
        </div>
        <div className='w-36 h-36 border border-black rounded-md flex flex-row items-end p-1'>
          <span className='text-sm'>Computers by Types</span>
          <TbDeviceLaptop className='stroke-1 w-6 h-6' />
        </div>
        <div className='w-36 h-36 border border-black rounded-md flex flex-row items-end p-1'>
          <span className='text-sm'>Network devices by Manufacturers</span>
          <TbEdit className='stroke-1 w-6 h-6' />
        </div>
        <div className='w-36 h-36 border border-black rounded-md flex flex-row items-end p-1'>
          <span className='text-sm'>Monitors by Manufacturers</span>
          <TbEdit className='stroke-1 w-6 h-6' />
        </div>
      </div>

    </div>
  )
}

export default AssetsDashboard