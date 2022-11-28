import React from 'react';
import SelectComponent from "../atomic/SelectComponent";



function FormsTemplate() {
  const inputPropierties = [
    {
      title: "Name",
      type: "input",
      // key: name,
    },
    {
      title: "Otro",
      type: "input",
      // key: otro,
    },
    {
      title: "Locations",
      type: "select",
      // key: locations,
    },
  ]


  return (
    <div className='contenedor flex flex-col items-center m-4'>
      <div className='header flex justify-center md:justify-start bg-medium-gray h-1/6 w-full border rounded-t-md border-secondary-dark mt-2 mx-auto py-4 px-5'>
      </div>
      <form action="">
        <div className='imputs-container grid grid-cols-2 gap-x-4'>
          {inputPropierties.map((field) => (
            <div className=" mx-4 input-name my-4">
              <p className="text-sm mb-2">{field.title}</p>
              {
                field.type === "input" ?
                <input className="w-full px-2 rounded-md h-10 border-1 border-secondary-dark bg-medium-gray" />
                : <SelectComponent asset='locations' className="w-full rounded-l-md h- border border-secondary-dark bg-medium-gray" />
              }
              

            </div>
          ))}
        </div>
        <div className='footer'>

        </div>
      </form>
    </div>
  )
}

export default FormsTemplate