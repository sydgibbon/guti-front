import React from 'react'

function LocationsSubForm(props) {
  return (props.trigger) ? (
    <div className='fixed w-full h-3/4 flex justify-center items-center bg-slate-400'>
      <div className='relative p-12 w-3/4 h-3/4 bg-slate-100'>
        <div>
          <input type="text" className='border-2' />
        </div>
        <button className='top-4 right-4' onClick={() => props.setTrigger(false)}>Cerrar</button>
        {props.children}
      </div>
    </div>
  ) : "";
}

export default LocationsSubForm