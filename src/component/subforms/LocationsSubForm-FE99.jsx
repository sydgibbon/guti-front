import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TbCircleX, TbPlus, TbList, TbMap } from "react-icons/tb";
import { BsLaptop } from "react-icons/bs";
// import { Close } from '@mui/icons-material';

function LocationsSubFormFE99() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const botonAbrir = () => {
    return (
      //  <div onClick={handleOpen} className="h-10 w-10 bg-primary-light">RRR</div>
      <div onClick={handleOpen} className="h-10 border border-secondary-dark flex items-center">
        <TbList className="mx-2" />
      </div>
    )
  };

  return (
    <div>
      {botonAbrir()}
      <Modal open={open} onClose={handleClose}>
        <div className="contenedor-popup outline-none overflow-y-scroll absolute px-10 pb-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border rounded-md border-secondary-dark w-3/4 h-5/6">
          <div className='sticky top-0 w-full flex justify-end p-2 bg-white border-b' >
            <TbCircleX onClick={handleClose} size="30" className="hover:text-orange-dark" />
          </div>
          <div className='contenedor-subform'>
            <div className="form-header flex justify-center md:justify-start bg-medium-gray h-1/6 w-full border rounded-t-md border-secondary-dark mx-auto py-4 px-5">
              <BsLaptop className="inline my-auto mr-2" size="24" />
              <p className="text-base my-auto font-medium">New Item - Computers</p>
            </div>




            <div className="borrar-form-container h-full w-full md:p-4 border border-secondary-dark bg-white flex justify-between">
              {/* se utilizan dos <div> para separar los inputs, este es el primero */}
              <div className="first-form w-full grid md:grid-cols-2 md:mx-4">
                <div className=" mx-4 input-name my-4">
                  <p className="text-sm mb-2">Name</p>
                  {/* <input onChange={handleChange} id="name" className="w-full px-2 rounded-md h-10 border-1 border-secondary-dark bg-medium-gray"></input> */}
                </div>
                <div className=" mx-4 input-locations my-4">
                  <p className="text-sm mb-2">Locations</p>
                  <div className="flex divide-x divide-x-reverse">
                    {/* <SelectComponent onChange={handleChangeSelect} id='locations' className="w-full rounded-l-md h- border border-secondary-dark bg-medium-gray" /> */}
                    
                    <div className="h-10 border border-secondary-dark flex items-center hover:bg-primary-light hover:text-white">
                      <TbPlus className="mx-2" />
                    </div>
                    <div className="rounded-r-md h-10 border border-secondary-dark flex items-center">
                      <TbMap className="mx-2" />
                    </div>
                  </div>
                </div>
                <div className=" mx-4 input-technitian my-4">
                  <p className="text-sm mb-2">
                    Technician in Charge of the Hardware
                  </p>
                  <div className="flex divide-x divide-x-reverse">
                    {/* <SelectComponent onChange={handleChangeSelect} id='computermodels' className="w-full rounded-l-md h- border border-secondary-dark bg-medium-gray" /> */}
                    <div className="h-10 border rounded-r-md border-secondary-dark flex items-center">
                      <TbList className="mx-2" />
                    </div>
                  </div>
                </div>
                <div className=" mx-4 input-group-in-charge my-4">
                  <p className="text-sm mb-2">Group in Charge of the Hardware</p>
                  <div className="flex divide-x divide-x-reverse">
                    {/* <SelectComponent onChange={handleChangeSelect} id='computertypes' className="w-full rounded-l-md h- border border-secondary-dark bg-medium-gray" /> */}
                    <div className="h-10 border border-secondary-dark flex items-center">
                      <TbList className="mx-2" />
                    </div>
                    <div className="h-10 border rounded-r-md border-secondary-dark flex items-center">
                      <TbPlus className="mx-2" />
                    </div>
                  </div>
                </div>
                <div className=" mx-4 input-alternate-username-number my-4">
                  <p className="text-sm mb-2">Alternate Username Number</p>
                  {/* <input onChange={handleChange} id="contact_number" className="w-full px-2 rounded-md h-10 border-1 border-secondary-dark bg-medium-gray"></input> */}
                </div>
                <div className=" mx-4 input-alternate-username my-4">
                  <p className="text-sm mb-2">Alternate Username</p>
                  {/* <input onChange={handleChange} id="contact" className="w-full px-2 rounded-md h-10 border-1 border-secondary-dark bg-medium-gray"></input> */}
                </div>
                <div className=" mx-4 input-user my-4">
                  <p className="text-sm mb-2">User</p>
                  <div className="flex divide-x divide-x-reverse">
                    {/* <SelectComponent onChange={handleChangeSelect} id='locations' className="w-full rounded-l-md h- border border-secondary-dark bg-medium-gray" /> */}
                    <div className="h-10 border rounded-r-md border-secondary-dark flex items-center">
                      <TbList className="mx-2" />
                    </div>
                  </div>
                </div>
                <div className=" mx-4 input-groups my-4">
                  <p className="text-sm mb-2">Groups</p>
                  <div className="flex divide-x divide-x-reverse">
                    {/* <SelectComponent onChange={handleChangeSelect} id='locations' className="w-full rounded-l-md h- border border-secondary-dark bg-medium-gray" /> */}
                    <div className="h-10 border border-secondary-dark flex items-center">
                      <TbList className="mx-2" />
                    </div>
                    <div className="h-10 border rounded-r-md border-secondary-dark flex items-center">
                      <TbPlus className="mx-2" />
                    </div>
                  </div>
                </div>
                <div className=" mx-4 input-comment">
                  <p className="text-sm mb-2">Comment</p>
                  <textarea
                    rows="3"
                    className="w-full p-2 border rounded-md border-secondary-dark bg-medium-gray"
                  ></textarea>
                </div>
                <div className=" mx-4 input-status my-4">
                  <p className="text-sm mb-2">Status</p>
                  <div className="flex divide-x divide-x-reverse">
                    {/* <SelectComponent onChange={handleChangeSelect} id='locations' className="w-full rounded-l-md h- border border-secondary-dark bg-medium-gray" /> */}
                    <div className="h-10 border border-secondary-dark flex items-center">
                      <TbList className="mx-2" />
                    </div>
                    <div className="h-10 border rounded-r-md border-secondary-dark flex items-center">
                      <TbPlus className="mx-2" />
                    </div>
                  </div>
                </div>
                <div className=" mx-4 input-types my-4">
                  <p className="text-sm mb-2">Types</p>
                  <div className="flex divide-x divide-x-reverse">
                    {/* <SelectComponent onChange={handleChangeSelect} id='locations' className="w-full rounded-l-md h- border border-secondary-dark bg-medium-gray" /> */}
                    <div className="h-10 border border-secondary-dark flex items-center">
                      <TbList className="mx-2" />
                    </div>
                    <div className="h-10 border rounded-r-md border-secondary-dark flex items-center">
                      <TbPlus className="mx-2" />
                    </div>
                  </div>
                </div>
                <div className=" mx-4 input-manufacturers my-4">
                  <p className="text-sm mb-2">Manufacturers</p>
                  <div className="flex divide-x divide-x-reverse">
                    {/* <SelectComponent onChange={handleChangeSelect} id='locations' className="w-full rounded-l-md h- border border-secondary-dark bg-medium-gray" /> */}
                    <div className="h-10 border border-secondary-dark flex items-center">
                      <TbList className="mx-2" />
                    </div>
                    <div className="h-10 border rounded-r-md border-secondary-dark flex items-center">
                      <TbPlus className="mx-2" />
                    </div>
                  </div>
                </div>
                <div className=" mx-4 input-model my-4">
                  <p className="text-sm mb-2">Model</p>
                  <div className="flex divide-x divide-x-reverse">
                    {/* <SelectComponent onChange={handleChangeSelect} id='locations' className="w-full rounded-l-md h- border border-secondary-dark bg-medium-gray" /> */}
                    <div className="h-10 border border-secondary-dark flex items-center">
                      <TbList className="mx-2" />
                    </div>
                    <div className="h-10 border rounded-r-md border-secondary-dark flex items-center">
                      <TbPlus className="mx-2" />
                    </div>
                  </div>
                </div>
                <div className=" mx-4 input-serial-number my-4">
                  <p className="text-sm mb-2">Serial Number</p>
                  {/* <input onChange={handleChange} id="serial" className="w-full px-2 rounded-md h-10 border-1 border-secondary-dark bg-medium-gray"></input> */}
                </div>
                <div className=" mx-4 input-inventory-asset-number my-4">
                  <p className="text-sm mb-2">Inventory/Asset Number</p>
                  {/* <input onChange={handleChange} id="otherserial" className="w-full px-2 rounded-md h-10 border-1 border-secondary-dark bg-medium-gray"></input> */}
                </div>
                <div className=" mx-4 input-network my-4">
                  <p className="text-sm mb-2">Network</p>
                  <div className="flex divide-x divide-x-reverse">
                    {/* <SelectComponent onChange={handleChangeSelect} id='locations' className="w-full rounded-l-md h- border border-secondary-dark bg-medium-gray" /> */}
                    <div className="h-10 border rounded-r-md border-secondary-dark flex items-center">
                      <TbList className="mx-2" />
                    </div>
                  </div>
                </div>
                <div className=" mx-4 input-uuid my-4">
                  <p className="text-sm mb-2">UUID</p>
                  {/* <input onChange={handleChange} id="uuid" className="w-full px-2 rounded-md h-10 border-1 border-secondary-dark bg-medium-gray"></input> */}
                </div>
                <div className=" mx-4 input-update-sources my-4">
                  <p className="text-sm mb-2">Update Sources</p>
                  <div className="flex divide-x divide-x-reverse">
                    {/* <SelectComponent onChange={handleChangeSelect} id='locations' className="w-full rounded-l-md h- border border-secondary-dark bg-medium-gray" /> */}
                    <div className="h-10 border border-secondary-dark flex items-center">
                      <TbList className="mx-2" />
                    </div>
                    <div className="h-10 border rounded-r-md border-secondary-dark flex items-center">
                      <TbPlus className="mx-2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>




          </div>
        </div>
      </Modal>
    </div>
  )
}

export default LocationsSubFormFE99