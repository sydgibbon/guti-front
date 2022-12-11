import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { TbCircleX, TbPlus, TbList } from "react-icons/tb";
import { BsLaptop } from "react-icons/bs";
import SelectComponent from "../atomic/SelectComponent";
import { saveAsset, BASE_URL } from "../../api/axios";

function LocationsSubForm(props) {

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

  return (
    <div>
      <Modal open={props.trigger} onClose={props.setTrigger}>
        <Box className="popup-container outline-none overflow-y-scroll absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border rounded-md border-secondary-dark w-5/6 md:w-4/6 h-5/6">
          <div className="form-header sticky top-0 flex justify-center md:justify-start bg-medium-gray h-1/8 w-full border-b rounded-t-md border-secondary-dark mx-auto py-4 px-5">
            <BsLaptop className="inline my-auto mr-2" size="24" />
            <p className="text-base my-auto font-medium md:grow">New Item - Computers</p>
            <div className='close-button absolute md:relative top-0 right-0 md:top-1/2 md:px-2 ' >
              <TbCircleX onClick={props.setTrigger} size="30" className="hover:text-orange-dark" />
            </div>
          </div>
          <div className='contenedor-subform pb-10'>
            <form action="" className=''>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-5'>
                <div className="input-name">
                  <p className="text-sm mb-2">Name</p>
                  <input className="w-full px-2 rounded-md h-9 border-1 border-secondary-dark bg-medium-gray"></input>
                </div>
                <div className="input-comment">
                  <p className="text-sm mb-2">Comment</p>
                  <textarea
                    rows="3"
                    className="w-full p-2 border rounded-md border-secondary-dark bg-medium-gray"
                  ></textarea>
                </div>
                <div className="input-child-of">
                  <p className="text-sm mb-2">
                    As child of
                  </p>
                  <div className="flex divide-x divide-x-reverse">
                    <SelectComponent onChange={handleChangeSelect} id='computermodels' className="w-full rounded-l-md h- border border-secondary-dark bg-medium-gray" />
                    <div className="h-10 border rounded-r-md border-secondary-dark flex items-center">
                      <TbList className="mx-2" />
                    </div>
                  </div>
                </div>
                <div className="input-address">
                  <p className="text-sm mb-2">Address</p>
                  <input className="w-full px-2 rounded-md h-9 border-1 border-secondary-dark bg-medium-gray"></input>
                </div>
                <div className="input-zip-code">
                  <p className="text-sm mb-2">Zip Code</p>
                  <input className="w-full px-2 rounded-md h-9 border-1 border-secondary-dark bg-medium-gray"></input>
                </div>
                <div className="input-town">
                  <p className="text-sm mb-2">Town</p>
                  <input className="w-full px-2 rounded-md h-9 border-1 border-secondary-dark bg-medium-gray"></input>
                </div>
                <div className="input-state">
                  <p className="text-sm mb-2">State</p>
                  <input className="w-full px-2 rounded-md h-9 border-1 border-secondary-dark bg-medium-gray"></input>
                </div>
                <div className="input-country">
                  <p className="text-sm mb-2">Country</p>
                  <input className="w-full px-2 rounded-md h-9 border-1 border-secondary-dark bg-medium-gray"></input>
                </div>
                <div className="input-building-number">
                  <p className="text-sm mb-2">Building Number</p>
                  <input className="w-full px-2 rounded-md h-9 border-1 border-secondary-dark bg-medium-gray"></input>
                </div>
                <div className="input-room-number">
                  <p className="text-sm mb-2">Room Number</p>
                  <input className="w-full px-2 rounded-md h-9 border-1 border-secondary-dark bg-medium-gray"></input>
                </div>
                <div className="input-location-map">
                  <p className="text-sm mb-2">Location on Map</p>
                  <input placeholder='ACA VA UN MAPA' className="w-full px-2 rounded-md h-9 border-1 border-secondary-dark bg-medium-gray"></input>
                </div>
                <div className="input-latitude">
                  <p className="text-sm mb-2">Latitude</p>
                  <input className="w-full px-2 rounded-md h-9 border-1 border-secondary-dark bg-medium-gray"></input>
                </div>
                <div className="input-longitude">
                  <p className="text-sm mb-2">Longitude</p>
                  <input className="w-full px-2 rounded-md h-9 border-1 border-secondary-dark bg-medium-gray"></input>
                </div>
                <div className="input-altitude">
                  <p className="text-sm mb-2">Altitude</p>
                  <input className="w-full px-2 rounded-md h-9 border-1 border-secondary-dark bg-medium-gray"></input>
                </div>
              </div>
              <div className="form-footer flex h-1/6 w-full border-t border-secondary-dark justify-center md:justify-end bg-white pt-4 px-5 ">
                <button className="flex items-center md:mr-4 border-2 border-orange-dark rounded-md bg-primary-light text-white hover:border-black py-2 px-4">
                  <TbPlus className="mr-1" />
                  <p className="text-lg font-medium">Add</p>
                </button>
              </div>

            </form>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default LocationsSubForm