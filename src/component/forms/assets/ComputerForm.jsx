import React from 'react'
import { BsLaptop } from "react-icons/bs";
import { TbPlus } from 'react-icons/tb';

const ComputerForm = () => {
	return (
		<div className='computer-form flex flex-col w-full items-center h-screen'>
			<div className='form-header flex bg-[#FAFBFC] h-14 w-5/6 border-1 border-primary-dark rounded-t-xl'>
				<BsLaptop className='inline my-auto mx-2' />
				<p className='text-base my-auto font-medium'>New Item - Computers</p>
			</div>
			<div className='form-container h-5/6 w-5/6 p-4 border-1 border-primary-dark bg-[#FFFFFF]'>
				<form className='flex justify-between'>
					<div className='first-form w-1/2 m-2 mr-8'>
						<div className='name-input'>
							<p>Name</p>
							<input className='w-full'></input>
						</div>
						<div className='locations-input'>
							<p>Locations</p>
							<select className='w-full'>
								<option value="----">----</option>
							</select>
						</div>
						<div className='tecnitian-input'>
							<p>Tecnitian</p>
							<select className='w-full'>
								<option value="----">----</option>
							</select>
						</div>
						<div className='groups-input'>
							<p>Groups</p>
							<select className='w-full'>
								<option value="----">----</option>
							</select>
						</div>
						<div className='name-input'>
							<p>Name</p>
							<input className='w-full'></input>
						</div>
						<div className='name-input'>
							<p>Name</p>
							<input className='w-full'></input>
						</div>
						<div className='groups-input'>
							<p>Groups</p>
							<select className='w-full'>
								<option value="----">----</option>
							</select>
						</div>
						<div className='groups-input'>
							<p>Groups</p>
							<select className='w-full'>
								<option value="----">----</option>
							</select>
						</div>
						<div className='name-input'>
							<p>Coment</p>
							<textarea rows='5' className='w-full'></textarea>
						</div>
					</div>
					<div className='second-form w-1/2 m-2 ml-8'>
						<div className='groups-input'>
							<p>Status</p>
							<select className='w-full'>
								<option value="----">----</option>
							</select>
						</div>
						<div className='groups-input'>
							<p>Types</p>
							<select className='w-full'>
								<option value="----">----</option>
							</select>
						</div>
						<div className='groups-input'>
							<p>Manufacturers</p>
							<select className='w-full'>
								<option value="----">----</option>
							</select>
						</div>
						<div className='groups-input'>
							<p>Model</p>
							<select className='w-full'>
								<option value="----">----</option>
							</select>
						</div>
						<div className='name-input'>
							<p>Serial Number</p>
							<input className='w-full'></input>
						</div>
						<div className='name-input'>
							<p>Inventory/Asset Number</p>
							<input className='w-full'></input>
						</div>
						<div className='groups-input'>
							<p>Network</p>
							<select className='w-full'>
								<option value="----">----</option>
							</select>
						</div>
						<div className='name-input'>
							<p>UUID</p>
							<input className='w-full'></input>
						</div>
						<div className='groups-input'>
							<p>Update Sources</p>
							<select className='w-full'>
								<option value="----">----</option>
							</select>
						</div>
					</div>
				</form>
			</div>
			<div className='form-footer flex h-16 w-5/6 border-1 border-primary-dark rounded-b-xl justify-end '>
				<div className='flex mr-4 my-auto border-2 border-[#BB493E] rounded-md bg-[#E8594B] text-white'>
					<TbPlus className='inline ml-4 mr-1 my-2' />
					<p className='text-base my-auto font-medium mr-2'>Add</p>
				</div>
			</div>

		</div>
	)
}

export default ComputerForm