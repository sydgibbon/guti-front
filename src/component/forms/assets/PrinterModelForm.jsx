import React from 'react';
import FormsTemplate from '../FormsTemplate';

const PrinterModelForm = () => {
  
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
      title: "Front Picture",
      type: "file",
      key: "name",
    },
    {
      title: "Rear Picture",
      type: "file",
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
      title: "Printer Model",
    },
  ]
  return (
    FormsTemplate(inputPropierties, FormHeader)
  )
}

export default PrinterModelForm;