import React from 'react'
import { BsLaptop } from "react-icons/bs";
import { TbPlus, TbList, TbMap } from 'react-icons/tb';

const RacksForm = () => {
	return (
		// <div> general
		<div className='computer-form flex flex-col items-center divide-y divide-y-reverse m-4'>
			{/* <div> de Form Header */}
			{/* usé el "w-[calc(100%-1rem)]" para que quede separado en el eje X ayq eu con el mx no se podia darle margen */}
			<div className='form-header flex bg-medium-gray h-1/6 w-full border rounded-t-md border-secondary-dark mt-2 mx-auto py-4 px-5'>
				<BsLaptop className='inline my-auto mx-2' />
				<p className='text-base my-auto font-medium'>New Item - Computers</p>
			</div>
			{/* <div> contenedor del Form */}
			<div className='form-container h-full w-full p-4 border border-secondary-dark bg-white'>
				<form className='flex justify-between'>
					{/* se utilizan dos <div> para separar los inputs, este es el primero */}
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
								<div className='h-9 border border-secondary-dark flex items-center'>
									<TbList className='mx-2' />
								</div>
								<div className='h-9 border border-secondary-dark flex items-center'>
									<TbPlus className='mx-2' />
								</div>
								<div className='rounded-r-md h-9 border border-secondary-dark flex items-center'>
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
								<div className='h-9 border rounded-r-md border-secondary-dark flex items-center'>
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
								<div className='h-9 border border-secondary-dark flex items-center'>
									<TbList className='mx-2' />
								</div>
								<div className='h-9 border rounded-r-md border-secondary-dark flex items-center'>
									<TbPlus className='mx-2' />
								</div>
							</div>
						</div>
						<div className='input-alternate-username-number my-4'>
							<p className='text-sm mb-2'>Serial Number</p>
							<input className='w-full px-2 rounded-md h-9 border-1 border-secondary-dark bg-medium-gray'></input>
						</div>
                        <div className='input-comment mt-4'>
							<p className='text-sm mb-2'>Comment</p>
							<textarea rows='3' className='w-full p-2 border rounded-md border-secondary-dark bg-medium-gray'></textarea>
						</div>
						<div className='my-4'>
							<label>Position in room</label>
							<div>
								<div>No room found or selected</div>
							</div>
						</div>
						<div className='input-number-of-units my-4'>
							<label className='text-sm mb-2'>Number of units</label>
							<input type='number' step='1' min='0' value='0' className='w-full px-2 rounded-md h-9 border-1 border-secondary-dark bg-medium-gray'></input>
						</div>
						<div className='input-number-of-units my-4'>
							<label className='text-sm mb-2'>Height</label>
							<input type='number' step='1' min='0' value='0' className='w-full px-2 rounded-md h-9 border-1 border-secondary-dark bg-medium-gray'></input>
						</div>
						<div className='input-number-of-units my-4'>
							<label className='text-sm mb-2'>Max. power (in watts)</label>
							<input type='number' step='1' min='0' value='0' className='w-full px-2 rounded-md h-9 border-1 border-secondary-dark bg-medium-gray'></input>
						</div>
						<div className='input-number-of-units my-4'>
							<label className='text-sm mb-2'>Max. weight</label>
							<input type='number' step='1' min='0' value='0' className='w-full px-2 rounded-md h-9 border-1 border-secondary-dark bg-medium-gray'></input>
						</div>
					</div>
					{/* segundo <div> para separar los inputs */}
					<div className='second-form w-1/2 mx-4'>
						<div className='input-status mb-4'>
							<p className='text-sm mb-2'>Status</p>
							<div className='flex divide-x divide-x-reverse'>
								<select className='w-full px-2 rounded-l-md h-9 border border-secondary-dark bg-medium-gray'>
									<option value="-----">-----</option>
								</select>
								<div className='h-9 border border-secondary-dark flex items-center'>
									<TbList className='mx-2' />
								</div>
								<div className='h-9 border rounded-r-md border-secondary-dark flex items-center'>
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
								<div className='h-9 border border-secondary-dark flex items-center'>
									<TbList className='mx-2' />
								</div>
								<div className='h-9 border rounded-r-md border-secondary-dark flex items-center'>
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
								<div className='h-9 border border-secondary-dark flex items-center'>
									<TbList className='mx-2' />
								</div>
								<div className='h-9 border rounded-r-md border-secondary-dark flex items-center'>
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
								<div className='h-9 border border-secondary-dark flex items-center'>
									<TbList className='mx-2' />
								</div>
								<div className='h-9 border rounded-r-md border-secondary-dark flex items-center'>
									<TbPlus className='mx-2' />
								</div>
							</div>
						</div>
						<div className='input-serial-number mb-4'>
							<p className='text-sm mb-2'>Inventory/Asset Number</p>
							<input className='w-full px-2 rounded-md h-9 border-1 border-secondary-dark bg-medium-gray'></input>
						</div>
						<div className='input-network mt-4 mb-14'>
							<p className='text-sm mb-2'>Server rooms</p>
							<div className='flex divide-x divide-x-reverse'>
								<select className='w-full px-2 rounded-l-md h-9 border border-secondary-dark bg-medium-gray'>
									<option value="-----">-----</option>
								</select>
								<div className='h-9 border rounded-r-md border-secondary-dark flex items-center'>
									<TbList className='mx-2' />
								</div>
							</div>
						</div>
						{/* Coloqué mt- */}
						<div className='input-door-orientation-in-room'>
							<p className='text-sm mb-2'>Door orientation in room</p>
							<div className='flex divide-x divide-x-reverse'>
								<select className='w-full px-2 rounded-md h-9 border-1 border-secondary-dark bg-medium-gray'>
									<option value="north">North</option>
									<option value="east">East</option>
									<option value="south">South</option>
									<option value="west">West</option>
								</select>
							</div>
						</div>
						<div className='input-number-of-units my-4'>
							<label className='text-sm mb-2'>Width</label>
							<input type='number' step='1' min='0' value='0' className='w-full px-2 rounded-md h-9 border-1 border-secondary-dark bg-medium-gray'></input>
						</div>
						<div className='input-number-of-units my-4'>
							<label className='text-sm mb-2'>Depth</label>
							<input type='number' step='1' min='0' value='0' className='w-full px-2 rounded-md h-9 border-1 border-secondary-dark bg-medium-gray'></input>
						</div>
						<div className='input-number-of-units my-4'>
							<label className='text-sm mb-2'>Measured Power (in watts)</label>
							<input type='number' step='1' min='0' value='0' className='w-full px-2 rounded-md h-9 border-1 border-secondary-dark bg-medium-gray'></input>
						</div>
						<div className='input-number-of-units my-4'>
							<label className='text-sm mb-2'>Background color</label>
							<input type='color' className='w-full px-2 rounded-md h-9 border-1 border-secondary-dark bg-medium-gray'></input>
						</div>						
					</div>
				</form>
			</div>
			{/* <div> del footer */}
			<div className='form-footer flex h-1/6 w-full border rounded-b-md border-secondary-dark justify-end mb-2 bg-white py-4 px-5'>
				<button className='flex items-center mr-4 border-2 border-orange-dark rounded-md bg-primary-light text-white hover:border-black py-2 px-4'>
					<TbPlus className='mr-1' />
					<p className='text-lg font-medium'>Add</p>
				</button>
			</div>

		</div>
	)
}

export default RacksForm