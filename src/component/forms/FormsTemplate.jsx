import React from 'react';
import SelectComponent from "../atomic/SelectComponent";
import { appItems } from "../../contexts/AppItems"
import { TbPlus } from "react-icons/tb";



function FormsTemplate() {
  const inputPropierties = [
    {
      title: "Name",
      type: "input",
      key: "name",
    },
    {
      title: "Otro",
      type: "input",
      key: "otro",
    },
    {
      title: "Locations",
      type: "select",
      key: "locations",
      addNew: true,
    },
  ]

  const FormPageName = [
    {
      title: "Computers",
    },
  ]


  return (
    <div className='contenedor flex flex-col items-center m-4 divide-y-reverse'>
      <div className='header divide-y-reverse flex justify-center md:justify-start bg-medium-gray h-1/6 w-full border rounded-t-md border-secondary-dark mt-2 mx-auto py-4 px-5'>
        {FormPageName.map((header) => (
          <div>
            {appItems[0].itemContent[0].itemContent.map((app) => {
              // debugger;
              return (header.title == app.name ?
                app.icon() : "");
            })}
            <p className="text-base my-auto font-medium">New Item - {header.title}</p>
          </div>
        ))}
      </div>
      <form action="" className='h-full w-full divide-y divide-y-reverse'>
        <div className='imputs-container grid grid-cols-2 gap-x-8 h-full w-full px-9 py-2 border border-secondary-dark bg-white'>
          {inputPropierties.map((field) => (
            <div className={`mx-4 input-${field.key} my-4`}>
              <p className="text-sm mb-2">{field.title}</p>
              <div className='flex'>
              {
                field.type === "input" ?
                  <input className="w-full px-2 rounded-md h-10 border-1 border-secondary-dark bg-medium-gray" />
                  : <SelectComponent asset='locations' className="w-full rounded-l-md h- border border-secondary-dark bg-medium-gray" />
              }
              {
                field.addNew ?
                  <div className="cursor-pointer h-10 border rounded-r-md border-secondary-dark flex items-center hover:bg-primary-light hover:text-white">
                    <TbPlus className="mx-2 " />
                  </div>
                  : ""
              }
              </div>
            </div>
          ))}
        </div>
        <div className="form-footer flex h-1/6 w-full border rounded-b-md border-secondary-dark justify-end mb-2 bg-white py-4 px-5">
          <button className="flex items-center mr-4 border-2 border-orange-dark rounded-md bg-primary-light text-white hover:border-black py-2 px-4">
            <TbPlus className="mr-1" />
            <p className="text-lg font-medium">Add</p>
          </button>
        </div>
      </form>
    </div>
  )
}

export default FormsTemplate