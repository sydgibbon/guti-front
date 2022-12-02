import React from 'react';
import SelectComponent from "../atomic/SelectComponent";
import { appItems } from "../../contexts/AppItems"
import { TbPlus, TbList, TbMap } from "react-icons/tb";



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
    {
      title: "Locations",
      type: "select",
      key: "locations",
      addNew: true,
    },
    {
      title: "Locations",
      type: "select",
      key: "locations",
      addNew: true,
    },
    {
      title: "Locations",
      type: "select",
      key: "locations",
      addNew: true,
    },
    {
      title: "Locations",
      type: "select",
      key: "locations",
      addList: true,
      addNew: true,
      addMap: true,
    },
  ]

  const FormHeader = [
    {
      title: "Computers",
      style: "inline my-auto mr-2",
      size: 24,
    },
  ]

  const FieldIconStyle = "cursor-pointer h-10 border border-l-0 border-secondary-dark flex items-center hover:bg-primary-light hover:text-white hover:border-primary-light"

  return (
    <div className='contenedor flex flex-col items-center m-4 divide-y-reverse'>
        {FormHeader.map((header) => (
          <div className='header flex justify-center md:justify-start bg-medium-gray h-1/6 w-full border border-b-0 rounded-t-md border-secondary-dark mt-2 mx-auto py-4 px-5'>
            {appItems[0].itemContent[0].itemContent.map((app) => {
              // debugger;
              return (header.title === app.name ?
                app.icon(header.style, header.size) : "");
            })}
            <p className="text-base my-auto font-medium">New Item - {header.title}</p>
          </div>
        ))}
      <form action="" className='h-full w-full divide-y divide-y-reverse'>
        <div className='imputs-container grid grid-cols-2 gap-x-8 h-full w-full px-9 py-2 border border-secondary-dark bg-white'>
          {inputPropierties.map((field) => (
            <div className={`mx-4 input-${field.key} my-4`}>
              <p className="text-sm mb-2">{field.title}</p>
              <div className='flex'>
                {
                  field.type === "input" ?
                    <input className="w-full px-2 rounded-md h-10 border-1 border-secondary-dark bg-medium-gray" />
                    : <SelectComponent asset={field.key} className="w-full rounded-l-md h- border border-secondary-dark bg-medium-gray" />
                }
                {
                  field.addList ?
                    <div className={FieldIconStyle}>
                      <TbList className="mx-2 " />
                    </div>
                    : ""
                }
                {
                  field.addNew ?
                    <div className={FieldIconStyle}>
                      <TbPlus className="mx-2 " />
                    </div>
                    : ""
                }
                {
                  field.addMap ?
                    <div className={FieldIconStyle}>
                      <TbMap className="mx-2 " />
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