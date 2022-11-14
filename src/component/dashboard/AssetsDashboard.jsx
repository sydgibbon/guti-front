import React from 'react';
import { TbRefreshDot, TbCopy, TbShare, TbTrash, TbEdit, TbMaximize, TbDeviceLaptop, TbApps, TbSitemap, TbServer, TbColumns, TbDeviceDesktop, TbKey, TbPrinter, TbPlug, TbPhone, TbSubtask, TbPlus } from 'react-icons/tb';
import GraphGrid from './graph-grid/GraphGrid';
import GridItem from './items-grid/GridItem';
import Donut from '../graph/Donut';


const AssetsDashboard = () => {
  return (
    <div className='assets-dashboard flex flex-col items-start border rounded-md border-secondary-dark mx-6 my-5 bg-white'>

      <div className='dashboard-header flex items-center w-full justify-between px-5 py-4 h-16'>
        <div className='dashboard-options flex items-center gap-2'>
          <select className='cursor-pointer w-36 h-10 border border-secondary-dark rounded-md'>
            <option value="Assets" className='text-sm'>Assets</option>
          </select>
          <div className='cursor-pointer hover:bg-primary-light hover:text-white hover:border-orange-dark hover:border-2 border-transparent border-2 rounded p-2 mx-2'><TbPlus className='stroke-1 w-6 h-6 stroke-current' /></div>
        </div>

        <div className='buttons flex items-center'>
          <div className='cursor-pointer hover:bg-primary-light hover:text-white hover:border-orange-dark hover:border-2 border-transparent border-2 rounded p-2 mx-2'><TbRefreshDot className='stroke-1 w-6 h-6 stroke-current' /></div>
          <div className='cursor-pointer hover:bg-primary-light hover:text-white hover:border-orange-dark hover:border-2 border-transparent border-2 rounded p-2 mx-2'><TbCopy className='stroke-1 w-6 h-6 stroke-current' /></div>
          <div className='cursor-pointer hover:bg-primary-light hover:text-white hover:border-orange-dark hover:border-2 border-transparent border-2 rounded p-2 mx-2'><TbShare className='stroke-1 w-6 h-6 stroke-current' /></div>
          <div className='cursor-pointer hover:bg-primary-light hover:text-white hover:border-orange-dark hover:border-2 border-transparent border-2 rounded p-2 mx-2'><TbTrash className='stroke-1 w-6 h-6 stroke-current' /></div>
          <div className='cursor-pointer hover:bg-primary-light hover:text-white hover:border-orange-dark hover:border-2 border-transparent border-2 rounded p-2 mx-2'><TbEdit className='stroke-1 w-6 h-6 stroke-current' /></div>
          <div className='cursor-pointer hover:bg-primary-light hover:text-white hover:border-orange-dark hover:border-2 border-transparent border-2 rounded p-2 mx-2'><TbMaximize className='stroke-1 w-6 h-6 stroke-current' /></div>
        </div>
      </div>

      <div className='items-grid grid gap-5 pl-5 py-5 grid-cols-5 '>
        <GridItem text='Computers' bgColor='bg-[#F3D0D0]' textColor='text-[#C53232]' bgHoverColor='hover:bg-[#e39393]' borderHoverColor='hover:border-[#D45656]' icon={ <TbDeviceLaptop className="stroke-1 w-6 h-6" /> } />
        <GridItem text='Software' bgColor='bg-[#d1f1a8]' textColor='text-[#70b11c]' bgHoverColor='hover:bg-[#aee666]' borderHoverColor='hover:border-[#8bdc24]' icon={ <TbApps className="stroke-1 w-6 h-6" /> } />
        <GridItem text='Network devices' bgColor='bg-[#c8dae4]' textColor='text-[#4a7b96]' bgHoverColor='hover:bg-[#95b7cb]' borderHoverColor='hover:border-[#6195b2]' icon={ <TbSitemap className="stroke-1 w-6 h-6" /> } />
        <GridItem text='Racks' bgColor='bg-[#f7d79a]' textColor='text-[#b77d0e]' bgHoverColor='hover:bg-[#f1bb53]' borderHoverColor='hover:border-[#e69d12]' icon={ <TbServer className="stroke-1 w-6 h-6" /> } />
        <GridItem text='Enclosures' bgColor='bg-[#d7e8e4]' textColor='text-[#599a8b]' bgHoverColor='hover:bg-[#a6ccc3]' borderHoverColor='hover:border-[#76b0a2]' icon={ <TbColumns className="stroke-1 w-6 h-6" /> } />
        <GridItem text='Monitors' bgColor='bg-[#dc6f6f]' textColor='text-[#661919]' bgHoverColor='hover:bg-[#cd3232]' borderHoverColor='hover:border-[#8f2323]' icon={ <TbDeviceDesktop className="stroke-1 w-6 h-6" /> } />
        <GridItem text='Licenses' bgColor='bg-[#9bc06b]' textColor='text-[#32431c]' bgHoverColor='hover:bg-[#759c42]' borderHoverColor='hover:border-[#4d662c]' icon={ <TbKey className="stroke-1 w-6 h-6" /> } />
        <GridItem text='Printers' bgColor='bg-[#5da8d6]' textColor='text-[#153b52]' bgHoverColor='hover:bg-[#2f84b8]' borderHoverColor='hover:border-[#1f587b]' icon={ <TbPrinter className="stroke-1 w-6 h-6" /> } />
        <GridItem text='PDUs' bgColor='bg-[#ffb62f]' textColor='text-[#624000]' bgHoverColor='hover:bg-[#e29200]' borderHoverColor='hover:border-[#956100]' icon={ <TbPlug className="stroke-1 w-6 h-6" /> } />
        <GridItem text='Phones' bgColor='bg-[#a0cec2]' textColor='text-[#376b5d]' bgHoverColor='hover:bg-[#6eb4a2]' borderHoverColor='hover:border-[#488d7b]' icon={ <TbPhone className="stroke-1 w-6 h-6" /> } />
      </div>

      <div className='graphs-grid grid grid-cols-5 gap-5 pl-5 py-5'>
        <GraphGrid icon={ <TbSubtask className='stroke-2 w-6 h-6' /> } graph={ <Donut asset='computers' itemProp='states_id' /> } text='Computers by Status' bgColor='bg-[#fbf7f7]' textColor='text-[#b76f6f]'/>
        <GraphGrid icon={ <TbEdit className='stroke-2 w-6 h-6' /> } text='Computers by Manufacturers' bgColor='bg-[#f3f5f1]' textColor='text-[#8da07a]'/>
        <GraphGrid icon={ <TbDeviceLaptop className='stroke-2 w-6 h-6' /> } graph={ <Donut asset='computers' itemProp='computertypes_id' /> } text='Computers by Types' bgColor='bg-[#f5f9fa]' textColor='text-[#6da7b6]' />
        <GraphGrid icon={ <TbEdit className='stroke-2 w-6 h-6' /> } text='Network devices by Manufacturers' bgColor='bg-[#fcf8ed]' textColor='text-[#dfb43e]' />
        <GraphGrid icon={ <TbEdit className='stroke-2 w-6 h-6' /> } text='Monitors by Manufacturers' bgColor='bg-[#f9fbfb]' textColor='text-[#7fa9a9]'/>
      </div>
    </div>
  )
}

export default AssetsDashboard