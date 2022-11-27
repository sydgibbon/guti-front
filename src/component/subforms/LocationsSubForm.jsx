import React from 'react'
import { TbPlus, TbList, TbMap, TbCircleX } from "react-icons/tb";
import { BsLaptop } from "react-icons/bs";

function LocationsSubForm(props) {
  return (props.trigger) ? (
    <div className='absolute w-1/2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
      <div className='relative w-full h-full bg-white p-4 divide-y border rounded-t-md border-secondary-dark '>
        {/* <button className='top-4 right-4' onClick={() => props.setTrigger(false)}>Cerrar</button> */}
        <div className='flex justify-end items-center mb-3'>
          <TbCircleX className='' onClick={() => props.setTrigger(false)} size="24"></TbCircleX>
        </div>
        <div className="form-header flex justify-center md:justify-start bg-medium-gray h-1/6 w-full border rounded-t-md border-secondary-dark py-4 px-5">
          <BsLaptop className="inline my-auto mr-2" size="24" />
          <p className="text-base my-auto font-medium">New Items - Locations</p>
        </div>
        <form action="" className='divide-y divide-y-reverse'>
          <div className='grid grid-cols-2 gap-x-8 border border-secondary-dark bg-white md:p-4'>
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
              <p className="text-sm mb-2">As child of</p>
              <div className="flex divide-x divide-x-reverse">
                <select className="w-full px-2 rounded-l-md h-9 border border-secondary-dark bg-medium-gray">
                  <option value="-----">-----</option>
                </select>
                <div className="h-9 border border-secondary-dark flex items-center">
                  <TbList className="mx-2" />
                </div>
                <div className="rounded-r-md h-9 border border-secondary-dark flex items-center">
                  <TbMap className="mx-2" />
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
              <p className="text-sm mb-2">Location on map</p>

              <input className="w-full px-2 rounded-md h-9 border-1 border-secondary-dark bg-medium-gray" placeholder='Aca va un MAPA'></input>
            </div>
            <div className="input-latitude">
              <p className="text-sm mb-2">Latitude</p>
              <input className="w-full px-2 rounded-md h-9 border-1 border-secondary-dark bg-medium-gray"></input>
            </div>
            <div className="input-Longitude">
              <p className="text-sm mb-2">Longitude</p>
              <input className="w-full px-2 rounded-md h-9 border-1 border-secondary-dark bg-medium-gray"></input>
            </div>
            <div className="input-altitude">
              <p className="text-sm mb-2">Altitude</p>
              <input className="w-full px-2 rounded-md h-9 border-1 border-secondary-dark bg-medium-gray"></input>
            </div>
          </div>
          <div className="form-footer flex h-1/6 w-full border rounded-b-md border-secondary-dark justify-center md:justify-end mb-2 bg-white py-4 px-5">
            <button className="flex items-center md:mr-4 border-2 border-orange-dark rounded-md bg-primary-light text-white hover:border-black py-2 px-4">
              <TbPlus className="mr-1" />
              <p className="text-lg font-medium">Add</p>
            </button>
          </div>
        </form>

        {props.children}
      </div>
    </div>
  ) : "";
}

export default LocationsSubForm