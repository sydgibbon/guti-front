import React from 'react'
import { BsLaptop } from "react-icons/bs";
import { TbPlus, TbList, TbMap } from 'react-icons/tb';

const ComputerForm = () => {
	return (
		// <div> general
		<div className='computer-form flex flex-col w-screen items-center h-screen divide-y divide-y-reverse'>
			{/* <div> de Form Header */}
			{/* usé el "w-[calc(100%-1rem)]" para poder ver los bordes */}
			<div className='form-header flex bg-[#FAFBFC] h-14 w-[calc(100%-1rem)] border rounded-t-md border-[#D9D9D9] mt-2 mx-auto pl-2'>
				<BsLaptop className='inline my-auto mx-2' />
				<p className='text-base my-auto font-medium'>New Item - Computers</p>
			</div>
			{/* <div> contenedor del Form */}
			<div className='form-container h-full w-[calc(100%-1rem)] p-4 border border-[#D9D9D9] bg-white'>
				<form className='flex justify-between'>
					{/* se utilizan dos <div> para separar los inputs, este es el primero */}
					<div className='first-form w-1/2 mx-8'>
						<div className='input-name mb-4'>
							<p className='text-sm mb-2'>Name</p>
							<input className='w-full px-2 rounded-md h-9 border-1 border-[#D9D9D9] bg-[#FAFBFC]'></input>
						</div>
						<div className='input-locations my-4'>
							<p className='text-sm mb-2'>Locations</p>
							<div className='flex divide-x divide-x-reverse'>
								<select className='w-full px-2 rounded-l-md h-9 border border-[#D9D9D9] bg-[#FAFBFC]'>
									<option value="-----">-----</option>
								</select>
								<button className='h-9 border border-[#D9D9D9]'>
									<TbList className='mx-2' />
								</button>
								<button className='h-9 border border-[#D9D9D9]'>
									<TbPlus className='mx-2' />
								</button>
								<button className='rounded-r-md h-9 border border-[#D9D9D9]'>
									<TbMap className='mx-2' />
								</button>
							</div>
						</div>
						<div className='input-technitian my-4'>
							<p className='text-sm mb-2'>Technician in Charge of the Hardware</p>
							<div className='flex divide-x divide-x-reverse'>
								<select className='w-full px-2 rounded-l-md h-9 border border-[#D9D9D9] bg-[#FAFBFC]'>
									<option value="-----">-----</option>
								</select>
								<button className='h-9 border rounded-r-md border-[#D9D9D9]'>
									<TbList className='mx-2' />
								</button>
							</div>
						</div>
						<div className='input-group-in-charge my-4'>
							<p className='text-sm mb-2'>Group in Charge of the Hardware</p>
							<div className='flex divide-x divide-x-reverse'>
								<select className='w-full px-2 rounded-l-md h-9 border border-[#D9D9D9] bg-[#FAFBFC]'>
									<option value="-----">-----</option>
								</select>
								<button className='h-9 border border-[#D9D9D9]'>
									<TbList className='mx-2' />
								</button>
								<button className='h-9 border rounded-r-md border-[#D9D9D9]'>
									<TbPlus className='mx-2' />
								</button>
							</div>
						</div>
						<div className='input-alternate-username-number my-4'>
							<p className='text-sm mb-2'>Alternate Username Number</p>
							<input className='w-full px-2 rounded-md h-9 border-1 border-[#D9D9D9] bg-[#FAFBFC]'></input>
						</div>
						<div className='input-alternate-username my-4'>
							<p className='text-sm mb-2'>Alternate Username</p>
							<input className='w-full px-2 rounded-md h-9 border-1 border-[#D9D9D9] bg-[#FAFBFC]'></input>
						</div>
						<div className='input-user my-4'>
							<p className='text-sm mb-2'>User</p>
							<div className='flex divide-x divide-x-reverse'>
								<select className='w-full px-2 rounded-l-md h-9 border border-[#D9D9D9] bg-[#FAFBFC]'>
									<option value="-----">-----</option>
								</select>
								<button className='h-9 border rounded-r-md border-[#D9D9D9]'>
									<TbList className='mx-2' />
								</button>
							</div>
						</div>
						<div className='input-groups my-4'>
							<p className='text-sm mb-2'>Groups</p>
							<div className='flex divide-x divide-x-reverse'>
								<select className='w-full px-2 rounded-l-md h-9 border border-[#D9D9D9] bg-[#FAFBFC]'>
									<option value="-----">-----</option>
								</select>
								<button className='h-9 border border-[#D9D9D9]'>
									<TbList className='mx-2' />
								</button>
								<button className='h-9 border rounded-r-md border-[#D9D9D9]'>
									<TbPlus className='mx-2' />
								</button>
							</div>
						</div>
						<div className='input-comment'>
							<p className='text-sm mb-2'>Comment</p>
							<textarea rows='3' className='w-full p-2 border rounded-md border-[#D9D9D9] bg-[#FAFBFC]'></textarea>
						</div>
					</div>
					{/* segundo <div> para separar los inputs */}
					<div className='second-form w-1/2 mx-8'>
						<div className='input-status mb-4'>
							<p className='text-sm mb-2'>Status</p>
							<div className='flex divide-x divide-x-reverse'>
								<select className='w-full px-2 rounded-l-md h-9 border border-[#D9D9D9] bg-[#FAFBFC]'>
									<option value="-----">-----</option>
								</select>
								<button className='h-9 border border-[#D9D9D9]'>
									<TbList className='mx-2' />
								</button>
								<button className='h-9 border rounded-r-md border-[#D9D9D9]'>
									<TbPlus className='mx-2' />
								</button>
							</div>
						</div>
						<div className='input-types my-4'>
							<p className='text-sm mb-2'>Types</p>
							<div className='flex divide-x divide-x-reverse'>
								<select className='w-full px-2 rounded-l-md h-9 border border-[#D9D9D9] bg-[#FAFBFC]'>
									<option value="-----">-----</option>
								</select>
								<button className='h-9 border border-[#D9D9D9]'>
									<TbList className='mx-2' />
								</button>
								<button className='h-9 border rounded-r-md border-[#D9D9D9]'>
									<TbPlus className='mx-2' />
								</button>
							</div>
						</div>
						<div className='input-manufacturers my-4'>
							<p className='text-sm mb-2'>Manufacturers</p>
							<div className='flex divide-x divide-x-reverse'>
								<select className='w-full px-2 rounded-l-md h-9 border border-[#D9D9D9] bg-[#FAFBFC]'>
									<option value="-----">-----</option>
								</select>
								<button className='h-9 border border-[#D9D9D9]'>
									<TbList className='mx-2' />
								</button>
								<button className='h-9 border rounded-r-md border-[#D9D9D9]'>
									<TbPlus className='mx-2' />
								</button>
							</div>
						</div>
						<div className='input-model my-4'>
							<p className='text-sm mb-2'>Model</p>
							<div className='flex divide-x divide-x-reverse'>
								<select className='w-full px-2 rounded-l-md h-9 border border-[#D9D9D9] bg-[#FAFBFC]'>
									<option value="-----">-----</option>
								</select>
								<button className='h-9 border border-[#D9D9D9]'>
									<TbList className='mx-2' />
								</button>
								<button className='h-9 border rounded-r-md border-[#D9D9D9]'>
									<TbPlus className='mx-2' />
								</button>
							</div>
						</div>
						<div className='input-serial-number mb-4'>
							<p className='text-sm mb-2'>Serial Number</p>
							<input className='w-full px-2 rounded-md h-9 border-1 border-[#D9D9D9] bg-[#FAFBFC]'></input>
						</div>
						<div className='input-inventory-asset-number mb-4'>
							<p className='text-sm mb-2'>Inventory/Asset Number</p>
							<input className='w-full px-2 rounded-md h-9 border-1 border-[#D9D9D9] bg-[#FAFBFC]'></input>
						</div>
						<div className='input-network my-4'>
							<p className='text-sm mb-2'>Network</p>
							<div className='flex divide-x divide-x-reverse'>
								<select className='w-full px-2 rounded-l-md h-9 border border-[#D9D9D9] bg-[#FAFBFC]'>
									<option value="-----">-----</option>
								</select>
								<button className='h-9 border rounded-r-md border-[#D9D9D9]'>
									<TbList className='mx-2' />
								</button>
							</div>
						</div>
						<div className='input-uuid mb-4'>
							<p className='text-sm mb-2'>UUID</p>
							<input className='w-full px-2 rounded-md h-9 border-1 border-[#D9D9D9] bg-[#FAFBFC]'></input>
						</div>
						<div className='input-update-sources my-4'>
							<p className='text-sm mb-2'>Update Sources</p>
							<div className='flex divide-x divide-x-reverse'>
								<select className='w-full px-2 rounded-l-md h-9 border border-[#D9D9D9] bg-[#FAFBFC]'>
									<option value="-----">-----</option>
								</select>
								<button className='h-9 border border-[#D9D9D9]'>
									<TbList className='mx-2' />
								</button>
								<button className='h-9 border rounded-r-md border-[#D9D9D9]'>
									<TbPlus className='mx-2' />
								</button>
							</div>
						</div>
					</div>
				</form>
			</div>
			{/* <div> del footer */}
			<div className='form-footer flex h-16 w-[calc(100%-1rem)] border rounded-b-md border-[#D9D9D9] justify-end mb-2 bg-white'>
				<button className='flex mr-4 my-auto border-2 border-[#BB493E] rounded-md bg-[#E8594B] text-white'>
					<TbPlus className='inline ml-4 mr-1 my-2' />
					<p className='text-base my-auto font-medium mr-2'>Add</p>
				</button>
			</div>

		</div>
	)
}

export default ComputerForm