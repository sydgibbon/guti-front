import React from 'react';
import { TbPlus, TbList, TbMap, TbDropletFilled2 } from 'react-icons/tb';
import FormsTemplate from '../FormsTemplate';

const CartridgeForm = () => {

  let values =
    Array.from(Array(101).keys());

  const formPropierties = [
    {
      title: "Name",
      type: "input",
      key: "name",
    },
    {
      title: "Locations",
      type: "select",
      key: "locations_id",
      addList: true,
      addNew: true,
      addMap: true,
    },
    {
      title: "Types",
      type: "select",
      key: "cartridgeitemtypes_id",
      addList: true,
      addNew: true,
    },
    {
      title: "Reference",
      type: "input",
      key: "ref",
    },
    {
      title: "Technician in Charge of the Hardware",
      type: "select",
      key: "users_tech_id",//key en backend?
      addNew: true,
    },
    {
      title: "Manufacturers",
      type: "select",
      key: "manufacturers_id",
      addList: true,
      addNew: true,
    },
    {
      title: "Group in Charge of the Hardware",
      type: "select",
      key: "groups_tech_id",
      addList: true,
      addNew: true,
    },
    {
      title: "Comment",
      type: "textarea",
      key: "comment",
    },
    {
      title: "Alert Threshold",
      type: "select",
      key: "alarm_threshold", //como aplico logica?
      options: function () {
      }, // ver con guty/syd
    },
    {
      title: "Pictures",
      type: "file",
      key: "pictures",
    },
    {
      title: "Stock Target",
      type: "number",
      key: "stock_target", // agregar imputnumber en template de los forms
    },
  ]

  const FormHeader = [
    {
      title: "Cartridges",
      style: "inline my-auto mr-2",
      size: 24,
    },
  ]

  return (
    FormsTemplate(formPropierties, FormHeader)
  )
}

export default CartridgeForm;



