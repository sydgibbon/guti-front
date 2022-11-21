import React from 'react'
import { TbPlus, TbList, TbMap, TbApps } from 'react-icons/tb';

const SoftwareForm = () => {
	return (
		<div className='computer-form flex flex-col items-center m-4'>
			<form className='w-full divide-y divide-y-reverse'>
				<div className='form-header flex md:justify-start justify-center bg-medium-gray h-1/6 w-full border rounded-t-md border-secondary-dark py-4 px-5'>
					<TbApps className='inline my-auto mr-2' size='24' />
					<p className='text-base my-auto font-medium'>New Item - Software</p>
				</div>

				<div className='form-container h-full w-full md:px-4 py-4 border border-secondary-dark bg-white flex md:justify-between md:flex-row flex-col'>
					<div className='first-form md:w-1/2 mx-4'>
						<div className='input-name mb-4'>
							<p className='text-sm mb-2'>Name</p>
							<input className='w-full px-2 rounded-md h-9 border-1 border-secondary-dark bg-medium-gray'></input>
						</div>
						<div className='input-associable-to-ticket my-4'>
							<p className='text-sm mb-2'>Associable to a ticket</p>
							<input type='checkbox' checked='checked' className='h-4 w-4 cursor-pointer'></input>
						</div>
						<div className='input-technitian my-4'>
							<p className='text-sm mb-2'>Technician in Charge of the Hardware</p>
							<div className='flex divide-x divide-x-reverse'>
								<select className='w-full px-2 rounded-l-md h-9 border border-secondary-dark bg-medium-gray'>
									<option value="-----">-----</option>
								</select>
								<div className='h-9 border rounded-r-md border-secondary-dark flex items-center hover:bg-primary-light cursor-pointer hover:text-white'>
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
								<div className='h-9 border border-secondary-dark flex items-center hover:bg-primary-light cursor-pointer hover:text-white'>
									<TbList className='mx-2' />
								</div>
								<div className='h-9 border rounded-r-md border-secondary-dark flex items-center hover:bg-primary-light cursor-pointer hover:text-white'>
									<TbPlus className='mx-2' />
								</div>
							</div>
						</div>
						<div className='input-groups my-4'>
							<p className='text-sm mb-2'>Groups</p>
							<div className='flex divide-x divide-x-reverse'>
								<select className='w-full px-2 rounded-l-md h-9 border border-secondary-dark bg-medium-gray'>
									<option value="-----">-----</option>
								</select>
								<div className='h-9 border border-secondary-dark flex items-center hover:bg-primary-light cursor-pointer hover:text-white'>
									<TbList className='mx-2' />
								</div>
								<div className='h-9 border rounded-r-md border-secondary-dark flex items-center hover:bg-primary-light cursor-pointer hover:text-white'>
									<TbPlus className='mx-2' />
								</div>
							</div>
						</div>
						<div className='input-pictures mb-4'>
							<p className='text-sm mb-2'>Pictures</p>
							<div className='border border-dashed rounded-md py-2 px-12 border-secondary-dark bg-medium-gray text-center'>
								<p className='text-sm mb-3 font-semibold'>File(s) (40 Mio max) <a href='' title='Help' className='text-[#3a5693] font-mono text-lg'>i</a></p>
								<p className='text-sm font-semibold'>Drag and drop your file here, or</p>
								<input type="file" accept=".jpg, .jpeg, .png" multiple className='w-full m-0 border rounded-md border-secondary-dark bg-white' />
							</div>

						</div>
						<div className='input-software-category my-4'>
							<p className='text-sm mb-2'>Software category</p>
							<div className='flex divide-x divide-x-reverse'>
								<select className='w-full px-2 rounded-l-md h-9 border border-secondary-dark bg-medium-gray'>
									<option value="-----">-----</option>
								</select>
								<div className='h-9 border border-secondary-dark flex items-center hover:bg-primary-light cursor-pointer hover:text-white'>
									<TbList className='mx-2' />
								</div>
								<div className='h-9 border rounded-r-md border-secondary-dark flex items-center hover:bg-primary-light cursor-pointer hover:text-white'>
									<TbPlus className='mx-2' />
								</div>
							</div>
						</div>
					</div>
					<div className='second-form md:w-1/2 mx-4'>
						<div className='input-child-of mb-4'>
							<p className='text-sm mb-2'>As child of</p>
							<div className='flex divide-x divide-x-reverse'>
								<select className='w-full px-2 rounded-l-md h-9 border border-secondary-dark bg-medium-gray'>
									<option value="-----">-----</option>
								</select>
								<div className='h-9 border rounded-r-md border-secondary-dark flex items-center hover:bg-primary-light cursor-pointer hover:text-white'>
									<TbList className='mx-2' />
								</div>
							</div>
						</div>
						<div className='input-locations my-4'>
							<p className='text-sm mb-2'>Locations</p>
							<div className='flex divide-x divide-x-reverse'>
								<select className='w-full px-2 rounded-l-md h-9 border border-secondary-dark bg-medium-gray'>
									<option value="-----">-----</option>
								</select>
								<div className='h-9 border border-secondary-dark flex items-center hover:bg-primary-light cursor-pointer hover:text-white'>
									<TbList className='mx-2' />
								</div>
								<div className='h-9 border border-secondary-dark flex items-center hover:bg-primary-light cursor-pointer hover:text-white'>
									<TbPlus className='mx-2' />
								</div>
								<div className='rounded-r-md h-9 border border-secondary-dark flex items-center hover:bg-primary-light cursor-pointer hover:text-white'>
									<TbMap className='mx-2' />
								</div>
							</div>
						</div>
						<div className='input-publisher my-4'>
							<p className='text-sm mb-2'>Publisher</p>
							<div className='flex divide-x divide-x-reverse'>
								<select className='w-full px-2 rounded-l-md h-9 border border-secondary-dark bg-medium-gray'>
									<option value="-----">-----</option>
								</select>
								<div className='h-9 border border-secondary-dark flex items-center hover:bg-primary-light cursor-pointer hover:text-white'>
									<TbList className='mx-2' />
								</div>
								<div className='h-9 border rounded-r-md border-secondary-dark flex items-center hover:bg-primary-light cursor-pointer hover:text-white'>
									<TbPlus className='mx-2' />
								</div>
							</div>
						</div>
						<div className='input-user my-4'>
							<p className='text-sm mb-2'>User</p>
							<div className='flex divide-x divide-x-reverse'>
								<select className='w-full px-2 rounded-l-md h-9 border border-secondary-dark bg-medium-gray'>
									<option value="-----">-----</option>
								</select>
								<div className='h-9 border rounded-r-md border-secondary-dark flex items-center hover:bg-primary-light cursor-pointer hover:text-white'>
									<TbList className='mx-2' />
								</div>
							</div>
						</div>
						<div className='input-comment'>
							<p className='text-sm mb-2'>Comment</p>
							<textarea rows='3' className='w-full p-2 border rounded-md border-secondary-dark bg-medium-gray'></textarea>
						</div>
						<div className='input-upgrade my-4'>
							<p className='text-sm mb-2'>Upgrade</p>
							<div className='flex'>
								<input type='checkbox' id='' className='h-4 w-4 mr-2 cursor-pointer'></input>
								<select className='md:w-1/4 w-full px-2 rounded-l-md h-9 border border-secondary-dark bg-medium-gray'>
									<option value="-----">-----</option>
								</select>
								<div className='h-9 border-y border-r rounded-r-md border-secondary-dark flex items-center hover:bg-primary-light cursor-pointer hover:text-white'>
									<TbList className='mx-2' />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='form-footer flex h-1/6 w-full border rounded-b-md border-secondary-dark justify-center md:justify-end mb-2 bg-white py-4 px-5'>
					<button className='flex items-center border-2 border-orange-dark rounded-md bg-primary-light text-white hover:border-black py-2 px-4'>
						<TbPlus className='mr-1' size="20" />
						<p className='text-lg font-medium'>Add</p>
					</button>
				</div>
			</form>
		</div>
	)
}

export default SoftwareForm