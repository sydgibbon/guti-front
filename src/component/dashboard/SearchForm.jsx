import React from 'react';
import { TbCirclePlus, TbCircleX, TbCodePlus, TbListSearch, TbSquareMinus, TbSquarePlus, TbStar } from 'react-icons/tb';

const SearchForm = () => {
  return (
    <div className='searchform-container m-4 border pt-2 rounded '>
      <div className='rule flex items-center bg-me-[#FAFBFC] p-2 gap-1 hover:bg-medium-gray'>
        <div className='remove-button cursor-pointer hover:bg-primary-light hover:text-white rounded'>
          <TbSquareMinus className='m-2' /></div>
        <select className='border-2 rounded w-20 h-9 cursor-pointer'>
          <option value='' className='text-center text-lg'>----</option>
        </select>
        <select className='border-2 rounded items-center w-32 h-9 px-2 cursor-pointer'>
          <option value=''>Items Seen</option>
        </select>
        <select className='border-2 rounded items-center w-28 h-9 px-2 cursor-pointer'>
          <option>Contains</option>
        </select>
        <input type='text' className='bg-white border-2 rounded w-44 h-9'></input>
      </div>
      <div className='search-actions flex items-center border-t bg-white py-4 px-5 gap-1 rounded-b'>
        <div className='rule-button flex items-center justify-center rounded border-2 border-black w-16 h-6 cursor-pointer hover:bg-primary-light hover:text-white'>
          <TbSquarePlus className='mr-1' />
          <span className='text-sm cursor-pointer' >rule</span>
        </div>
        <div className='global-rule-button flex items-center border-2 rounded border-black w-28 h-6 cursor-pointer hover:bg-primary-light hover:text-white'>
          <TbCirclePlus className='m-2' />
          <span className='text-sm'>global rule</span>
        </div>
        <div className='group-button flex items-center justify-center border-2 rounded border-black w-20 h-6 cursor-pointer hover:bg-primary-light hover:text-white'>
          <TbCodePlus className='mr-1' />
          <span className='text-sm'>group</span>
        </div>
        <div className='search-button flex items-center justify-center border-2 rounded border-[#BB493E] w-24 h-6 bg-[#E8594B] text-white cursor-pointer hover:border-black'>
          <TbListSearch className='mr-1' />
          <span>Search</span>
        </div>
        <div className='save-current-search-button items-center flex border-transparent rounded w-8 h-6 cursor-pointer hover:bg-primary-light hover:text-white'>
          <TbStar className='mx-auto' />
        </div>
        <div className='clear-button items-center flex border-transparent rounded w-8 h-6 cursor-pointer hover:bg-primary-light hover:text-white'>
          <TbCircleX className='mx-auto' />
        </div>
      </div>
    </div>

  )
}

export default SearchForm;