{/* <div className='input-alert-threshold'>
            <p className='text-sm mb-2'>Alert Threshold</p>
            <div className='flex divide-x divide-x-reverse py-8'>
              <select className='w-full px-2 rounded h-9 border border-secondary-dark bg-medium-gray cursor-pointer'>
                <option> </option>
                {values.map((item) => {
                  return <option value={item}> {item} </option>
                })}
                {values}
              </select>
            </div>
          </div>

          <div className='input-pictures'>
							<p className='text-sm mb-2'>Pictures</p>
							<div className='border border-dashed rounded-md py-2 px-12 border-secondary-dark bg-medium-gray text-center'>
								<p className='text-sm mb-3 font-semibold'>File(s) (40 Mio max) <a href='' title='Help' className='text-[#3a5693] font-mono text-lg'>i</a></p>
								
								<p className='text-sm font-semibold'>Drag and drop your file here, or</p>
								
								<input type="file" accept=".jpg, .jpeg, .png" className='w-full m-0 border rounded-md border-secondary-dark bg-white' />							
							</div>
						</div>

          <div className='input-stock-target'>
            <p className='text-sm mb-2'>Stock target</p>
            <div className='flex divide-x divide-x-reverse'>
              <input type='number' placeholder='0' min='0' className='w-full px-2 rounded h-9 border border-secondary-dark bg-medium-gray'>
              </input>
            </div>
          </div>
        </form>
      </div> */}




          // <div className='printers-form flex flex-col items-center divide-y divide-y-reverse m-4'>
    //   <div className='form-header flex bg-medium-gray h-1/6 w-full border rounded-t-md border-secondary-dark mt-2 mx-auto py-4 px-5'>
    //     <TbDropletFilled2 className='inline my-auto mx-2' />
    //     <p className='text-base my-auto font-medium'>New Item - Cartridge</p>
    //   </div>

    //   <div className='form-container h-full w-full p-4 border border-secondary-dark bg-white'>
    //     <form className="grid grid-cols-2 gap-4 ">
    //       <div className='input-name mb-4'>
    //         <p className='text-sm mb-2'>Name</p>
    //         <input className='w-full px-2 rounded-md h-9 border-1 border-secondary-dark bg-medium-gray'></input>
    //       </div>
    //       <div className='input-locations'>
    //         <p className='text-sm mb-2'>Locations</p>
    //         <div className='flex divide-x divide-x-reverse'>
    //           <select className='w-full px-2 rounded-l-md h-9 border border-secondary-dark bg-medium-gray'>
    //             <option value="-----">-----</option>
    //           </select>
    //           <div className='h-9 border border-secondary-dark flex items-center cursor-pointer hover:bg-primary-light hover:text-white'>
    //             <TbList className='mx-2' />
    //           </div>
    //           <div className='h-9 border border-secondary-dark flex items-center cursor-pointer hover:bg-primary-light hover:text-white'>
    //             <TbPlus className='mx-2' />
    //           </div>
    //           <div className='rounded-r-md h-9 border border-secondary-dark flex items-center cursor-pointer hover:bg-primary-light hover:text-white'>
    //             <TbMap className='mx-2' />
    //           </div>
    //         </div>
    //       </div>
    //       <div className='input-type'>
    //         <p className='text-sm mb-2'>Type</p>
    //         <div className='flex divide-x divide-x-reverse'>
    //           <select className='w-full px-2 rounded-l-md h-9 border border-secondary-dark bg-medium-gray'>
    //             <option value="-----">-----</option>
    //           </select>
    //           <div className='h-9 border border-secondary-dark flex items-center hover:bg-primary-light hover:text-white'>
    //             <TbList className='mx-2' />
    //           </div>
    //           <div className='h-9 border rounded-r-md border-secondary-dark flex items-center cursor-pointer hover:bg-primary-light hover:text-white'>
    //             <TbPlus className='mx-2' />
    //           </div>
    //         </div>
    //       </div>
    //       <div className='input-reference mb-4'>
    //         <p className='text-sm mb-2'>Reference</p>
    //         <input className='w-full px-2 rounded-md h-9 border-1 border-secondary-dark bg-medium-gray'></input>
    //       </div>
    //       <div className='input-technician'>
    //         <p className='text-sm mb-2'>Technician in Charge of the Hardware</p>
    //         <div className='flex divide-x divide-x-reverse'>
    //           <select className='w-full px-2 rounded-l-md h-9 border border-secondary-dark bg-medium-gray'>
    //             <option value="-----">-----</option>
    //           </select>
    //           <div className='h-9 border rounded-r-md border-secondary-dark flex items-center cursor-pointer hover:bg-primary-light hover:text-white'>
    //             <TbList className='mx-2' />
    //           </div>
    //         </div>
    //       </div>
    //       <div className='input-manufacturer'>
    //         <p className='text-sm mb-2'>Manufacturer</p>
    //         <div className='flex divide-x divide-x-reverse'>
    //           <select className='w-full px-2 rounded-l-md h-9 border border-secondary-dark bg-medium-gray'>
    //             <option value="-----">-----</option>
    //           </select>
    //           <div className='h-9 border border-secondary-dark flex items-center cursor-pointer hover:bg-primary-light hover:text-white'>
    //             <TbList className='mx-2' />
    //           </div>
    //           <div className='h-9 border rounded-r-md border-secondary-dark flex items-center cursor-pointer hover:bg-primary-light hover:text-white'>
    //             <TbPlus className='mx-2' />
    //           </div>
    //         </div>
    //       </div>
    //       <div className='input-group-in-charge'>
    //         <p className='text-sm mb-2'>Group in Charge of the Hardware</p>
    //         <div className='flex divide-x divide-x-reverse py-8'>
    //           <select className='w-full px-2 rounded-l-md h-9 border border-secondary-dark bg-medium-gray cursor-pointer'>
    //             <option value="-----">-----</option>
    //           </select>
    //           <div className='h-9 border border-secondary-dark flex items-center cursor-pointer hover:bg-primary-light hover:text-white'>
    //             <TbList className='mx-2' />
    //           </div>
    //           <div className='h-9 border rounded-r-md border-secondary-dark flex items-center cursor-pointer hover:bg-primary-light hover:text-white'>
    //             <TbPlus className='mx-2' />
    //           </div>
    //         </div>
    //       </div>
    //       <div className='input-comments'>
    //         <p className='text-sm mb-2'>Comments</p>
    //         <textarea rows='3' className='w-full p-2 border rounded-md border-secondary-dark bg-medium-gray'></textarea>
    //       </div>

    //       <div className='form-footer flex h-1/6 w-full border rounded-b-md border-secondary-dark justify-end mb-2 bg-white py-4 px-5'>
    //         <button className='flex items-center mr-4 border-2 border-orange-dark rounded-md bg-primary-light text-white hover:border-black py-2 px-4'>
    //           <TbPlus className='mr-1' />
    //           <p className='text-lg font-medium'>Add</p>
    //         </button>
    //       </div>
    //   </div>
