import React from 'react'
import { TbPlus, TbList, TbMap } from "react-icons/tb";

function LocationsSubForm(props) {
  return (props.trigger) ? (
    <div className='absolute w-1/2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 m-4 flex justify-center items-center rounded-md border border-secondary-dark'>
      <div className='relative p-12 w-full h-full bg-slate-100'>
        <form action="">
          <div className='grid grid-cols-2 gap-x-8'>
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
        </form>
        <button className='top-4 right-4' onClick={() => props.setTrigger(false)}>Cerrar</button>
        {props.children}
      </div>
    </div>
  ) : "";
}

export default LocationsSubForm