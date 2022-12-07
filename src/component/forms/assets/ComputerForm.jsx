import React, { useState } from "react";
import { BsLaptop } from "react-icons/bs";
import { TbPlus, TbList, TbMap } from "react-icons/tb";
import LocationsSubForm from "../../subforms/LocationsSubForm";
import SelectComponent from "../../atomic/SelectComponent";
import {saveAsset, BASE_URL} from "../../../api/axios";
import LocationsSubFormFE99 from "../../subforms/LocationsSubForm-FE99";

const ComputerForm = () => {
  let formFields = {}
  let formData = new FormData()
  const handleSubmit = (e) => {
    e.preventDefault();
    Object.keys(formFields).forEach(key => {
      formData.append(key, formFields[key])
    })
    saveAsset('computers', formData)
  }
  const handleChange = (e) => {
    formFields[e.target.id] = e.target.value;
  }
  const handleChangeSelect = (data) => {
    formFields[data.id] = data.value;
  }
    const [ButtonPopup, setButtonPopup] = useState(false);


  
    return (
      // <div> general
    <div className="computer-form flex flex-col items-center m-4">
 
      
    <form onSubmit={handleSubmit} action={`${BASE_URL}computers/`} method="POST" encType="multipart/form-date" className="w-full divide-y divide-y-reverse">
        {/* <div> de Form Header */}
        <LocationsSubForm trigger={ButtonPopup} setTrigger={setButtonPopup}></LocationsSubForm>
        <div className="form-header flex justify-center md:justify-start bg-medium-gray h-1/6 w-full border rounded-t-md border-secondary-dark mt-2 mx-auto py-4 px-5">
          <BsLaptop className="inline my-auto mr-2" size="24" />
          <p className="text-base my-auto font-medium">New Item - Computers</p>
        </div>
        {/* <div> contenedor del Form */}
        <div className="form-container h-full w-full md:p-4 border border-secondary-dark bg-white flex justify-between">
          {/* se utilizan dos <div> para separar los inputs, este es el primero */}
          <div className="first-form w-full grid md:grid-cols-2 md:mx-4">
            <div className=" mx-4 input-name my-4">
              <p className="text-sm mb-2">Name</p>
              <input onChange={handleChange}  id="name" className="w-full px-2 rounded-md h-10 border-1 border-secondary-dark bg-medium-gray"></input>
            </div>
            <div className=" mx-4 input-locations my-4">
              <p className="text-sm mb-2">Locations</p>
              <div className="flex divide-x divide-x-reverse">
              <SelectComponent  onChange={handleChangeSelect} id='locations' className="w-full rounded-l-md h- border border-secondary-dark bg-medium-gray"/>
                <div className="h-10 border border-secondary-dark flex items-center">
                  <TbList className="mx-2" />
                </div>
                <LocationsSubFormFE99></LocationsSubFormFE99>
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
                <SelectComponent  onChange={handleChangeSelect} id='computermodels' className="w-full rounded-l-md h- border border-secondary-dark bg-medium-gray"/>
                <div className="h-10 border rounded-r-md border-secondary-dark flex items-center">
                  <TbList className="mx-2" />
                </div>
              </div>
            </div>
            <div className=" mx-4 input-group-in-charge my-4">
              <p className="text-sm mb-2">Group in Charge of the Hardware</p>
              <div className="flex divide-x divide-x-reverse">
              <SelectComponent  onChange={handleChangeSelect} id='computertypes' className="w-full rounded-l-md h- border border-secondary-dark bg-medium-gray"/>
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
              <input onChange={handleChange}  id="contact_number" className="w-full px-2 rounded-md h-10 border-1 border-secondary-dark bg-medium-gray"></input>
            </div>
            <div className=" mx-4 input-alternate-username my-4">
              <p className="text-sm mb-2">Alternate Username</p>
              <input onChange={handleChange}  id="contact" className="w-full px-2 rounded-md h-10 border-1 border-secondary-dark bg-medium-gray"></input>
            </div>
            <div className=" mx-4 input-user my-4">
              <p className="text-sm mb-2">User</p>
              <div className="flex divide-x divide-x-reverse">
              <SelectComponent  onChange={handleChangeSelect} id='locations' className="w-full rounded-l-md h- border border-secondary-dark bg-medium-gray"/>
                <div className="h-10 border rounded-r-md border-secondary-dark flex items-center">
                  <TbList className="mx-2" />
                </div>
              </div>
            </div>
            <div className=" mx-4 input-groups my-4">
              <p className="text-sm mb-2">Groups</p>
              <div className="flex divide-x divide-x-reverse">
              <SelectComponent  onChange={handleChangeSelect} id='locations' className="w-full rounded-l-md h- border border-secondary-dark bg-medium-gray"/>
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
              <SelectComponent  onChange={handleChangeSelect} id='locations' className="w-full rounded-l-md h- border border-secondary-dark bg-medium-gray"/>
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
              <SelectComponent  onChange={handleChangeSelect} id='locations' className="w-full rounded-l-md h- border border-secondary-dark bg-medium-gray"/>
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
              <SelectComponent  onChange={handleChangeSelect} id='locations' className="w-full rounded-l-md h- border border-secondary-dark bg-medium-gray"/>
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
              <SelectComponent  onChange={handleChangeSelect} id='locations' className="w-full rounded-l-md h- border border-secondary-dark bg-medium-gray"/>
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
              <input onChange={handleChange}  id="serial" className="w-full px-2 rounded-md h-10 border-1 border-secondary-dark bg-medium-gray"></input>
            </div>
            <div className=" mx-4 input-inventory-asset-number my-4">
              <p className="text-sm mb-2">Inventory/Asset Number</p>
              <input onChange={handleChange}  id="otherserial" className="w-full px-2 rounded-md h-10 border-1 border-secondary-dark bg-medium-gray"></input>
            </div>
            <div className=" mx-4 input-network my-4">
              <p className="text-sm mb-2">Network</p>
              <div className="flex divide-x divide-x-reverse">
              <SelectComponent  onChange={handleChangeSelect} id='locations' className="w-full rounded-l-md h- border border-secondary-dark bg-medium-gray"/>
                <div className="h-10 border rounded-r-md border-secondary-dark flex items-center">
                  <TbList className="mx-2" />
                </div>
              </div>
            </div>
            <div className=" mx-4 input-uuid my-4">
              <p className="text-sm mb-2">UUID</p>
              <input onChange={handleChange}  id="uuid" className="w-full px-2 rounded-md h-10 border-1 border-secondary-dark bg-medium-gray"></input>
            </div>
            <div className=" mx-4 input-update-sources my-4">
              <p className="text-sm mb-2">Update Sources</p>
              <div className="flex divide-x divide-x-reverse">
              <SelectComponent  onChange={handleChangeSelect} id='locations' className="w-full rounded-l-md h- border border-secondary-dark bg-medium-gray"/>
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
        {/* <div> del footer */}
        <div className="form-footer flex h-1/6 w-full border rounded-b-md border-secondary-dark justify-center md:justify-end mb-2 bg-white py-4 px-5">
          <button className="flex items-center md:mr-4 border-2 border-orange-dark rounded-md bg-primary-light text-white hover:border-black py-2 px-4">
            <TbPlus className="mr-1" />
            <p className="text-lg font-medium">Add</p>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ComputerForm;
