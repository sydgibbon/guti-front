import React from 'react';
import SelectComponent from "../atomic/SelectComponent";
import { appItems } from "../../contexts/AppItems"
import { TbPlus, TbList, TbMap } from "react-icons/tb";



function FormsTemplate(inputPropierties, FormHeader) {

  const renderInputType = (fieldType, fieldKey, renombrarPropiedad) => {
    switch (fieldType) {
      // case "input":
      //   return (<input className="w-full px-2 h-10 rounded-md bg-medium-gray" />)
      case "select":
        return (<SelectComponent asset={fieldKey} className="w-full rounded-md" />)
        break;

      case "input":
        return (<input className="w-full px-2 h-10 rounded-md bg-medium-gray" />)
        break;
      case "textarea":
        return (<textarea rows="3" className="w-full p-2 rounded-md border-secondary-dark bg-medium-gray"></textarea>)
        break;
      case "checkbox":
      debugger

        // return (
        //   <>
        //     <input type='checkbox' className="mr-2"></input>
        //     <span>oli</span>
        //   </>)

        return (
          renombrarPropiedad.map((cosito) => { <>hola</> })
        )
        break;

      default:
        <></>
        break;
    }
  };

  const FieldIconStyle = "cursor-pointer h-10 flex items-center border-secondary-dark px-2"

  return (
    <div className='contenedor flex flex-col items-center m-4 divide-y-reverse'>
      {FormHeader.map((header) => (
        <div className='header flex justify-center md:justify-start bg-medium-gray h-1/6 w-full border border-b-0 rounded-t-md border-secondary-dark mt-2 mx-auto py-4 px-5'>
          {appItems[0].itemContent[0].itemContent.map((app) => {
            return (header.title === app.name ?
              app.icon(header.style, header.size) : "");
          })}
          <p className="text-base my-auto font-medium">New Item - {header.title}</p>
        </div>
      ))}
      <form action="" className='h-full w-full divide-y divide-y-reverse'>
        <div className='inputs-container grid grid-cols-2 gap-x-8 h-full w-full px-9 py-2 border border-secondary-dark bg-white'>
          {inputPropierties.map((field) => (
            <div className={`mx-4 input-${field.key} my-4`}>
              <p className="text-sm mb-2">{field.title}</p>
              <div className={`flex ${field.type != 'checkbox' ? 'border border-secondary-dark bg-medium-gray divide-x' : ''} rounded-md  `}>
                {renderInputType(field.type, field.key, field.renombrarPropiedad)}
                {field.addList ?
                  <div className={FieldIconStyle}>
                    <TbList />
                  </div>
                  : ""}
                {field.addNew ?
                  <div className={FieldIconStyle}>
                    <TbPlus />
                  </div>
                  : ""}
                {field.addMap ?
                  <div className={FieldIconStyle}>
                    <TbMap />
                  </div>
                  : ""}
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