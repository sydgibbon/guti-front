import React from 'react'
import { TbPlus, TbList, TbMap, TbSitemap } from 'react-icons/tb';

const NetworkDevicesForm = () => {
    return (
        <div className='computer-form flex flex-col items-center m-4'>
            <form className='w-full divide-y divide-y-reverse'>
                <div className='form-header flex bg-medium-gray h-1/6 w-full border rounded-t-md border-secondary-dark py-4 px-5'>
                    <TbSitemap className='inline my-auto mr-2' size='24' />
                    <p className='text-base my-auto font-medium'>New Item - Network Device</p>
                </div>
                <div className='form-container h-full w-full p-4 border border-secondary-dark bg-white flex justify-between'>
                <div className='first-form w-1/2 mx-4'>

                </div>
                <div className='second-form w-1/2 mx-4'>
                    
                </div>
                </div>
                <div className='form-footer flex h-1/6 w-full border rounded-b-md border-secondary-dark justify-end mb-2 bg-white py-4 px-5'>
					<button className='flex items-center border-2 border-orange-dark rounded-md bg-primary-light text-white hover:border-black py-2 px-4'>
						<TbPlus className='mr-1' size="20" />
						<p className='text-lg font-medium'>Add</p>
					</button>
				</div>
            </form>
        </div>
    )
}

export default NetworkDevicesForm