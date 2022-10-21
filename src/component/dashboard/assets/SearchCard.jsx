import { TbTool, TbTrash, TbMap2, TbSearch, TbFileDownload, TbCaretDown } from 'react-icons/tb';
import { BsChevronCompactDown, BsArrow90DegDown } from 'react-icons/bs'
import Switch from "react-switch";

const SearchCard = () => {
  return (
    <div className='search-card mx-4 border border-secondary-dark rounded my-4'>
      <div className='search-card-header pl-5 flex align-center gap-2  h-16 border-b border-secondary-light bg-white'>
        <div className='actions-button w-20 h-8 mt-4 ml-5 border border-black gap-2 flex rounded-md items-center px-2 py-0.5'>
          <BsArrow90DegDown className='h-3 w-3' />
          <span className='font-sans not-italic font-normal text-xs leading-4'>Actions</span>
        </div>

        <div className='buttons flex flex-row p-0 gap-5 my-5 w-72 h-6'>
          <div className='switches items-center gap-2 flex '>

            <div className='map-switch flex items-center gap-1'>
              <Switch className='' uncheckedIcon={false} checkedIcon={false} offHandleColor={'#000'} onHandleColor={'#000'} offColor={'#D9D9D9'} onColor={'#D9D9D9'} height={16} width={30} handleDiameter={10} borderRadius={6} />
              <TbMap2 className='w-6 h-6 stroke-1' />
            </div>

            <div className='trash-switch flex items-center gap-1'>
              <Switch className='' uncheckedIcon={false} checkedIcon={false} offHandleColor={'#000'} onHandleColor={'#000'} offColor={'#D9D9D9'} onColor={'#D9D9D9'} height={16} width={30} handleDiameter={10} borderRadius={6} />
              <TbTrash className='w-6 h-6 stroke-1' />
            </div>

            <div className='search-switch flex items-center gap-1'>
              <Switch className='' uncheckedIcon={false} checkedIcon={false} offHandleColor={'#000'} onHandleColor={'#000'} offColor={'#D9D9D9'} onColor={'#D9D9D9'} height={16} width={30} handleDiameter={10} borderRadius={6} />
              <TbSearch className='w-6 h-6 stroke-1' />
            </div>

            <TbTool className='w-6 h-6 stroke-1' />

            <div className='export-submenu flex items-center'>
              <TbFileDownload className='w-6 h-6 stroke-1' />
              <BsChevronCompactDown className='w-2' />
            </div>

          </div>
        </div>
      </div>

      <table className='w-full'>
        <tr className='gap-2 border-secondary-dark border-y text-left text-xs font-semibold bg-medium-gray'>
          <th className='pl-2'><input type='checkbox' className='w-4 h-4 mt-2 ml-0.5 px-2'></input></th>
          <th className='px-2'><span>NAME</span><TbCaretDown className='inline my-auto' /></th>
          <th className='px-2'>STATUS</th>
          <th className='px-2'>MANUFACTURERS</th>
          <th className='px-2'>SERIAL NUMBER</th>
          <th className='px-2'>TYPES</th>
          <th className='px-2'>MODEL</th>
          <th className='px-2'>OPERATING SYSTEM - NAME</th>
          <th className='px-2'>LOCATIONS</th>
          <th className='px-2'>LAST UPDATE</th>
          <th className='px-2'>COMPONENTS - PROCESSORS</th>
        </tr>

        <tr className='gap-2 text-xs bg-white border-secondary-dark border-b '>
          <td className='pl-2'><input type='checkbox' className='w-4 h-4 mt-2 ml-0.5' /></td>
          <td className='pl-2'>Computer 1</td>
          <td className='pl-2'>Live</td>
          <td className='pl-2'>Lenovo</td>
          <td className='pl-2'>111111111</td>
          <td className='pl-2'>PC</td>
          <td className='pl-2'>W330</td>
          <td className='pl-2'>Windows 10</td>
          <td className='pl-2'>Cordoba</td>
          <td className='pl-2'>2022-10-03 00:36</td>
          <td className='pl-2'>Intel I5-1135g7</td>
        </tr>
      </table>


      <div className='search-card-footer flex items-center w-full bg-medium-gray'>
        <div className='footer-section w-1/2 my-5 '>
          <select className='w-24 ml-5 border-secondary-dark border rounded'>
            <option value="20">20</option>
          </select>
          <span className='ml-4 '>rows / page</span>
        </div>
        <span className='w-1/2 text-lg mt-5'>Showing 1 to 1 of 1 Rows</span>
      </div>
    </div>
  )
}

export default SearchCard
