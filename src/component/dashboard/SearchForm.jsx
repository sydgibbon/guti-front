import React from 'react';
import { TbCirclePlus, TbCircleX, TbCodePlus, TbListSearch, TbSquareMinus, TbSquarePlus, TbStar } from 'react-icons/tb';

const SearchForm = () => {
  return (
    <div className='searchform-container m-4 border pt-2 rounded'>
      <div className='rule flex items-center bg-medium-gray p-2'>
        <div className='remove-button'><TbSquareMinus /></div>
        <select className='border rounded'>
          <option value=''>----</option>
        </select>
        <select className='border rounded'>
          <option value=''>Items Seen</option>
        </select>
        <select className='border rounded'>
          <option>contains</option>
        </select>
        <input type='text' className='bg-white border rounded'></input>
      </div>



      <div className='search-actions flex items-center border-t bg-white py-4 px-5 gap-1 rounded-b'>
        <div className='rule-button flex items-center justify-center rounded border border-black w-16 h-6'>
          <TbSquarePlus className='mr-1'/>
          <span className='text-sm'>rule</span>
        </div>
        <div className='global-rule-button flex items-center border rounded border-black w-28 h-6'>
          <TbCirclePlus className='m-2' />
          <span className='text-sm'>global rule</span>
        </div>
        <div className='group-button flex items-center justify-center border rounded border-black w-20 h-6 bg-'>
          <TbCodePlus className='mr-1'/>
          <span className='text-sm'>group</span>
        </div>
        <div className='search-button flex items-center justify-center border-2 rounded border-[#BB493E] w-24 h-6 bg-[#E8594B] text-white'>
          <TbListSearch className='mr-1'/>
          <span>Search</span>
        </div>
        <div className='save-current-search-button items-center flex border-transparent rounded w-8 h-6'>
          <TbStar className='mx-auto' />
        </div>
        <div className='clear-button items-center flex border-transparent rounded w-8 h-6'>
          <TbCircleX className='mx-auto' />
        </div>
      </div>

    </div>

  )
}

export default SearchForm;