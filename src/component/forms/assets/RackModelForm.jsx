import React from 'react';
import FormsTemplate from '../FormsTemplate';

const RackModelForm = () => {
  
  const inputPropierties = [
    {
      title: "Name",
      type: "input",
      key: "name",
    },
    {
      title: "Comments",
      type: "textarea",
      key: "comment",
    },
    {
      title: "Product Number",
      type: "input",
      key: "name",
    },
    {
      title: "Other Pictures",
      type: "file",
      key: "name",
    },
  ]

  const FormHeader = [
    {
      title: "Rack Model",
    },
  ]
  return (
    FormsTemplate(inputPropierties, FormHeader)
  )
}

export default RackModelForm;